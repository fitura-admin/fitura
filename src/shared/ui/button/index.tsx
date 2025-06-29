import React from "react";

import classes from "./button.module.scss";

export type ButtonTypeT = "ghost" | "subscribe";
export type ButtonSizeT = "20-28";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: ButtonTypeT;
  size?: ButtonSizeT;
  radius?: number;
  needActiveScale?: boolean;
  className?: string;
  justifyCenter?: boolean;
}

export default function Button({
  type,
  size,
  radius,
  needActiveScale = true,
  onClick,
  className,
  justifyCenter = true,
  children,
  ...rest
}: Props) {
  const sizeRender = () => {
    return classes[`size-${size}`];
  };

  const typeRender = () => {
    return classes[type];
  };

  return (
    <button
      onClick={onClick}
      className={`${className} ${justifyCenter && "center-element"} ${classes.button} ${needActiveScale ? classes.activeScale : ""} ${sizeRender()} ${typeRender()}`}
      {...rest}
      style={{
        borderRadius: radius && `${radius}px`,
      }}
    >
      {children}
    </button>
  );
}
