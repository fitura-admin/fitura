import { Section } from "~/src/entities/offer/model";
import { LangT } from "~/src/app/store/reducers/navigation.slice";

export const withdrawalHeading: Record<LangT, string> = {
  ru: "Право на отказ",
  lv: "Atteikuma tiesības",
  en: "Right of Withdrawal",
};

export const withdrawalMeta: Record<LangT, { title: string; date: string }> = {
  ru: {
    title: "Право на отказ",
    date: "",
  },
  lv: {
    title: "Atteikuma tiesības",
    date: "",
  },
  en: {
    title: "Right of Withdrawal",
    date: "",
  },
};

const ruSections: Section[] = [
  {
    id: "withdrawal",
    title: "",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "1. Член клуба или Владелец контракта, являющийся потребителем и заключивший Контракт дистанционно, вправе отказаться от него без указания причин в течение 14 (четырнадцати) календарных дней. Срок исчисляется со дня, следующего за днём заключения Контракта. Для отказа достаточно до истечения срока направить Исполнителю однозначное уведомление, в том числе по электронной почте или почтовым отправлением, либо вручить его лично. Можно использовать форму отказа Исполнителя или уведомление в свободной форме.",
          "2. Если Член клуба ни разу не посещал Клуб, не получал Клубный браслет, доступ к мобильному приложению и иные услуги по Контракту, все уплаченные суммы, включая Плату за присоединение, возвращаются полностью.",
          "3. Плата за присоединение не возвращается, если включённые в неё разовые услуги оказаны Члену клуба.",
          "4. Абонентская плата за Платежный период возвращается за вычетом стоимости фактически оказанных Основных услуг, рассчитанной пропорционально периоду предоставленного доступа к Основным услугам до направления уведомления об отказе, исходя из согласованной в Контракте цены. Стоимость разового посещения Клуба по Прейскуранту для такого расчёта не применяется.",
          "5. Самостоятельно выбирая при регистрации в мобильном приложении дату начала оказания услуг, Владелец контракта просит начать их оказание с выбранной даты. Если она наступает до истечения 14-дневного срока отказа, удержания по пунктам 3 и 4 допускаются при условии, что до заключения Контракта Владелец контракта получил информацию о праве на отказ и оплате оказанной части услуг. До начала оказания услуг Владелец контракта, проставляя в приложении отметку об ознакомлении с настоящими условиями права на отказ, подтверждает, что ему понятно: после оказания услуг по Контракту он утратит право на отказ от Контракта.",
          "6. Исполнитель возвращает денежные средства Владельцу контракта без необоснованной задержки, но не позднее 10 (десяти) календарных дней со дня получения уведомления об отказе, тем же способом оплаты, если потребитель явно не согласовал иной способ без дополнительных расходов для него.",
        ],
      },
    ],
  },
];

const enSections: Section[] = [
  {
    id: "withdrawal",
    title: "",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "1. A Club Member or Contract Owner who is a consumer and has concluded the Contract at a distance has the right to withdraw from the Contract within 14 (fourteen) calendar days without giving any reason. The period is calculated from the day following the date on which the Contract is concluded. To exercise the right of withdrawal, it is sufficient to send an unequivocal notice to the Service Provider before the withdrawal period expires, including by email or post, or to deliver it in person. The Service Provider’s withdrawal form or a notice in free form may be used.",
          "2. If the Club Member has never visited the Club and has not received a Club Bracelet, access to the mobile app or other services under the Contract, all amounts paid, including the Joining Fee, shall be refunded in full.",
          "3. The Joining Fee shall not be refunded if the one-off services included in it have been provided to the Club Member.",
          "4. The Membership Fee for the Payment Period shall be refunded less the value of the Basic Services actually provided, calculated in proportion to the period during which access to the Basic Services was provided up to the sending of the notice of withdrawal, based on the price agreed in the Contract. The price of a single visit to the Club specified in the Price List shall not be used for this calculation.",
          "5. By independently selecting the service commencement date when registering in the mobile app, the Contract Owner requests that the provision of services begin on the selected date. If that date falls before the expiry of the 14-day withdrawal period, the deductions under clauses 3 and 4 may be made provided that, before concluding the Contract, the Contract Owner received information on the right of withdrawal and payment for the portion of the services provided. Before the provision of services begins, the Contract Owner, by ticking the box in the app to confirm that they have read these terms governing the right of withdrawal, acknowledges that they understand that, once the services under the Contract have been provided, they will lose the right to withdraw from the Contract.",
          "6. The Service Provider shall reimburse the Contract Owner without undue delay, but no later than 10 (ten) calendar days from the date of receipt of the notice of withdrawal, using the same means of payment, unless the consumer has expressly agreed to another method of reimbursement that does not incur any additional costs for the consumer.",
        ],
      },
    ],
  },
];

