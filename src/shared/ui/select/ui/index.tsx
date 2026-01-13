"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelect } from "../hook/useSelect.hook";

import classes from "./select.module.scss";
import SelectIcon from "~/public/shared/chevron-compact-down.svg";
import Button from "~/src/shared/ui/button";
import classNames from "classnames";

interface Props<T> {
  activeOption: string;
  options: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  optionsPosTop: number;
  optionsFromBottom?: boolean;
  optionsPosLeft?: number;
  optionsPosRight?: number;
  containerRelative?: boolean;
  className?: string;
  selectButtonClassName?: string;
  selectedOptionClassName?: string;
  optionsClassName?: string;
  doubledHeader?: boolean;
  optionHolder?: string;
  error?: string | null;
}

export default function Select<T>(props: Props<T>) {
  const {
    options,
    activeOption,
    renderItem,
    optionsPosTop,
    optionsPosLeft,
    optionsPosRight,
    containerRelative = true,
    className = "",
    selectButtonClassName = "",
    selectedOptionClassName = "",
    optionsClassName = "",
    optionHolder,
    optionsFromBottom,
    error,
  } = props;
  const { active, setActive, contentRef, buttonRef } = useSelect();

  return (
    <div
      className={`${containerRelative ? "relative" : ""} pointer ${className}`}
    >
      <Button
        ref={buttonRef}
        justifyCenter={false}
        needActiveScale={false}
        typeButton="ghost"
        className={classNames(
          `flex-row align-center`,
          selectButtonClassName,
          error && classes.error,
        )}
        onClick={() => {
          setActive(!active);
        }}
        needHoverAnimation={false}
      >
        <span
          className={`${selectedOptionClassName || "body-text medium base white"}`}
        >
          {activeOption || optionHolder}
        </span>
        <SelectIcon className={active ? classes.icon : ""} />
      </Button>
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ y: -10, scale: 0, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -10, scale: 0, opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.2 }}
            ref={contentRef}
            style={{
              top: optionsFromBottom
                ? undefined
                : `calc(100% + ${optionsPosTop}px)`,
              bottom: optionsFromBottom
                ? `calc(100% + ${optionsPosTop}px)`
                : undefined,
              left: optionsPosLeft ? `${optionsPosLeft}px` : undefined,
              right: optionsPosRight ? `${optionsPosRight}px` : undefined,
            }}
            className={classNames(
              `flex-column scrollbar absolute`,
              classes.options,
              optionsClassName,
            )}
            onClick={() => setActive(false)}
          >
            {options.map((item, index) => {
              return renderItem(item, index);
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
