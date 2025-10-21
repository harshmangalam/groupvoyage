import { PrismaClient } from "./generated/client";
import _ from "lodash";
import slugify from "slugify";

const prisma = new PrismaClient();

export const HyderabadSlug = "in-hyderabad";
export const BangaloreSlug = "in-bangalore";

const LOCATIONS = [
  {
    city: "Hyderabad",
    slug: HyderabadSlug,
    country: "India",
    posterUrl:
      "https://i.pinimg.com/736x/1a/62/c3/1a62c309f522284076611e89b4288742.jpg",
  },
  {
    city: "Bangalore",
    slug: BangaloreSlug,
    country: "India",
    posterUrl:
      "https://i.pinimg.com/736x/de/10/6e/de106e92e9037a37e0704be87a51fe1e.jpg",
  },
];

const destination = {
  name: "Pondicherry",
  slug: "pondicherry",
}

const CATEGORIES = [
  // 🌿 Nature & Outdoors
  "trekking",
  "hiking",
  "camping",

  // 🏛️ Heritage & Culture
  "heritage",

  // 🎉 Adventure & Experiences
  "adventure",

  // 🛶 Leisure & Activities
  "picnic",
  "day hike",

  // 🧘 Relaxation & Retreats
  "relaxation",

  // 🏡 Travel Style
  "multi-day",

  // 🍴 Food & Nightlife
  "local food trail",
  "street food",
];

const goadventureGroup = {
  name: "Go Adventure",
  slug: "goadventure",
  details:
    "Book trips at goadventures, packages & treks to Meghalaya, Himachal Pradesh, Uttarakhand, Ladakh & across India. We provide weekend trips from hyderabad, bangalore and chennai. Packages: Spiti valley, Leh Ladakh bike trip, Andaman, Gokarna & many more",
  processedShortBio: null,
  processedDescription: null,
  instagram: "https://www.instagram.com/goadventure.in",
  phone: "8885785457",
  email: "revanth@goadventure.in",
  meta: {
    whatsapp:
      "https://api.whatsapp.com/send/?phone=919382333457&text=Coming%20from%20groupvoyage.in%20platform%20wants%20to%20know%20about%20upcoming%20weekend%20trips",
  },
  source: "https://goadventure.in",
  logo: "https://goadventure.in/img/goadventure-log.png",
  posterUrls: [
    "https://go-adventure-01.s3.ap-south-1.amazonaws.com/prod/assets/images/ddecce03da94970ad623f14ad167d39e.jpg",
    "https://go-adventure-01.s3.ap-south-1.amazonaws.com/prod/assets/images/c7c6c1ff4d8507c4e38eecf96e1cf839.jpg",
    "https://go-adventure-01.s3.ap-south-1.amazonaws.com/prod/assets/images/4c61efb9e8e7c718caa1b6dfa99bd228",
    "https://go-adventure-01.s3.ap-south-1.amazonaws.com/prod/assets/images/71b45c2ab1f0f29a84399e4762799231.jpg",
    "https://go-adventure-01.s3.ap-south-1.amazonaws.com/prod/assets/images/7ebf0d53aa49838588459d9491d2210c.jpg",
  ],
  tagLine: "GoAdventure | Discover Your Next Adventure",
  status: "processed",
};

const goadventureEvent = {
  title: "Pondicherry & Mahabalipuram Trip",
  slug: "pondicherry-goadventure-in-bangalore",
  durations: "3 days 2 night",
  details:
    "Away from the hustle and bustle of big cities... Puducherry is a quiet little town on the southern coast of India. The unmistakable French connection, the quaint colonial heritage buildings, the spiritual sceneries, the endless stretches of unspoiled beaches and backwaters and a surprising choice of restaurants serving a variety of cuisines draws travelers from near and far to the city. It has a special vibe, not felt anywhere else in India. It is a blend of spiritual aura, colonial heritage, Tamil culture and the cosmopolitan flair of many nationalities in a small town",
  price: 6999,
  posterUrls: [
    "https://go-adventure-01.s3.ap-south-1.amazonaws.com/prod/assets/images/d898d0218198ab95aa2b947f25d69f3f.jpg",
  ],
  includes: [
    "Hyd to Hyd transportation",
    "Accomodation",
    "First aid and",
    "Certified Trek Leaders",
    "Facilitator/(s) reimbursement.",
  ],
  excludes: [
    "Boat ride to paradise beach.",
    "Any kind of personal expenses.",
    "Food during the transit.",
    "GST",
    "Mules or porter to carry personal luggage.",
    "Anything not specifically mentioned under the head.",
  ],
  source: "https://goadventure.in/packages/pondicherry",
  meta: {
    originalPrice: 9999,
  },
};

const goadventureCategories = ["heritage", "local food trail", "relaxation"];

async function main() {
  // Locations
  for (const location of LOCATIONS) {
    await prisma.location.upsert({
      where: { slug: location.slug }, // assuming each location has a unique slug
      update: {}, // nothing to update, or put fields you want to update here
      create: location,
    });
  }

  // Categories
  for (const c of CATEGORIES) {
    const name = _.startCase(_.toLower(c));
    const slug = slugify(c);

    await prisma.category.upsert({
      where: { slug }, // assuming slug is unique
      update: { name },
      create: { name, slug },
    });
  }

  // Groups
  await prisma.group.upsert({
    where: { slug: goadventureGroup.slug },
    update: {
      status: "processed",
      locations: {
        connect: { slug: BangaloreSlug },
      },
    },
    create: {
      ...goadventureGroup,
      status: "processed",
      locations: {
        connect: { slug: BangaloreSlug },
      },
    },
  });

  // Events
  await prisma.event.upsert({
    where: { slug: goadventureEvent.slug }, // assuming event has unique slug
    update: {
      status: "processed",
      location: { connect: { slug: BangaloreSlug } },
      group: { connect: { slug: goadventureGroup.slug } },
      categories: { connect: goadventureCategories.map((c) => ({ slug: slugify(c) }))}
    },
    create: {
      ...goadventureEvent,
      status: "processed",
      location: { connect: { slug: BangaloreSlug } },
      group: { connect: { slug: goadventureGroup.slug } },
      categories: { connect: goadventureCategories.map((c) => ({ slug: slugify(c) }))}
    },
  });

  // Destinations
  await prisma.destination.upsert({
    where: { slug: destination.slug },
    update: {
      locations: { connect: [{ slug: HyderabadSlug }, { slug: BangaloreSlug }] },
      events: { connect: [{ slug: goadventureEvent.slug }] },
      groups: { connect: [{ slug: goadventureGroup.slug }] },
    },
    create: {
      ...destination,
      locations: { connect: [{ slug: HyderabadSlug }, { slug: BangaloreSlug }] },
      events: { connect: [{ slug: goadventureEvent.slug }] },
      groups: { connect: [{ slug: goadventureGroup.slug }] },
    },
  });
}

main();
