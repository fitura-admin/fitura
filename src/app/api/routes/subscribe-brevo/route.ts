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

  const LIST_ID = Number(process.env.BREVO_GROUP_ID);

  try {
    await brevoApiClient.post(`/contacts`, {
      email,
      listIds: [LIST_ID],
      updateEnabled: true,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error: any) {
    const msg = error?.response?.data?.message || "Server error";
    return NextResponse.json({ message: msg }, { status: 500 });
  }
}
