"use client";
import React from "react";
import { useEmail } from "../../lib/hooks/useEmail.hook";

import classes from "./input.module.scss";
import TextInput from "~/src/shared/ui/inputs/text-input";
import Button from "~/src/shared/ui/button";

export default function DemoInput() {
  const { email, setEmail, loading, error, handleSubscribe } = useEmail();

  return (
    <section className={`flex-row gap-4 align-center ${classes.container}`}>
      <div className={`relative`}>
        <TextInput
          onChange={(v) => setEmail(v.target.value)}
          value={email}
          placeholder="Your email"
          className={`${classes.input} ${error && classes.red_border} padding-20-24 text-18 medium white`}
          name="fitura-email"
        />
        {error && (
          <span className={`red text-14 absolute ${classes.error}`}>
            {error}
          </span>
        )}
      </div>
      <Button
        type="subscribe"
        size="20-28"
        onClick={() => handleSubscribe()}
        className={loading ? classes.button : ""}
      >
        {loading ? (
          <span className={classes.load}></span>
        ) : (
          <span className={`white text-18 semibold ${classes.button_text}`}>
            Subscribe
          </span>
        )}
      </Button>
    </section>
  );
}
