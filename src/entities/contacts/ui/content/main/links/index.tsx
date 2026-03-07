"use client";
import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./contacts-links.module.scss";
import Inst from "~/public/contacts/instagram.svg";
import GeoAlt from "~/public/contacts/geo-alt.svg";
import Tel from "~/public/contacts/telephone.svg";
import Image from "next/image";
import AnimatedItem from "~/src/shared/ui/animated-item";

interface ILink {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
  target?: string;
}

export default function ContactsLinks() {
  const { t } = useTranslation("contacts", { useSuspense: false });
  const links: ILink[] = [
    {
      Icon: Inst,
      title: "fitura_fitness",
      href: "https://www.instagram.com/fitura_fitness/?igsh=MWd5MzAxc2djdW5taQ%3D%3D",
      target: "_blank",
    },
    {
      Icon: GeoAlt,
      title: t("address"),
      href: "https://www.google.com/maps?q=56.95610117925549,23.907324835582514",
      target: "_blank",
    },
    {
      Icon: Tel,
      title: "+63013400",
      href: "tel:+63013400",
    },
  ];

  return (
    <AnimatedItem
      delay={0.15}
      duration={0.5}
      slideIn
      direction="right"
      className={`flex-column ${classes.container}`}
    >
      <Image
        src="/contacts/qr.svg"
        alt="qr"
        width={200}
        height={200}
        className={classes.qr}
      />
      <ul className={`flex-column ${classes.links}`}>
        {links.map((item, index) => (
          <li key={index} className={`flex-row gap-2 ${classes.link}`}>
            <item.Icon />
            <a
              className={`white body-text big regular ${classes.text}`}
              href={item.href}
              target={item.target}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </AnimatedItem>
  );
}
