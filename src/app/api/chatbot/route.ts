import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Fetch comprehensive data from database
    const [
      locations,
      categories,
      destinations,
      groups,
      events,
      instagramProfiles,
      priceStats,
    ] = await Promise.all([
      // Locations with counts
      prisma.location.findMany({
        select: {
          city: true,
          slug: true,
          country: true,
          _count: {
            select: { events: true, groups: true, destinations: true },
          },
        },
        orderBy: { events: { _count: "desc" } },
        take: 20,
      }),
      // Categories
      prisma.category.findMany({
        select: {
          name: true,
          slug: true,
          _count: { select: { events: true } },
        },
        orderBy: { events: { _count: "desc" } },
        take: 15,
      }),
      // Destinations with details
      prisma.destination.findMany({
        select: {
          name: true,
          slug: true,
          _count: { select: { events: true, groups: true } },
          locations: { select: { city: true }, take: 3 },
        },
        orderBy: [
          { events: { _count: "desc" } },
          { groups: { _count: "desc" } },
        ],
        take: 25,
      }),
      // Travel Groups with comprehensive info
      prisma.group.findMany({
        select: {
          name: true,
          slug: true,
          details: true,
          processedShortBio: true,
          instagram: true,
          phone: true,
          email: true,
          locations: { select: { city: true }, take: 5 },
          destinations: { select: { name: true }, take: 5 },
          _count: { select: { events: true, destinations: true } },
        },
        orderBy: { events: { _count: "desc" } },
        take: 20,
        where: { status: "processed" },
      }),
      // Events/Trips with full details
      prisma.event.findMany({
        select: {
          title: true,
          slug: true,
          durations: true,
          price: true,
          details: true,
          source: true,
          group: {
            select: {
              name: true,
              phone: true,
              email: true,
              instagram: true,
            },
          },
          location: { select: { city: true } },
          destinations: { select: { name: true }, take: 3 },
          categories: { select: { name: true }, take: 3 },
        },
        where: { status: "processed" },
        orderBy: { createdAt: "desc" },
        take: 50,
      }),
      // Instagram Profiles
      prisma.instagramProfile.findMany({
        select: {
          username: true,
          name: true,
          followers: true,
          followersCount: true,
          locations: { select: { city: true }, take: 3 },
        },
        orderBy: { followersCount: "desc" },
        take: 15,
      }),
      // Price statistics
      prisma.event.aggregate({
        where: { status: "processed", price: { not: null } },
        _min: { price: true },
        _max: { price: true },
        _avg: { price: true },
      }),
    ]);

    // Analyze trips by price range
    const budgetTrips = events.filter((e) => e.price && e.price <= 3000);
    const affordableTrips = events.filter(
      (e) => e.price && e.price > 3000 && e.price <= 10000
    );
    const premiumTrips = events.filter((e) => e.price && e.price > 10000);

    // Analyze trips by duration
    const oneDayTrips = events.filter((e) =>
      e.durations?.toLowerCase().includes("1 day")
    );
    const twoDayTrips = events.filter(
      (e) =>
        e.durations?.toLowerCase().includes("2 day") ||
        e.durations?.toLowerCase().includes("2 night")
    );
    const longWeekendTrips = events.filter(
      (e) =>
        e.durations?.toLowerCase().includes("3 day") ||
        e.durations?.toLowerCase().includes("3 night") ||
        e.durations?.toLowerCase().includes("4 day")
    );

    // Build comprehensive context
    const prompt = `You are GroupVoyageAI, an expert travel assistant for GroupVoyage - India's premier weekend trip comparison platform.

====================
🌐 ABOUT GROUPVOYAGE PLATFORM
====================
GroupVoyage (www.groupvoyage.in) is a trip comparison and discovery platform that:
- Aggregates weekend trips from ${groups.length} verified travel organizers across India
- Helps users COMPARE prices, itineraries, and trip details from multiple organizers
- Covers ${destinations.length} destinations in ${locations.length} cities
- Specializes in 1-day, 2-day, and long weekend (3-4 day) group trips
- Focuses on budget-friendly travel: trekking, adventure, heritage, nature, and scenic getaways
- Users can browse trips, compare prices, check itineraries, and book directly with organizers
- Platform provides price comparison tables to find the best deals
- Tagline: "Find local groups, compare prices, and join budget-friendly weekend trips"

====================
📊 CURRENT DATABASE STATISTICS
====================
✅ Total Locations: ${locations.length} cities
✅ Total Destinations: ${destinations.length} places
✅ Total Travel Organizers: ${groups.length} verified groups
✅ Total Available Trips: ${events.length} trips
✅ Total Categories: ${categories.length} types
✅ Total Instagram Communities: ${instagramProfiles.length} profiles
✅ Price Range: ₹${priceStats._min.price || 0} - ₹${priceStats._max.price || 50000}
✅ Average Trip Price: ₹${Math.round(priceStats._avg.price || 5000)}

====================
📍 LOCATIONS (Cities with trips available)
====================
${locations
  .map(
    (l) =>
      `• ${l.city}, ${l.country} - ${l._count.events} trips, ${l._count.groups} organizers, ${l._count.destinations} destinations`
  )
  .join("\n")}

====================
🎯 TOP CATEGORIES
====================
${categories.map((c) => `• ${c.name} (${c._count.events} trips)`).join("\n")}

====================
🌟 POPULAR DESTINATIONS
====================
${destinations
  .map(
    (d) =>
      `• ${d.name} - ${d._count.events} trips, ${d._count.groups} organizers${d.locations[0] ? `, accessible from ${d.locations.map((l) => l.city).join(", ")}` : ""}`
  )
  .join("\n")}

====================
🏢 TOP TRAVEL ORGANIZERS
====================
${groups
  .map(
    (g) =>
      `• ${g.name} - ${g._count.events} trips, ${g._count.destinations} destinations${g.locations[0] ? `, based in ${g.locations.map((l) => l.city).join(", ")}` : ""}${g.phone ? `, Contact: ${g.phone}` : ""}${g.instagram ? `, Instagram: @${g.instagram}` : ""}`
  )
  .join("\n")}

====================
🎒 AVAILABLE TRIPS (Sample)
====================
${events
  .slice(0, 20)
  .map(
    (e) =>
      `• ${e.title}
   - Duration: ${e.durations || "Check details"}
   - Price: ${e.price ? `₹${e.price}` : "Contact organizer"}
   - Organized by: ${e.group.name}
   - From: ${e.location.city}${e.destinations[0] ? `
   - Destinations: ${e.destinations.map((d) => d.name).join(", ")}` : ""}${e.categories[0] ? `
   - Category: ${e.categories.map((c) => c.name).join(", ")}` : ""}`
  )
  .join("\n\n")}

====================
💰 PRICE ANALYSIS
====================
📌 Budget Trips (Under ₹3,000): ${budgetTrips.length} trips
Examples: ${budgetTrips
      .slice(0, 5)
      .map((t) => `${t.title} - ₹${t.price} by ${t.group.name}`)
      .join("; ")}

📌 Affordable Trips (₹3,001 - ₹10,000): ${affordableTrips.length} trips
Examples: ${affordableTrips
      .slice(0, 5)
      .map((t) => `${t.title} - ₹${t.price} by ${t.group.name}`)
      .join("; ")}

� Premium Trips (₹10,000+): ${premiumTrips.length} trips

====================
⏱️ DURATION ANALYSIS
====================
📅 1-Day Trips: ${oneDayTrips.length} options
📅 2-Day/Weekend Trips: ${twoDayTrips.length} options
📅 Long Weekend (3-4 days): ${longWeekendTrips.length} options

====================
📱 INSTAGRAM TRAVEL COMMUNITIES
====================
${instagramProfiles
  .map(
    (p) =>
      `• @${p.username} (${p.name || "Travel Community"}) - ${p.followersCount ? `${p.followersCount.toLocaleString()} followers` : p.followers}`
  )
  .join("\n")}

====================
🎯 HOW GROUPVOYAGE WORKS
====================
1. Browse & Discover: Users explore trips by location, destination, duration, category, or price
2. Compare Prices: View multiple organizers offering similar trips with price comparison tables
3. Check Details: Review itineraries, inclusions, exclusions, and organizer details
4. Book Directly: Users contact organizers directly via phone/email/Instagram or visit their booking pages
5. Platform Benefits: Saves time by comparing multiple options in one place, transparent pricing

====================
💬 USER QUESTION
====================
${message}

====================
📋 INSTRUCTIONS
====================
1. Use ONLY the actual database data provided above
2. Be specific with real names, prices, and numbers from the data
3. When asked "what is this website about", explain the comparison platform concept
4. For budget queries, provide specific trip names and exact prices from the data
5. For booking questions, explain users can contact organizers directly (provide contact info if available)
6. If asked about specific destinations/locations, mention actual trips available from the data
7. **ITINERARY GUIDANCE**: When users ask about itineraries or trip details:
   - Mention the trip title, duration, price, and organizer
   - Explain that complete day-by-day itineraries are available on the trip's detail page
   - Guide them: "Click on the trip card to view the full itinerary with day-wise plans, inclusions, exclusions, and booking details"
   - Provide the organizer's contact info (phone/email/Instagram) if they want direct details
   - Example: "For the complete itinerary of [Trip Name], visit the trip page where you'll find detailed day-by-day plans. You can also contact [Organizer] directly at [phone/email]"
8. Always provide helpful, accurate, and actionable information
9. Keep responses friendly, conversational (3-6 sentences), and use emojis for engagement
10. If data is limited for a query, suggest checking the website or contacting organizers for detailed itineraries
11. Highlight GroupVoyage's value: price comparison, multiple organizers, easy discovery, transparent information

Respond now:`;

    const apiKey =
      process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    console.log(
      "🔑 API Key check:",
      apiKey ? `Found (${apiKey.substring(0, 10)}...)` : "NOT FOUND"
    );

    if (!apiKey) {
      console.error("❌ No Gemini API key found in environment variables");
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    console.log("🚀 Calling Gemini API...");
    console.log("📊 Context includes:", {
      locations: locations.length,
      destinations: destinations.length,
      groups: groups.length,
      events: events.length,
      categories: categories.length,
      instagramProfiles: instagramProfiles.length,
    });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 500,
            topP: 0.9,
            topK: 40,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Gemini API HTTP error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to get AI response", details: errorText },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log("✅ Gemini API response received");

    const botMessage = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!botMessage) {
      console.error("⚠️ No message in Gemini response:", data);
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    console.log("💬 Sending response to client");
    return NextResponse.json({
      message: botMessage,
      dataUsed: {
        locationsCount: locations.length,
        destinationsCount: destinations.length,
        groupsCount: groups.length,
        tripsCount: events.length,
        categoriesCount: categories.length,
        instagramProfilesCount: instagramProfiles.length,
        priceRange: {
          min: priceStats._min.price,
          max: priceStats._max.price,
          avg: Math.round(priceStats._avg.price || 5000),
        },
      },
    });
  } catch (error) {
    console.error("❌ Chatbot API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

