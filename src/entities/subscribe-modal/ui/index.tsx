"use client";
import React from "react";
import { useSubscribeModal } from "../lib/hooks/useSubscribeModal.hook";

import classes from "./subscribe-modal.module.scss";
import Modal from "~/src/shared/ui/modal/ui";
import classNames from "classnames";
import SubscribeHeading from "./heading";
import SubscribeBody from "./body";

export default function SubscribeModal() {
  const {
    modalOpen,
    onClose,
    error,
    email,
    setEmail,
    buttonClick,
    loading,
    success,
  } = useSubscribeModal();

  return (
    <Modal
      isOpened={modalOpen}
      onClose={onClose}
      classNameContainer={classNames(classes.container, `flex-column`)}
    >
      <SubscribeHeading />
      <SubscribeBody
        email={email}
        setEmail={setEmail}
        error={error}
        buttonClick={buttonClick}
        loading={loading}
        success={success}
      />
    </Modal>
  );
}
