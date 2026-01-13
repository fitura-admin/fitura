import React, { memo } from "react";
import classNames from "classnames";

import TextInput, { TextInputProps } from "../text-input";

export interface EmailInputProps extends Omit<TextInputProps, "type"> {}

const EmailInput: React.FC<EmailInputProps> = memo(
  ({ errorText, wrapperClassName, ...rest }) => {
    return (
      <TextInput
        {...rest}
        type="email"
        inputClassName={classNames(rest.inputClassName)}
        errorText={errorText}
        wrapperClassName={wrapperClassName}
      />
    );
  },
);

EmailInput.displayName = "EmailInput";
export default EmailInput;
