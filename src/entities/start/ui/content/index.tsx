"use client";
import React from "react";

import classes from "./content.module.scss";
import TextScroll from "~/src/shared/ui/text-scroll";
import LinkContainer from "~/src/shared/ui/link-container";
import AnimatedItem from "~/src/shared/ui/animated-item";
import Button from "~/src/shared/ui/button";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";
import { useVariant } from "~/src/shared/lib/variants";
import { mapLink } from "~/src/entities/contacts/model/contacts.const";
import GeoAlt from "~/public/contacts/geo-alt.svg";

const section = "Hero: отступы";
// Число — px на всех ширинах. "auto" — отступ из scss, свой для desktop и мобильного;
// в подписи стоят оба его значения.
const gapVariant = (title: string, px: string[], auto?: string) => ({
  options: auto ? ["auto", ...px] : px,
  ...(auto && {
    labels: Object.fromEntries([["auto", auto], ...px.map((v) => [v, v])]),
  }),
  title,
  section,
});

export default function StartContent() {
  const gapTitle = useVariant("hero.gap.title", {
    ...gapVariant("1. H1 → слоган", ["4", "8", "12", "16", "24"]),
    default: "8",
  });
  const gapLocation = useVariant("hero.gap.location", {
    ...gapVariant("2. Слоган → адрес", ["8", "12", "16", "20", "28", "40"]),
    default: "16",
  });
  const gapButton = useVariant(
    "hero.gap.button",
    gapVariant(
      "3. Адрес → кнопка",
      ["16", "24", "32", "48", "64"],
      "32 / моб. 16",
    ),
  );
  // "mobile1" — line-height из scss: на desktop из класса display1 (72–80px при шрифте
  // 60–84px), на мобильном 1. Число — множитель на всех ширинах.
  const sloganLineHeight = useVariant("hero.slogan.lineHeight", {
    options: ["mobile1", "0.9", "1", "1.1", "1.2", "1.3"],
    labels: {
      mobile1: "72–80px / моб. 1",
      "0.9": "0.9",
      "1": "1",
      "1.1": "1.1",
      "1.2": "1.2",
      "1.3": "1.3",
    },
    title: "Высота строки",
    section: "Hero: слоган",
  });
  const customLineHeight = sloganLineHeight !== "mobile1";
  const gaps = {
    ...(customLineHeight && { "--slogan-line-height": sloganLineHeight }),
    "--gap-title": `${gapTitle}px`,
    "--gap-location": `${gapLocation}px`,
    ...(gapButton !== "auto" && { "--gap-button": `${gapButton}px` }),
  } as React.CSSProperties;

  return (
    <div className={`flex-column ${classes.container}`} style={gaps}>
      <div className={`flex-column ${classes.heading}`}>
        <TextTranslate
          nameSpace="start"
          tName="text.title"
          as="h1"
          className="body-text regular white text-center"
        />
        <TextScroll
          className={`display1 ${classes.slogan} ${customLineHeight ? classes.customLineHeight : ""}`}
          textClassName="heading display1 white text-center"
          onInView
          nameSpace="start"
          tName="text.heading"
        />
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.location}
        >
          {/* viewBox задаём явно: сборка вырезает его из svg, и без него иконка
              при уменьшении обрезается, а не масштабируется */}
          <GeoAlt viewBox="0 0 24 24" aria-hidden="true" />
          <TextTranslate
            nameSpace="start"
            tName="text.subtext"
            as="span"
            className="body-text base big white text-center"
          />
        </a>
      </div>
      <AnimatedItem delay={0.1}>
        <LinkContainer href="#space">
          <Button typeButton="primary" size={"14-20"} radius={100}>
            <TextTranslate
              nameSpace="start"
              tName="text.buttonText"
              as="span"
              className="white heading h7"
            />
          </Button>
        </LinkContainer>
      </AnimatedItem>
    </div>
  );
}
