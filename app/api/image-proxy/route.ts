import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json(
      { error: "Image URL is required" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      console.error(
        `Failed to fetch image from ${imageUrl}: ${response.statusText}`,
      );
      return NextResponse.json(
        { error: "Failed to fetch image", details: response.statusText },
        { status: response.status },
      );
    }

    // Get the content type from the original response
    const contentType = response.headers.get("content-type");

    // Create a new response with the image data
    const headers = new Headers();
    if (contentType) {
      headers.set("Content-Type", contentType);
    }
    // Set a cache control header for better performance
    headers.set("Cache-Control", "public, max-age=31536000, immutable"); // Cache for 1 year

    return new NextResponse(response.body, { status: 200, headers });
  } catch (error) {
    console.error(`Error in image proxy for ${imageUrl}:`, error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
