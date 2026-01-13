import { useCallback, useRef, useState } from "react";

interface Props {
  updateResume: (resume: File | null) => void;
}

export interface IReadedFile {
  name: string;
  format: string;
}

export const useUploadResume = ({ updateResume }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) updateResume(file);
    },
    [updateResume],
  );

  const deleteFile = useCallback(() => {
    updateResume(null);
  }, [updateResume]);

  return {
    inputRef,
    onInputChange,
    deleteFile,
  };
};
