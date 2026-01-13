import React, { memo, useCallback } from "react";
import TextInput, { TextInputProps } from "../text-input";

export interface PhoneInputProps
  extends Omit<TextInputProps, "value" | "onChange"> {
  value: string;
  onChange: (value: string) => void;
}

const formatPhone = (value: string): string => {
  return value.replace(/\D/g, "");
};

const PhoneInput: React.FC<PhoneInputProps> = memo(
  ({ value, onChange, placeholder, ...props }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value);
        onChange(formatted);
      },
      [onChange],
    );

    return (
      <TextInput
        {...props}
        value={value}
        onChange={handleChange}
        inputMode="tel"
        placeholder={placeholder ?? "+7 ___ ___-__-__"}
      />
    );
  },
);

PhoneInput.displayName = "PhoneInput";
export default PhoneInput;
