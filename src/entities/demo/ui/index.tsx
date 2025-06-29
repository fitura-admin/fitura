"use client";
import React from "react";

import classes from "./hero.module.scss";
import DemoHeading from "./heading";
import DemoInput from "./input";

export default function Demo() {
  return (
    <section className="flex-column gap-60px align-center">
      <DemoHeading />
      <DemoInput />
    </section>
  );
}
