"use client";
import { useAppSelector } from "~/src/app/store/hook";

import classNames from "classnames";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";

import classes from "./thank-you-page.module.scss";
import Bg from "~/public/contacts/bg-vector.svg";
import { thankYouItems, thankYouText } from "../model";

export default function ThankYouPage() {
  const { lang } = useAppSelector(selectNavigation);

  return (
    <div
      className={classNames(
        classes.container,
        "flex-column align-center relative",
      )}
    >
      {thankYouItems.map((item, index) => (
        <item.Tag key={`${index}-${item.keyName}`} className={item.className}>
          {thankYouText[lang][item.keyName]}
        </item.Tag>
      ))}
      <Bg className={classes.bg} />
    </div>
  );
}
