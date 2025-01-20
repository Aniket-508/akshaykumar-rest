import { BASE_URL } from "@/lib/routes";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await params;

    if (!code) {
      return NextResponse.json(
        { error: "Missing code parameter" },
        { status: 400 }
      );
    }

    const response = await fetch(`${BASE_URL}/images/${code}.png`);
    const blob = await response.blob();

    const headers = new Headers();
    headers.set("Content-Type", "image/*");

    return new NextResponse(blob, { status: 200, statusText: "OK", headers });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
