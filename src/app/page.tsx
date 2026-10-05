import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { alternates: { canonical: "/lv" } };

export default async function Page() {
  redirect(`/lv`);
}
