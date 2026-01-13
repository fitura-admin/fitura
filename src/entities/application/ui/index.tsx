"use client";
import classNames from "classnames";
import { useApplication } from "../lib/hooks";

import classes from "./application.module.scss";
import ApplicationHeading from "./heading";
import ApplicationForm from "./form";

export default function ApplicationSection() {
  const {
    success,
    loading,
    onChange,
    onSubmit,
    isAcceptedTerms,
    setIsAcceptedTerms,
    form,
    error,
    updateResume,
  } = useApplication();

  return (
    <section
      className={classNames(
        classes.wrapper,
        "relative",
        success && classes.success,
      )}
      id="career"
    >
      <div className={classes.bg} />
      <div className={`wrapper flex-column align-center ${classes.container}`}>
        <ApplicationHeading success={success} />
        <ApplicationForm
          success={success}
          loading={loading}
          onChange={onChange}
          onSubmit={onSubmit}
          isAcceptedTerms={isAcceptedTerms}
          setIsAcceptedTerms={setIsAcceptedTerms}
          form={form}
          error={error}
          updateResume={updateResume}
        />
      </div>
    </section>
  );
}
