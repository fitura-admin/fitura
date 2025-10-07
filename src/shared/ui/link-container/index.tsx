"use client";
import React from "react";
import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";

interface Props extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  hardPush?: boolean;
}

export default function LinkContainer({
  children,
  href,
  className,
  hardPush = false,
  ...rest
}: Props) {
  const { lang } = useParams();
  const localHref =
    href.startsWith("#") && !hardPush
      ? href
      : `/${lang as string}${href.startsWith("/") ? href : `/${href}`}`;

  return (
    <Link
      href={localHref}
      target={rest.target}
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}
