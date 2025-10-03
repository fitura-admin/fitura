import React from "react";

import Loader from "~/src/entities/loader-provider/ui";
import Header from "~/src/entities/header/ui";
import ClientHooks from "./client-hooks";

interface Props {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: Props) {
  return (
    <>
      <Loader />
      <Header />
      <div id="scroll_wrapper">
        <main>{children}</main>
      </div>
      <ClientHooks />
    </>
  );
}
