"use client";
import React from "react";
import { useClientLayout } from "../lib/useClientLayout.hook";

import Loader from "~/src/entities/loader-provider/ui";
import Header from "~/src/entities/header/ui";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  useClientLayout();

  return (
    <>
      <Loader />
      <Header />
      <div id="scroll_wrapper">
        <main>{children}</main>
      </div>
    </>
  );
}
