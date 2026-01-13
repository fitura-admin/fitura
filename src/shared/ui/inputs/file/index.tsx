import React from "react";

interface Props {
  ref: React.Ref<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | Promise<void>;
  multiple?: boolean;
  accept?: string;
}

export default function FileInput({
  ref,
  onChange,
  multiple = false,
  accept,
}: Props) {
  return (
    <input
      type="file"
      accept={accept || "image/*"}
      hidden={true}
      multiple={multiple}
      onChange={onChange}
      ref={ref}
    />
  );
}
