"use client";
import { useAppSelector } from "~/src/app/store/hook";

import classNames from "classnames";
import { selectNavigation } from "~/src/app/store/reducers/navigation.slice";

import classes from "./fail-page.module.scss";
import Bg from "~/public/contacts/bg-vector.svg";
import { failItems, failText } from "../model";

export default function PaymentFailPage() {
  const { lang } = useAppSelector(selectNavigation);

  return (
    <div
      className={classNames(
        classes.container,
        "flex-column align-center relative",
      )}
    >
      {failItems.map((item, index) => (
        <item.Tag key={`${index}-${item.keyName}`} className={item.className}>
          {failText[lang][item.keyName]}
        </item.Tag>
      ))}
      <Bg className={classes.bg} />
    </div>
  );
}
