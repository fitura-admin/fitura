import React from "react";

import Input from "../../input";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  classNameInput?: string;
  RightIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIconClick?: () => void;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  classNameRightIcon?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  title?: string;
  gap?: number;
}

export default function TextInput({
  className,
  classNameInput,
  placeholder,
  disabled,
  onChange,
  value,
  name,
  onKeyDown,
  title,
  gap,
}: Props) {
  return (
    <section
      className={`flex-row space-between ${className}`}
      style={{ gap: `${gap}px` }}
    >
      <Input
        className={classNameInput}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
        type={"text"}
        name={name}
        onKeyDown={onKeyDown}
        title={title}
      />
    </section>
  );
}
