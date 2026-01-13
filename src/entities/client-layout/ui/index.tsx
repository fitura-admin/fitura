import React from "react";

import Loader from "~/src/entities/loader-provider/ui";
import Header from "~/src/entities/header/ui";
import ClientHooks from "./client-hooks";
import LangDetector from "../../lang-detector";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <>
      <Loader />
      <Header />
      <div id="scroll_wrapper">
        <main className="flex-column">{children}</main>
      </div>
      <ClientHooks />
      <LangDetector />
    </>
  );
}
