export interface IApplicationForm {
  name: string;
  email: string;
  phone: string;
  position: string;
  resumeFile: File | null;
}

export interface IApplicationInput {
  field: keyof IApplicationForm;
  placeholder: string;
  type: "text" | "email" | "select" | "phone";
}

export interface IApplicationError {
  field: string;
  message: string;
}
