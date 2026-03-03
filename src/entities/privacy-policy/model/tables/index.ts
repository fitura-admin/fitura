import { LangT } from "~/src/app/store/reducers/navigation.slice";
import { TableData } from "../privacy-policy.interface";

export const pricingTableLangs: Record<LangT, TableData> = {
  ru: {
    id: "main-services",
    columns: [
      { key: "joinFee", title: "JOIN FEE" },
      { key: "fullAccess", title: "FULL ACCES" },
      { key: "duo", title: "DUO" },
      { key: "junior", title: "JUNIOR" },
    ],
    rows: [
      {
        joinFee: "ВЛАДЕЛЕЦ КОНТРАКТА + ЧЛЕН КЛУБА / РАЗДЕЛЬНОЕ ПОСЕЩЕНИЕ",
        fullAccess: "",
        duo: "",
        junior: "Junior",
      },
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
        joinFee:
          "1 (одна) Пробная восстановительная процедура согласно действующей акции в Fitura LAB",
        fullAccess: "Баня",
        duo: "Баня",
        junior: "Баня",
      },
      { joinFee: "", fullAccess: "Сауна", duo: "Сауна", junior: "Сауна" },
      { joinFee: "", fullAccess: "Хаммам", duo: "Хаммам", junior: "Хаммам" },
    ],
  },
  en: {
    id: "main-services",
    columns: [
      { key: "joinFee", title: "JOIN FEE" },
      { key: "fullAccess", title: "FULL ACCESS" },
      { key: "duo", title: "DUO" },
      { key: "junior", title: "JUNIOR" },
    ],
    rows: [
      {
        joinFee: "CONTRACT HOLDER + CLUB MEMBER / SEPARATE VISIT",
        fullAccess: "",
        duo: "",
        junior: "Junior",
      },
      {
        joinFee: "Personal bracelet with electronic access",
        fullAccess: "Gym",
        duo: "Gym",
        junior: "Gym",
      },
      {
        joinFee: "Access to the app",
        fullAccess:
          "Locker in the changing room for the duration of your visit",
        duo: "Locker in the changing room for the duration of your visit",
        junior: "Locker in the changing room for the duration of your visit",
      },
      {
        joinFee: "Body composition analysis",
        fullAccess: "Group classes according to schedule",
        duo: "Group classes according to schedule",
        junior: "Group classes according to schedule",
      },
      {
        joinFee: "40-minute introductory training session",
        fullAccess: "Access to the SPA area",
        duo: "Access to the SPA area",
        junior: "Access to the SPA area",
      },
      {
        joinFee:
          "1 (one) Trial recovery treatment according to the current promotion at Fitura LAB",
        fullAccess: "Bath",
        duo: "Bath",
        junior: "Bath",
      },
      { joinFee: "", fullAccess: "Sauna", duo: "Sauna", junior: "Sauna" },
      { joinFee: "", fullAccess: "Hammam", duo: "Hammam", junior: "Hammam" },
    ],
  },
  lv: {
    id: "main-services",
    columns: [
      { key: "joinFee", title: "PIEDALĪŠANĀS MAKSA" },
      { key: "fullAccess", title: "FULL ACCES" },
      { key: "duo", title: "DUO" },
      { key: "junior", title: "JUNIOR" },
    ],
    rows: [
      {
        joinFee: "LĪGUMA ĪPAŠNIEKS + KLUBA LOCEKĻIS / ATSEVIŠĶA APMEKLĒŠANA",
        fullAccess: "",
        duo: "",
        junior: "Junior",
      },
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
