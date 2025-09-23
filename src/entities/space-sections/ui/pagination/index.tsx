import React, { CSSProperties } from "react";
import classNames from "classnames";

import classes from "./space-pagination.module.scss";
import { workspaceContainers } from "~/src/entities/workspace-container/model/workspace.const";

interface Props {
  inView: boolean;
  activeIndex: number;
  sectionProgress: number;
}

export default function SpacePagination({
  inView,
  activeIndex,
  sectionProgress,
}: Props) {
  return (
    <div className={`${classes.pagination} ${!inView ? classes.hidden : ""}`}>
      {[...Array(workspaceContainers.length)].map((_, index) => (
        <div
          key={index}
          className={classNames(`${classes.pagination__item}`, {
            [classes.active]: activeIndex === index,
            [classes.past]: index < activeIndex,
          })}
          style={
            {
              "--progress": sectionProgress,
            } as CSSProperties
          }
        ></div>
      ))}
    </div>
  );
}
