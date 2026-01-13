import CheckboxInput from "~/src/shared/ui/inputs/checkbox";
import ApplicationCheckboxLabel from "./label";
import { IApplicationError } from "~/src/entities/application/model";

interface Props {
  onChange: (e: boolean) => void;
  checked: boolean;
  error: IApplicationError | null;
}

export default function ApplicationCheckbox({
  onChange,
  checked,
  error,
}: Props) {
  return (
    <CheckboxInput
      onChange={onChange}
      checked={checked}
      error={error && error.field === "checkbox" ? true : false}
      nodeLabel={<ApplicationCheckboxLabel />}
      gap="2"
      name="agreement"
    />
  );
}
