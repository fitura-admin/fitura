import Link, { LinkProps } from "next/link";
import React from "react";

interface Props extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
}

export default function LinkContainer({
  children,
  href,
  className,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      target={rest.target}
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}
