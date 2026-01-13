import classes from "./uploaded.module.scss";
import ApplicationFileInputButtons from "./buttons";

interface Props {
  deleteFile: () => void;
  onNewFileClick: () => void;
  file: File;
}

export default function ApplicationUploadedFile({
  deleteFile,
  onNewFileClick,
  file,
}: Props) {
  return (
    <>
      <p
        className={`semibold text-body small white nowrap-text ${classes.text}`}
      >
        {file?.name || ""}
      </p>
      <ApplicationFileInputButtons
        onDelete={deleteFile}
        onNew={onNewFileClick}
      />
    </>
  );
}
