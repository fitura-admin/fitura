import classNames from "classnames";

import classes from "./form.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import ApplicationInputSwitcher from "./input-switcher";
import ApplicationFileInput from "./file";
import ApplicationCheckbox from "./checkbox";
import ApplicationFormButton from "./button";
import {
  applicationInputs,
  IApplicationError,
  IApplicationForm,
} from "../../model";

interface Props {
  success: boolean;
  loading: boolean;
  onChange: (f: keyof IApplicationForm, v: string) => void;
  onSubmit: () => void;
  isAcceptedTerms: boolean;
  setIsAcceptedTerms: (v: boolean) => void;
  form: IApplicationForm;
  error: IApplicationError | null;
  updateResume: (f: File | null) => void;
}

export default function ApplicationForm({
  success,
  loading,
  onChange,
  onSubmit,
  isAcceptedTerms,
  setIsAcceptedTerms,
  form,
  error,
  updateResume,
}: Props) {
  return (
    <AnimatePresence initial={false}>
      {success && (
        <motion.div
          initial={{ opacity: 1, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={classNames(classes.container, "flex-column")}
        >
          <div className={classNames("flex-column", classes.inputs)}>
            {applicationInputs.map((item, index) => (
              <ApplicationInputSwitcher
                key={`${index}-${item.field}`}
                onChange={onChange}
                formData={form}
                loading={loading}
                error={error}
                {...item}
              />
            ))}
            <ApplicationFileInput
              updateResume={updateResume}
              resumeData={form.resumeFile}
              loading={loading}
              error={error && error.field === "file" ? true : false}
            />
            <ApplicationCheckbox
              onChange={(e) => setIsAcceptedTerms(e)}
              checked={isAcceptedTerms}
              error={error}
            />
          </div>
          <ApplicationFormButton
            onClick={onSubmit}
            disabled={loading || error !== null}
            loading={loading}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
