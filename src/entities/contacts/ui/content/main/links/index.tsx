import React from "react";

import classes from "./contacts-links.module.scss";
import Inst from "~/public/contacts/instagram.svg";
import GeoAlt from "~/public/contacts/geo-alt.svg";
import Image from "next/image";
import AnimatedItem from "~/src/shared/ui/animated-item";
import LinkContainer from "~/src/shared/ui/link-container";

interface ILink {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

export default function ContactsLinks() {
  const links: ILink[] = [
    {
      Icon: Inst,
      title: "fitura_fitness",
      href: "https://www.instagram.com/fitura_fitness/?igsh=MWd5MzAxc2djdW5taQ%3D%3D",
    },
    {
      Icon: GeoAlt,
      title: `Jaunā iela 12, Piņķi, Babītes pagasts, Mārupes novads, LV-2107, Latvia "Via Jurmala Outlet Village"`,
      href: "https://www.google.com/maps?q=56.95610117925549,23.907324835582514",
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
            <LinkContainer href={item.href} target="_blank">
              <p
                title={"Copy"}
                className={`white body-text big regular ${classes.text}`}
                onClick={() => navigator.clipboard.writeText(item.title)}
              >
                {item.title}
              </p>
            </LinkContainer>
          </li>
        ))}
      </ul>
    </AnimatedItem>
  );
}
