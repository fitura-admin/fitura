import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.BREVO_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "api-key": process.env.BREVO_API_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }

    const response = await apiClient.post("/contacts", {
      email,
      listIds: [2],
      updateEnabled: true,
    });

    return NextResponse.json({ id: response.data.id }, { status: 200 });
  } catch (error: any) {
    console.error("Brevo error:", error.response?.data || error.message);
    return NextResponse.json(
      { message: error.response?.data?.message || "Server error" },
      { status: error.response?.status || 500 },
    );
  }
}
