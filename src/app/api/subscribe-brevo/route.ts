import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const brevoApiClient = axios.create({
  baseURL: process.env.BREVO_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "api-key": process.env.BREVO_API_KEY!,
  },
});

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  try {
    console.log(process.env.BREVO_API_URL, process.env.BREVO_API_KEY?.length);
    await brevoApiClient.post(`/contacts`, {
      email,
      listIds: [2],
      updateEnabled: true,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error: any) {
    console.error(
      "Brevo API error:",
      error.response?.status,
      error.response?.data,
    );
    const msg = error?.response?.data?.message || "Server error";
    return NextResponse.json({ message: msg }, { status: 500 });
  }
}
