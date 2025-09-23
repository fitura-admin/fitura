"use client";
import React from "react";
import { useSpaceSections } from "~/src/entities/space-sections/lib/hooks/useSpaceSections.hook";

import classes from "./space-sections.module.scss";
import WorkspaceContainer from "~/src/entities/workspace-container/ui";
import SpacePagination from "./pagination";
import SpaceModal from "./space-modal";
import { workspaceContainers } from "~/src/entities/workspace-container/model/workspace.const";

export default function SpaceSections() {
  const {
    contentRef,
    activeIndex,
    sectionProgress,
    inView,
    setModalOpened,
    modalOpened,
  } = useSpaceSections({
    itemsLength: workspaceContainers.length,
  });

  return (
    <div
      className={`${classes.container}`}
      ref={contentRef}
      style={
        {
          "--item-count": workspaceContainers.length,
        } as React.CSSProperties
      }
      id="space"
    >
      <div className={`${classes.section__sticky}`}>
        <WorkspaceContainer
          bgColor={workspaceContainers[activeIndex]}
          activeIndex={activeIndex}
          setModalOpened={setModalOpened}
        />
        <SpacePagination
          sectionProgress={sectionProgress}
          activeIndex={activeIndex}
          inView={inView}
        />
      </div>
      <SpaceModal
        isOpened={modalOpened}
        onClose={() => setModalOpened(false)}
        activeIndex={activeIndex}
      />
    </div>
  );
}
