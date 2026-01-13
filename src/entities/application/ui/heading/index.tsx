import classes from "./heading.module.scss";
import ApplicationMainText from "./main-text";
import ApplicationSubText from "./sub-text";

interface Props {
  success: boolean;
}

export default function ApplicationHeading({ success }: Props) {
  return (
    <div className={`flex-column align-center relative ${classes.container}`}>
      <ApplicationMainText success={success} />
      <ApplicationSubText success={success} />
    </div>
  );
}
