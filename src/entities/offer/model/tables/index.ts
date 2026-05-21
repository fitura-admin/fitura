import { LangT } from "~/src/app/store/reducers/navigation.slice";
import { TableData } from "../offer.interface";

export const pricingTableLangs: Record<LangT, TableData> = {
  ru: {
    id: "main-services",
    columns: [
      { key: "joinFee", title: "ПЛАТА ЗА ПРИСОЕДИНЕНИЕ" },
      { key: "fullAccess", title: "FULL ACCESS" },
      {
        key: "duo",
        title: "DUO\nВЛАДЕЛЕЦ КОНТРАКТА + ЧЛЕН КЛУБА / РАЗДЕЛЬНОЕ ПОСЕЩЕНИЕ",
      },
      { key: "junior", title: "JUNIOR" },
    ],
    rows: [
      {
        joinFee: "Персональный браслет с электронным доступом",
        fullAccess: "Тренажерный зал",
        duo: "Тренажерный зал",
        junior: "Тренажерный зал",
      },
      {
        joinFee: "Доступ к приложению",
        fullAccess: "Шкафчик в раздевалке на время посещения",
        duo: "Шкафчик в раздевалке на время посещения",
        junior: "Шкафчик в раздевалке на время посещения",
      },
      {
        joinFee: "Анализ состава тела",
        fullAccess: "Групповые занятия по расписанию",
        duo: "Групповые занятия по расписанию",
        junior: "Групповые занятия по расписанию",
      },
      {
        joinFee: "40-минутная вводная тренировка",
        fullAccess: "Доступ в зону СПА",
        duo: "Доступ в зону СПА",
        junior: "Доступ в зону СПА",
      },
      {
        joinFee: "",
        fullAccess: "Баня",
        duo: "Баня",
        junior: "Баня",
      },
      {
        joinFee: "",
        fullAccess: "Сауна",
        duo: "Сауна",
        junior: "Сауна",
      },
      {
        joinFee: "",
        fullAccess: "Хаммам",
        duo: "Хаммам",
        junior: "Хаммам",
      },
    ],
  },
  en: {
    id: "main-services",
    columns: [
      { key: "joinFee", title: "JOINING FEE" },
      { key: "fullAccess", title: "FULL ACCESS" },
      {
        key: "duo",
        title: "DUO\nCONTRACT OWNER + CLUB MEMBER / SEPARATE VISITS",
      },
      { key: "junior", title: "JUNIOR" },
    ],
    rows: [
      {
        joinFee: "Personal bracelet with electronic access",
        fullAccess: "Gym",
        duo: "Gym",
        junior: "Gym",
      },
      {
        joinFee: "App access",
        fullAccess: "Locker during visit",
        duo: "Locker during visit",
        junior: "Locker during visit",
      },
      {
        joinFee: "Body composition analysis",
        fullAccess: "Group classes per schedule",
        duo: "Group classes per schedule",
        junior: "Group classes per schedule",
      },
      {
        joinFee: "40-min introductory training",
        fullAccess: "SPA zone access",
        duo: "SPA zone access",
        junior: "SPA zone access",
      },
      {
        joinFee: "",
        fullAccess: "Sauna",
        duo: "Sauna",
        junior: "Sauna",
      },
      {
        joinFee: "",
        fullAccess: "Steam room",
        duo: "Steam room",
        junior: "Steam room",
      },
      {
        joinFee: "",
        fullAccess: "Hammam",
        duo: "Hammam",
        junior: "Hammam",
      },
    ],
  },
  lv: {
    id: "main-services",
    columns: [
      { key: "joinFee", title: "PIEDALĪŠANĀS MAKSA" },
      { key: "fullAccess", title: "PILNA PIEEJA" },
      {
        key: "duo",
        title: "DUO\nLĪGUMA ĪPAŠNIEKS + KLUBA BIEDRS / ATSEVIŠĶA APMEKLĒŠANA",
      },
      { key: "junior", title: "JAUNIEŠI" },
    ],
    rows: [
      {
        joinFee: "Personīgā aproce ar elektronisko piekļuvi",
        fullAccess: "Trenažieru zāle",
        duo: "Trenažieru zāle",
        junior: "Trenažieru zāle",
      },
      {
        joinFee: "Piekļuve lietotnei",
        fullAccess: "Skapītis ģērbtuves telpā apmeklējuma laikā",
        duo: "Skapītis ģērbtuves telpā apmeklējuma laikā",
        junior: "Skapītis ģērbtuves telpā apmeklējuma laikā",
      },
      {
        joinFee: "Ķermeņa sastāva analīze",
        fullAccess: "Grupu nodarbības saskaņā ar grafiku",
        duo: "Grupu nodarbības saskaņā ar grafiku",
        junior: "Grupu nodarbības saskaņā ar grafiku",
      },
      {
        joinFee: "40 minūšu ievadapmācība",
        fullAccess: "Piekļuve SPA zonai",
        duo: "Piekļuve SPA zonai",
        junior: "Piekļuve SPA zonai",
      },
      {
        joinFee:
          "1 (viena) izmēģinājuma atjaunojoša procedūra saskaņā ar spēkā esošo akciju Fitura LAB",
        fullAccess: "Pirts",
        duo: "Pirts",
        junior: "Pirts",
      },
      { joinFee: "", fullAccess: "Sauna", duo: "Sauna", junior: "Sauna" },
      { joinFee: "", fullAccess: "Hammam", duo: "Hammam", junior: "Hammam" },
    ],
  },
};
