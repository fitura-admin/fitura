"use client";
import React, { ElementType } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

interface TextTranslateOwnProps {
  nameSpace: string;
  tName: string;
}

type PolymorphicProps<T extends ElementType, P> = P &
  Omit<React.ComponentPropsWithoutRef<T>, keyof P | "as"> & {
    as?: T;
  };

export function TextTranslate<T extends ElementType = "p">({
  as,
  className,
  nameSpace,
  tName,
  ref,
  children,
  ...rest
}: PolymorphicProps<T, TextTranslateOwnProps>) {
  const { t } = useTranslation(nameSpace, { useSuspense: false });
  const Tag = as || "p";

  return (
    <Tag ref={ref} className={classNames(className)} {...rest}>
      {t(tName)}
      {children}
    </Tag>
  );
}
