import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs"; // Ensure Node.js runtime

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url, { cache: "no-store" }); // Disable caching
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const data = await response.arrayBuffer();
    return new NextResponse(data, {
      headers: {
        "Content-Type": response.headers.get("content-type") || "image/jpeg",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch image", details: error.message },
      { status: 500 }
    );
  }
}