const lvSections: Section[] = [
  {
    id: "withdrawal",
    title: "",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "1. Kluba biedram vai Līguma īpašniekam, kurš ir patērētājs un noslēdzis Līgumu attālināti, ir tiesības 14 (četrpadsmit) kalendāro dienu laikā atteikties no Līguma, nenorādot iemeslu. Termiņu skaita no nākamās dienas pēc Līguma noslēgšanas dienas. Lai izmantotu atteikuma tiesības, pietiek pirms termiņa beigām nosūtīt Izpildītājam nepārprotamu paziņojumu, tostarp pa e-pastu vai pa pastu, vai iesniegt to personīgi. Var izmantot Izpildītāja atteikuma veidlapu vai brīvā formā sagatavotu paziņojumu.",
          "2. Ja Kluba biedrs ne reizi nav apmeklējis Klubu, nav saņēmis Kluba aproci, piekļuvi mobilajai lietotnei un citus Līgumā paredzētos pakalpojumus, visas samaksātās summas, tostarp Pievienošanās maksa, tiek atmaksātas pilnā apmērā.",
          "3. Pievienošanās maksa netiek atmaksāta, ja tajā iekļautie vienreizējie pakalpojumi ir sniegti Kluba biedram.",
          "4. Abonementa maksa par Maksājumu periodu tiek atmaksāta, atskaitot faktiski sniegto Pamata pakalpojumu vērtību, ko aprēķina proporcionāli laikposmam, kurā līdz paziņojuma par atteikumu nosūtīšanai bija nodrošināta piekļuve Pamata pakalpojumiem, pamatojoties uz Līgumā noteikto cenu. Šim aprēķinam nepiemēro Cenrādī norādīto Kluba vienreizēja apmeklējuma cenu.",
          "5. Reģistrējoties mobilajā lietotnē un patstāvīgi izvēloties pakalpojumu sniegšanas sākuma datumu, Līguma īpašnieks lūdz sākt pakalpojumu sniegšanu izvēlētajā datumā. Ja šis datums iestājas pirms 14 dienu atteikuma tiesību izmantošanas termiņa beigām, 3. un 4. punktā paredzētos ieturējumus drīkst veikt ar nosacījumu, ka pirms Līguma noslēgšanas Līguma īpašnieks ir saņēmis informāciju par atteikuma tiesībām un sniegtās pakalpojumu daļas apmaksu. Pirms pakalpojumu sniegšanas sākuma Līguma īpašnieks, lietotnē atzīmējot, ka ir iepazinies ar šiem atteikuma tiesību nosacījumiem, apliecina, ka viņam ir saprotams: pēc Līgumā paredzēto pakalpojumu sniegšanas viņš zaudēs tiesības atteikties no Līguma.",
          "6. Izpildītājs atmaksā naudas līdzekļus Līguma īpašniekam bez nepamatotas kavēšanās, bet ne vēlāk kā 10 (desmit) kalendāro dienu laikā no dienas, kad saņemts paziņojums par atteikumu, izmantojot to pašu maksāšanas līdzekli, ja vien patērētājs nav skaidri piekritis citam atmaksas veidam, kas viņam nerada papildu izmaksas.",
        ],
      },
    ],
  },
];

export const withdrawalSectionsLangs: Record<LangT, Section[]> = {
  ru: ruSections,
  en: enSections,
  lv: lvSections,
};
