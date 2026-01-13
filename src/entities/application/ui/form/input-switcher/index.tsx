import classes from "./input-switcher.module.scss";
import TextInput from "~/src/shared/ui/inputs/text-input";
import EmailInput from "~/src/shared/ui/inputs/email";
import PhoneInput from "~/src/shared/ui/inputs/phone";
import {
  IApplicationError,
  IApplicationForm,
  IApplicationInput,
} from "../../../model";
import { useTranslation } from "react-i18next";
import ApplicationSelect from "../select";

interface Props extends IApplicationInput {
  onChange: (f: keyof IApplicationForm, v: string) => void;
  formData: IApplicationForm;
  loading: boolean;
  error: IApplicationError | null;
}

export default function ApplicationInputSwitcher({
  onChange,
  formData,
  loading,
  error,
  ...input
}: Props) {
  const { t } = useTranslation("application", { useSuspense: false });

  const sharedProps = {
    value: formData[input.field]?.toString() || "",
    disabled: loading,
    errorText: error && error.field === input.field ? error.message : null,
    placeholder: t(`inputs.${input.placeholder}`),
    wrapperClassName: classes.inputWrapper,
    classNameLabel: classes.input,
    inputClassName: `text-body white small semibold`,
    name: input.field,
  };

  switch (input.type) {
    default:
      return null;
    case "text":
      return (
        <TextInput
          {...sharedProps}
          onChange={(e) => onChange(input.field, e.target.value)}
        />
      );
    case "email":
      return (
        <EmailInput
          {...sharedProps}
          onChange={(e) => onChange(input.field, e.target.value)}
        />
      );
    case "phone":
      return (
        <PhoneInput
          {...sharedProps}
          onChange={(v) => onChange(input.field, v)}
        />
      );
    case "select":
      return (
        <ApplicationSelect
          onChange={(v) => onChange("position", v)}
          activeOption={formData[input.field]?.toString() || ""}
          error={error && error.field === input.field ? error.message : null}
        />
      );
  }
}
