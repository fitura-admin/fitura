import React, { Dispatch, SetStateAction } from "react";

import classes from "./subscribe-body.module.scss";
import EmailInput from "~/src/shared/ui/inputs/email";
import SubscribeButton from "./button";
import AnimatedItem from "~/src/shared/ui/animated-item";

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  error: string | null;
  buttonClick: () => void;
  loading: boolean;
  success: boolean;
}

export default function SubscribeBody({
  email,
  setEmail,
  error,
  buttonClick,
  loading,
  success,
}: Props) {
  return (
    <div className={`flex-column ${classes.container}`}>
      <AnimatedItem slideIn direction="down" duration={0.3} delay={0.2}>
        <EmailInput
          className={classes.input}
          placeholder={"Your email"}
          value={email}
          onChange={(v) => setEmail(v.target.value)}
          error={error}
        />
      </AnimatedItem>
      <SubscribeButton
        buttonClick={buttonClick}
        loading={loading}
        success={success}
        email={email}
      />
    </div>
  );
}
