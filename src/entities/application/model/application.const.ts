import { IApplicationForm, IApplicationInput } from ".";

const createInput = (
  field: keyof IApplicationForm,
  type?: "text" | "email" | "phone" | "select",
): IApplicationInput => ({ field, placeholder: field, type: type || "text" });

export const applicationInputs: IApplicationInput[] = [
  createInput("name"),
  createInput("email", "email"),
  createInput("phone", "phone"),
  createInput("position", "select"),
];

export const applicationSelectOptions: string[] = [
  "trainee",
  "instructor",
  "administrator",
  "manager",
];
