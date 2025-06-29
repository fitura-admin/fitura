import axios, { AxiosError } from "axios";
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
    const response = await brevoApiClient.post(`/contacts`, {
      email: email,
      listIds: [2],
      updateEnabled: true,
    });

    return NextResponse.json({ id: response.data.id }, { status: 200 });
  } catch (error: any) {
    console.log(
      "Brevo API error:",
      error.response?.code,
      error.response?.message,
    );
    console.log(error);
    return NextResponse.json({ message: "" }, { status: 500 });
  }
}
