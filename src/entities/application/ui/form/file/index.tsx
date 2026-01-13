"use client";
import classNames from "classnames";
import { useUploadResume } from "~/src/entities/application/lib/hooks";

import classes from "./file.module.scss";
import FileInput from "~/src/shared/ui/inputs/file";
import ApplicationFileInputNoFile from "./no-file";
import ApplicationUploadedFile from "./uploaded";

const accept = ".pdf,.png";

interface Props {
  updateResume: (file: File | null) => void;
  resumeData: File | null;
  loading: boolean;
  error: boolean;
}

export default function ApplicationFileInput({
  updateResume,
  resumeData,
  loading,
  error,
}: Props) {
  const { inputRef, onInputChange, deleteFile } = useUploadResume({
    updateResume,
  });

  return (
    <div
      className={classNames(classes.container, {
        [`${classes.withFile}`]: resumeData !== null,
        [classes.error]: error,
      })}
      onClick={() => {
        if (loading) return;
        if (resumeData !== null) return;
        inputRef.current?.click();
      }}
    >
      <FileInput ref={inputRef} onChange={onInputChange} accept={accept} />
      {resumeData !== null ? (
        <ApplicationUploadedFile
          onNewFileClick={() => inputRef.current?.click()}
          deleteFile={deleteFile}
          file={resumeData}
        />
      ) : (
        <ApplicationFileInputNoFile />
      )}
    </div>
  );
}
