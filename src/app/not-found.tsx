"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const lang = pathname.split("/")[1] || "en";
    router.replace(`/${lang}`);
  }, [pathname, router]);

  return null;
}
