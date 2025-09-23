"use client";
import React from "react";
import { useWindowSize } from "react-use";

import classes from "./heading.module.scss";
import HeadingVector from "~/public/workspace/heading-vector.svg";
import HeadingMedia from "~/public/workspace/heading-media.svg";
import BtnComingSoon from "~/src/entities/btn-coming-soon/ui";
import WorkspaceHeadingText from "./text";
import { workspaceHeadings } from "../../model/workspace.const";

interface Props {
  activeIndex: number;
}

export default function WorkspaceHeading({ activeIndex }: Props) {
  const { width } = useWindowSize();
  const commonProps = {
    activeIndex: activeIndex,
    items: workspaceHeadings,
  };

  return (
    <div className={`flex-column relative ${classes.heading}`}>
      <div className={`${classes.bgImage}`}>
        <HeadingVector className={`sp-c__bg ${classes.bgImage__vector}`} />
        <HeadingMedia className={`sp-c__bg ${classes.bgImage__media}`} />
      </div>
      <WorkspaceHeadingText {...commonProps} width={width} />
      <BtnComingSoon
        areaSize={300}
        delay={0.5}
        size="12-16"
        className={classes.button}
      />
    </div>
  );
}
