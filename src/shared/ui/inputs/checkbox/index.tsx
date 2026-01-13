"use client";
import React, { useRef } from "react";
import classNames from "classnames";

import classes from "./checkbox.module.scss";
import SelectIcon from "~/public/application/select-icon.svg";

interface Props {
  onChange: (e: boolean) => void;
  checked: boolean;
  gap?: string;
  label?: string;
  nodeLabel?: React.ReactNode;
  name?: string;
  className?: string;
  classNameLabel?: string;
  checkboxClassName?: string;
  error?: boolean;
  id?: string;
}

export default function CheckboxInput({
  onChange,
  gap,
  label,
  name,
  checked,
  className,
  classNameLabel,
  checkboxClassName,
  nodeLabel,
  error = false,
  id,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      htmlFor={name}
      className={classNames(
        `relative no-select pointer flex-row${gap ? ` gap-${gap}` : ""}`,
        className,
      )}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className={classNames(`pointer`, classes.container, {
          [classes.checked]: checked,
          [classes.error]: error,
          checkboxClassName,
        })}
        onChange={() => {
          onChange(!checked);
        }}
        checked={checked}
        name={name}
        id={id}
      />
      {label && <span className={classNameLabel}>{label}</span>}
      {nodeLabel}
      {checked && <SelectIcon className={classes.icon} />}
    </label>
  );
}
