import { useCallback, useEffect } from "react";
import { IApplicationError, IApplicationForm } from "../../model";

interface Props {
  error: IApplicationError | null;
  formData: IApplicationForm;
  setError: (error: IApplicationError | null) => void;
}

export const useValidation = ({ error, formData, setError }: Props) => {
  const isValidField = useCallback((fieldValue: string | null) => {
    return !!fieldValue;
  }, []);

  const isValidEmail = useCallback((email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }, []);

  const setValidationError = useCallback(
    (newError: IApplicationError) => {
      if (error) {
        if (
          error.field === newError.field &&
          error.message === newError.message
        ) {
          return;
        }
      }
      setError(newError);
    },
    [error, setError],
  );

  const isValidForm = useCallback((): boolean => {
    const keysToValidate: (keyof IApplicationForm)[] = [
      "name",
      "email",
      "phone",
      "position",
    ];

    for (const key of keysToValidate) {
      const valueKey = key as keyof IApplicationForm;
      const valueArg = formData[valueKey];
      if (typeof valueArg !== "string") continue;
      if (!isValidField(valueArg)) {
        setValidationError({
          field: valueKey,
          message: "Field is required",
        });
        return false;
      }

      if (key === "email" && !isValidEmail(valueArg)) {
        setValidationError({
          field: valueKey,
          message: "Invalid email",
        });
        return false;
      }
    }

    return true;
  }, [isValidEmail, isValidField, formData, setValidationError]);

  useEffect(() => {
    if (error) {
      isValidForm();
    }
  }, [isValidForm, error]);

  return {
    isValidForm,
  };
};
