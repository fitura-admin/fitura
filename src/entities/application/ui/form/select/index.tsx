"use client";
import classes from "./select.module.scss";

import SelectIcon from "~/public/application/select-icon.svg";

import { TextTranslate } from "~/src/shared/ui/text-translate/ui";
import Select from "~/src/shared/ui/select/ui";
import { applicationSelectOptions } from "../../../model";
import { useTranslation } from "react-i18next";

interface Props {
  activeOption: string;
  onChange: (v: string) => void;
  error: string | null;
}

export default function ApplicationSelect({
  activeOption,
  onChange,
  error,
}: Props) {
  const { t } = useTranslation("application", { useSuspense: false });

  return (
    <Select
      options={applicationSelectOptions}
      optionHolder={t("select.placeholder")}
      selectedOptionClassName="text-body white small semibold"
      renderItem={(item, index) => (
        <div
          key={`${index}-${item}`}
          className="flex-row align-center space-between pointer"
          onClick={() => onChange(t(`select.${item}`))}
        >
          <TextTranslate
            tName={`select.${item}`}
            nameSpace="application"
            className="text-body black small regular nowrap-text"
            as="p"
          />
          {activeOption === item && <SelectIcon />}
        </div>
      )}
      activeOption={activeOption}
      optionsPosTop={4}
      optionsClassName={`${classes.options} flex-column`}
      selectButtonClassName={`flex-row align-center space-between ${classes.selectButton}`}
      className={classes.selectWrapper}
      error={error}
    />
  );
}
