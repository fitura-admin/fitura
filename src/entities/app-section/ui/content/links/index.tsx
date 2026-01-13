import React from "react";

import classes from "./app-content-links.module.scss";
import LinkContainer from "~/src/shared/ui/link-container";
import Button from "~/src/shared/ui/button";
import AnimatedItem from "~/src/shared/ui/animated-item";
import { appLinks } from "~/src/entities/app-section/model/app.const";

// TO DO Добавить ссылки на приложение

export default function AppContentLinks() {
  return (
    <ul className={`flex-row ${classes.list}`}>
      {appLinks.map((item, index) => (
        <li key={index}>
          <AnimatedItem
            delay={0.1}
            stagger={0.15}
            index={index + 1}
            slideIn
            direction="right"
          >
            <LinkContainer href={item.link} target="_blank">
              <Button
                typeButton="primary"
                size="0"
                className={classes.button}
                justifyCenter={false}
                radius={100}
              >
                <div
                  className={`flex-row align-center ${classes.button__container}`}
                >
                  <item.Icon className={classes.button__icon} />
                  <item.IconMedia className={classes.button__iconMedia} />
                  <span className={`heading h8 ${classes.button__text}`}>
                    {item.title}
                  </span>
                </div>
              </Button>
            </LinkContainer>
          </AnimatedItem>
        </li>
      ))}
    </ul>
  );
}
