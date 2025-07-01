"use client";
import { useState } from "react";
import Demo from "~/src/entities/demo/ui";
import LoadingSplash from "../entities/loading/ui";
import PageBg from "../entities/bg/ui";

export default function Home() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <>
      <LoadingSplash active={active} />
      <PageBg setActive={setActive} />
      <main className="main absolute">
        <Demo />
      </main>
    </>
  );
}
