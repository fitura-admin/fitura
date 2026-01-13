import { useCallback, useEffect, useState } from "react";
import {
  applicationFormSkeleton,
  IApplicationError,
  IApplicationForm,
} from "~/src/entities/application/model";
import { useValidation } from ".";
import { sendApplicationData } from "../api";

const maxFileSize = 20 * 1024 * 1024;

export const useApplication = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [form, setForm] = useState<IApplicationForm>(applicationFormSkeleton);
  const [isAcceptedTerms, setIsAcceptedTerms] = useState<boolean>(true);
  const [error, setError] = useState<IApplicationError | null>(null);
  const { isValidForm } = useValidation({ error, setError, formData: form });

  const onChange = useCallback((f: keyof IApplicationForm, v: string) => {
    setForm((prev) => ({
      ...prev,
      [f]: v,
    }));
  }, []);

  const updateResume = useCallback((file: File | null) => {
    setForm((prev) => ({
      ...prev,
      resumeFile: file,
    }));
  }, []);

  const localValidation = useCallback(() => {
    if (!isValidForm()) return false;
    if (!isAcceptedTerms) {
      if (error?.field === "checkbox") return false;
      setError({ field: "checkbox", message: "" });
      return false;
    }
    if (!form.resumeFile) {
      if (error?.field === "file") return false;
      setError({ field: "file", message: "" });
      return false;
    }
    if (form.resumeFile.size > maxFileSize) {
      if (error?.field === "file") return false;
      setError({ field: "file", message: "" });
      return false;
    }

    setError(null);
    return true;
  }, [isValidForm, isAcceptedTerms, error, form.resumeFile]);

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      if (!localValidation()) return;
      const formData = new FormData();
      formData.append("email", form.email);
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("position", form.position);
      formData.append("resumeFile", form.resumeFile!);

      await sendApplicationData(formData);
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [localValidation, form]);

  useEffect(() => {
    if (error) {
      localValidation();
    }
  }, [localValidation, error]);

  return {
    success,
    loading,
    onChange,
    onSubmit,
    isAcceptedTerms,
    setIsAcceptedTerms,
    form,
    error,
    updateResume,
  };
};
