"use client";
import React, { useCallback } from "react";

import classes from "./workspace-text.module.scss";
import HeadingAnimatedItem from "../animated";
import { IWorkspaceHeading } from "~/src/entities/workspace-container/model/workspace.const";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

interface Props {
  width: number;
  activeIndex: number;
  items: IWorkspaceHeading[];
}

export default function WorkspaceHeadingText(props: Props) {
  const getIcon = useCallback(
    (item: IWorkspaceHeading): React.ReactNode => {
      if (!item.Icon) return null;
      if (props.width <= 768) {
        return (
          <div className={classes.leftTopText_container}>
            <item.Icon.IconMedia className={classes.leftTopText} />
          </div>
        );
      }
      return (
        <div className={classes.leftTopText_container}>
          <item.Icon.Icon className={classes.leftTopText} />
        </div>
      );
    },
    [props.width],
  );

  return (
    <div className={`flex-column ${classes.heading__text}`}>
      <HeadingAnimatedItem
        {...props}
        duration={0.5}
        renderItem={(item) => {
          return (
            <div className={`relative ${classes.text__top}`}>
              <TextTranslate
                as="h2"
                className="white h2 text-center"
                nameSpace="workspaces"
                tName={`heading.${item.tName}`}
              />
              {getIcon(item)}
            </div>
          );
        }}
      />
      <HeadingAnimatedItem
        {...props}
        classNameItem={`w-100`}
        delay={0.2}
        renderItem={(item) => {
          return (
            <TextTranslate
              as="p"
              className={`text-center white body-text small ${classes.subheading}`}
              nameSpace="workspaces"
              tName={`subheading.${item.tName}`}
            />
          );
        }}
      />
    </div>
  );
}
