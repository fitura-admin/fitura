import { ElementType, useCallback } from "react";
import { useParams } from "next/navigation";

import classes from "./label.module.scss";
import { TextTranslate } from "~/src/shared/ui/text-translate/ui";

const nameSpace = "application";

interface IText {
  tName: string;
  className?: string;
  as?: ElementType;
  href?: string;
}

export default function ApplicationCheckboxLabel() {
  const { lang } = useParams();
  const localHref = useCallback(
    (href: string) => {
      return `/${lang as string}${href.startsWith("/") ? href : `/${href}`}`;
    },
    [lang],
  );

  const texts: IText[] = [
    {
      tName: `checkbox.first.text`,
      className: classes.text,
    },
    {
      tName: `checkbox.first.link`,
      className: classes.link,
      as: "a",
      href: "/legal-notice",
    },
    {
      tName: `checkbox.second.text`,
      className: classes.text,
    },
    {
      tName: `checkbox.second.link`,
      className: classes.link,
      as: "a",
      href: "/legal-notice",
    },
  ];

  return (
    <p className="text-body super-small regular white">
      {texts.map((text, index) => (
        <TextTranslate
          key={`${index}-${text.tName}`}
          as={text.as || "span"}
          nameSpace={nameSpace}
          tName={text.tName}
          className={text.className}
          href={text.href && localHref(text.href)}
        />
      ))}
    </p>
  );
}
