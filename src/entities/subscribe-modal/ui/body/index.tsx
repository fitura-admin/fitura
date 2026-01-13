"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("modal", { useSuspense: false });

  return (
    <div className={`flex-column ${classes.container}`}>
      <AnimatedItem slideIn direction="down" duration={0.3} delay={0.2}>
        <EmailInput
          inputClassName={classes.input}
          placeholder={t("placeholder")}
          value={email}
          onChange={(v) => setEmail(v.target.value)}
          errorText={error}
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
