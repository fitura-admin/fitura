import React from "react";

import Input, { InputProps } from "~/src/shared/ui/input";

interface Props extends InputProps {
  needValidation?: boolean;
}

export default function EmailInput({ needValidation = false, ...rest }: Props) {
  return <Input type="email" {...rest} />;
}
