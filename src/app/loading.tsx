import React from "react";

import "./loading.scss";
import Logo from "~/public/loading-logo.svg";

export default function Loading() {
  return (
    <div className="center loading-wrapper">
      <Logo className="loading-logo" />
    </div>
  );
}
