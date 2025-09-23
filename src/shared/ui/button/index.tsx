import React from "react";
import classNames from "classnames";

import classes from "./button.module.scss";

export type ButtonTypeT = "ghost" | "primary" | "white" | "modal";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: ButtonTypeT;
  size?: string;
  radius?: number;
  needActiveScale?: boolean;
  needHoverAnimation?: boolean;
  className?: string;
  justifyCenter?: boolean;
  asLink?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  type,
  size,
  radius,
  needActiveScale = true,
  needHoverAnimation = true,
  onClick,
  className,
  justifyCenter = true,
  children,
  asLink = false,
  ref,
  disabled,
  ...rest
}: Props) {
  const sizeRender = () => {
    if (!size) return "";
    return `padding-${size}`;
  };

  const typeRender = () => {
    return classes[type];
  };

  const getClassName = () => {
    return classNames(
      `${className} ${classes.button} ${sizeRender()} ${typeRender()}`,
      {
        [classes.hoverAnimation]: needHoverAnimation,
        [classes.justifyCenter]: justifyCenter,
        [classes.activeScale]: needActiveScale,
      },
    );
  };

  if (asLink) {
    return (
      <div
        className={`${getClassName()}`}
        style={{
          borderRadius: radius && `${radius}px`,
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${getClassName()}`}
      {...rest}
      style={{
        borderRadius: radius && `${radius}px`,
      }}
      ref={ref}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
