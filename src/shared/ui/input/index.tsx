import React, { Ref } from "react";

import classes from "./input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  name?: string;
  disabled?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export default function Input({
  className,
  placeholder,
  onChange,
  value,
  type,
  name,
  disabled,
  ref,
  ...rest
}: Props) {
  return (
    <label htmlFor={name} className={classes.label}>
      <input
        {...rest}
        ref={ref}
        name={name ?? ""}
        type={type ?? "text"}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className} ${classes.input}`}
      />
    </label>
  );
}
