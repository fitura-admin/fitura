"use client";
import React from "react";
import { useModal } from "../lib/hooks/useModal.hook";
import classNames from "classnames";

import classes from "./modal.module.scss";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  isOpened: boolean;
  classNameContainer?: string;
  className?: string;
  customContainer?: boolean;
  customClickOutside?: boolean;
}

export default function Modal({
  children,
  onClose,
  isOpened,
  className,
  classNameContainer,
  customContainer = false,
  customClickOutside = false,
}: Props) {
  const { hidden, contentRef } = useModal({
    isOpened,
    onClose,
    customClickOutside,
  });

  return (
    <div
      className={classNames(classes.wrapper, className, {
        [classes.hidden]: hidden,
        [classes.wrapActive]: isOpened,
      })}
    >
      <AnimatePresence initial={false}>
        {isOpened && (
          <motion.div
            className={classNames(classNameContainer, {
              [classes.container]: !customContainer,
            })}
            initial={{ scaleY: 0.5, opacity: 0, transformOrigin: "top" }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0.5, opacity: 0, transformOrigin: "bottom" }}
            ref={contentRef}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
