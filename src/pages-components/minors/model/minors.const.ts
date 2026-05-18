import { Section } from "~/src/entities/offer/model";
import { LangT } from "~/src/app/store/reducers/navigation.slice";

export const minorsHeading: Record<LangT, string> = {
  ru: "Правила принятия публичной оферты для несовершеннолетних",
  lv: "Noteikumi nepilngadīgajiem",
  en: "Terms for minors",
};

export const minorsMeta: Record<LangT, { title: string; date: string }> = {
  ru: {
    title:
      "Правила принятия публичной оферты для посещения фитнес-клуба FITURA для несовершеннолетних (14–17 лет)",
    date: "14.01.2026",
  },
  lv: {
    title:
      "Noteikumi publiskā piedāvajuma pieņemšanai (līguma slēgšanai) kluba FITURA FITNESS apmeklēšanai nepilngadīgām (14–17 gadi) personām",
    date: "14.01.2026",
  },
  en: {
    title:
      "Terms for acceptance of the public offer (conclusion of agreement) for visiting the FITURA FITNESS club for minors (14–17 years old)",
    date: "14.01.2026",
  },
};

const ruSections: Section[] = [
  {
    id: "intro",
    title: "Приложение и неотъемлемая часть публичного предложения",
    level: 2,
    content: [
      {
        type: "paragraph",
        content:
          "(утверждено 14 января 2026 года решением правления FITURA SIA)",
      },
    ],
  },
  {
    id: "general",
    title: "1. Общие положения",
    level: 2,
    content: [
      {
        type: "paragraph",
        content:
          "Несовершеннолетние (до 18 лет) не могут самостоятельно заключать договор с фитнес-клубом FITURA FITNESS (FITURA SIA, рег. № 40203634454), адрес: Jaunā iela 12 k-12, Piņķi, Babītes parish, Mārupes nov., LV-2107), далее именуемым Клуб. Условия публичного предложения принимаются, и договор заключается при посредничестве родителя или законного представителя, действующего в интересах и от имени несовершеннолетнего.",
      },
    ],
  },
  {
    id: "agreement",
    title: "2. Заключение договора",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "2.1. Договор с Клубом заключается от имени несовершеннолетнего родителем или законным представителем.",
          "2.2. Родитель или законный представитель подтверждает персональные данные несовершеннолетнего и соглашается с условиями публичного предложения (договора) Клуба.",
          "2.3. В некоторых случаях заключение договора возможно только лично, для проверки прав представителя.",
          "2.4. Клуб имеет право ознакомиться с документами, удостоверяющими рождение и права представителя, в объеме, необходимом для заключения и исполнения договора.",
          "2.5. Перед заключением договора родитель или законный представитель дает свое согласие на посещение несовершеннолетним Клуба и подтверждает его, заполнив и подписав прилагаемое к настоящим правилам согласие.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "3. Ответственность и обязательства",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "3.1. Родитель или законный представитель несет полную юридическую и финансовую ответственность за исполнение условий публичного предложения, включая исполнение договора.",
          "3.2. Обязанность по исполнению публичного предложения (договора), включая платежи, указанные в договоре, а также договорные неустойки и исполнение других обязательств, распространяется на родителя или законного представителя, а не на несовершеннолетнего.",
        ],
      },
    ],
  },
  {
    id: "age",
    title: "4. Возрастные ограничения и доступ к услугам",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "4.1. Посещение Клуба с согласия родителя или законного представителя разрешено с 14 лет.",
          "4.2. Клуб может устанавливать дополнительные ограничения для несовершеннолетних в отношении использования определенных зон или оборудования, а также в случае проведения мероприятий, не предусмотренных для несовершеннолетних.",
        ],
      },
    ],
  },
  {
    id: "registration",
    title: "5. Регистрация в Клубе и обработка данных",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "5.1. При первой регистрации несовершеннолетнего в Клубе обязательно предоставление данных родителя или законного представителя.",
          "5.2. У родителя или законного представителя могут быть запрошены документы, подтверждающие родство или опеку.",
          "5.3. Обработка персональных данных осуществляется в соответствии с правилами Клуба, которые основаны на применимых законах и нормативных актах.",
        ],
      },
    ],
  },
  {
    id: "membership",
    title: "6. Использование членства",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "6.1. Несовершеннолетний пользуется услугами Клуба в соответствии с публичным предложением Клуба (включая публичное предложение (договор) и другие прилагаемые правила), а также внутренними правилами Клуба.",
          "6.2. Клуб может ограничить доступ или прекратить членство несовершеннолетнего, если не соблюдаются правила Клуба или требования безопасности.",
        ],
      },
    ],
  },
  {
    id: "final",
    title: "7. Заключительные вопросы",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "7.1. Посещение Клуба несовершеннолетним всегда осуществляется с согласия и под ответственность родителя или законного представителя.",
          "7.2. Ответы на вопросы, которые могут быть связаны с посещением Клуба несовершеннолетним и не охвачены настоящими правилами, см. в публичном предложении Клуба (включая договор) и других правилах Клуба.",
          "7.3. Приобретение абонемента в Клуб для несовершеннолетнего подтверждает согласие родителя или законного представителя с публичным предложением Клуба и настоящими правилами.",
        ],
      },
    ],
  },
];

const enSections: Section[] = [
  {
    id: "intro",
    title: "Annex and integral part of the Public Offer",
    level: 2,
    content: [
      {
        type: "paragraph",
        content:
          "(Approved on January 14, 2026 by decision of the FITURA SIA Board)",
      },
    ],
  },
  {
    id: "general",
    title: "1. General Provisions",
    level: 2,
    content: [
      {
        type: "paragraph",
        content:
          "Minors (persons under 18 years of age) cannot independently conclude an agreement with the fitness club FITURA FITNESS (FITURA SIA, registration No. 40203634454), address: Jaunā street 12/12, Piņķi, Babītes parish, Mārupes municipality, LV-2107), hereinafter – the Club. The terms of the public offer are accepted and the agreement is concluded through a parent or legal representative acting in the interests and on behalf of the minor.",
      },
    ],
  },
  {
    id: "agreement",
    title: "2. Conclusion of the Agreement",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "2.1. The agreement with the Club on behalf of a minor is concluded by a parent or legal representative.",
          "2.2. The parent or legal representative confirms the minor's personal data and agrees to the terms of the Club's public offer (agreement).",
          "2.3. In certain cases, the agreement may only be concluded in person for the purpose of verifying representation rights.",
          "2.4. The Club has the right to review birth certificates and documents confirming representation rights to the extent necessary for concluding and executing the agreement.",
          "2.5. Prior to concluding the agreement, the parent or legal representative gives consent for the minor to visit the Club and confirms this by completing and signing the consent form attached to these terms.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "3. Responsibility for Obligations",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "3.1. The parent or legal representative assumes full legal and financial responsibility for compliance with the public offer terms, including the agreement.",
          "3.2. The obligation to make payments specified in the public offer, including the agreement, as well as penalties and other obligations, applies to the parent or legal representative, not to the minor.",
        ],
      },
    ],
  },
  {
    id: "age",
    title: "4. Age Restrictions and Access to Services",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "4.1. Visiting the Club with the consent of a parent or legal representative is permitted from the age of 14.",
          "4.2. The Club may impose additional restrictions for minors regarding the use of specific areas or equipment, or during events not intended for minors.",
        ],
      },
    ],
  },
  {
    id: "registration",
    title: "5. Registration at the Club and Data Processing",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "5.1. When registering a minor at the Club for the first time, the data of the parent or legal representative must be provided.",
          "5.2. The parent or legal representative may be required to provide documents confirming kinship or guardianship.",
          "5.3. Personal data processing is carried out in accordance with the Club's policies, based on applicable legal regulations.",
        ],
      },
    ],
  },
  {
    id: "membership",
    title: "6. Use of Membership",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "6.1. The minor uses the Club's services in accordance with the Club's public offer (including the agreement and other incorporated terms), as well as the Club's internal rules.",
          "6.2. The Club may restrict access or terminate the minor's membership if the Club's rules or safety requirements are not followed.",
        ],
      },
    ],
  },
  {
    id: "final",
    title: "7. Final Provisions",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "7.1. A minor's visit to the Club is always based on the consent and responsibility of a parent or legal representative.",
          "7.2. For questions related to a minor's visit to the Club that are not covered in these terms, please refer to the Club's public offer (including the agreement) and other Club rules.",
          "7.3. The purchase of a Club membership for a minor confirms the consent of the parent or legal representative to the Club's public offer and these terms.",
        ],
      },
    ],
  },
];

const lvSections: Section[] = [
  {
    id: "intro",
    title: "Publiskā piedāvājuma pielikums un neatņemama sastāvdaļa",
    level: 2,
    content: [
      {
        type: "paragraph",
        content:
          "(apstiprināti 2026. gada 14. janvārī ar FITURA SIA valdes lēmumu)",
      },
    ],
  },
  {
    id: "general",
    title: "1. Vispārīgie noteikumi",
    level: 2,
    content: [
      {
        type: "paragraph",
        content:
          "Nepilngadīgās personas (līdz 18 gadu vecumam) nevar patstāvīgi noslēgt līgumu ar fitnesa klubu FITURA FITNESS (FITURA SIA, reg. Nr. 40203634454), adrese: Jaunā iela 12 k-12, Piņķi, Babītes pag., Mārupes nov., LV-2107), tālāk – Klubs. Publiskā piedāvājuma noteikumi tiek pieņemti un līgums tiek slēgts ar vecāka vai likumīgā pārstāvja starpniecību, kurš darbojas nepilngadīgā interesēs un vārdā.",
      },
    ],
  },
  {
    id: "agreement",
    title: "2. Līguma slēgšana",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "2.1. Līgumu ar Klubu nepilngadīgās personas vārdā noslēdz vecāks vai likumiskais pārstāvis.",
          "2.2. Vecāks vai likumiskais pārstāvis apstiprina nepilngadīgā personas datus un piekrīt Kluba publiskā piedāvājuma (līguma) noteikumiem.",
          "2.3. Atsevišķos gadījumos līguma noslēgšana iespējama tikai klātienē, pārstāvības tiesību pārbaudei.",
          "2.4. Klubam ir tiesības iepazīties ar dzimšanas un pārstāvības tiesības apliecinošiem dokumentiem Līguma slēgšanai un izpildei nepieciešamajā apjomā.",
          "2.5. Pirms Līguma slēgšanas vecāks vai likumīskais pārstāvis dod savu piekrišanu nepilngadīgā Kluba apmeklēšanai un apliecina to, aizpildot un parakstot šiem noteikumiem pievienoto piekrišanu.",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "3. Atbildība par saistībām",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "3.1. Vecāks vai likumiskais pārstāvis uzņemas pilnu juridisko un finansiālo atbildību par publiskā piedāvājuma noteikumu t.sk. līguma izpildi.",
          "3.2. Pienākums maksāt publiskākajā piedāvājumā, t.sk. līgumā norādītos maksājumu, arī līgumsodus un citu saistību izpilde attiecas uz vecāku vai likumisko pārstāvi, nevis uz nepilngadīgo personu.",
        ],
      },
    ],
  },
  {
    id: "age",
    title: "4. Vecuma ierobežojumi un piekļuve pakalpojumiem",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "4.1. Kluba apmeklējums ar vecāka vai likumiska pārstāvja piekrišanu ir atļauts no 14 gadiem.",
          "4.2. Klubs var noteikt nepilngadīgajiem papildu ierobežojumus attiecībā uz konkrētu zonu vai aprīkojuma izmantošanu, vai nepilngadīgiem neparedzēto pasākumu laikā.",
        ],
      },
    ],
  },
  {
    id: "registration",
    title: "5. Reģistrācija Klubā un datu apstrāde",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "5.1. Reģistrējot Klubā nepilngadīgo pirmo reizi, obligāti norādāmi vecāka vai likumiskā pārstāvja dati.",
          "5.2. No vecāka vai likumiskā pārstāvja var tikt pieprasīti dokumenti, kas apliecina radniecību vai aizbildnību.",
          "5.3. Personas datu apstrāde notiek saskaņā ar Kluba noteikumiem, kas balstās uz piemērojamiem normatīviem aktiem.",
        ],
      },
    ],
  },
  {
    id: "membership",
    title: "6. Dalības izmantošana",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "6.1. Nepilngadīgais izmanto Kluba pakalpojumus saskaņā ar Kluba publiskā piedāvājuma (t.sk. Līguma un citu ietilpstošo noteikumu), kā arī Kluba iekšējās kārtības noteikumiem.",
          "6.2. Klubs var ierobežot piekļuvi vai pārtraukt nepilngadīgā dalību, ja netiek ievēroti Kluba noteikumi vai drošības prasības.",
        ],
      },
    ],
  },
  {
    id: "final",
    title: "7. Noslēguma jautājumi",
    level: 2,
    content: [
      {
        type: "list",
        items: [
          "7.1. Nepilngadīgā Kluba apmeklēšana vienmēr balstās uz vecāka vai likumiskā pārstāvja piekrišanu un atbildību.",
          "7.2. Atbildes uz jautājumiem, kuri var būt saistīti ar nepilngadīgā Kluba apmeklēšanu, un kuri nav atrunāti šajos noteikumos, lūdzam skatīt Kluba publiskajā piedāvājumā (t.sk. Līgumā) un citos Kluba noteikumos.",
          "7.3. Kluba abonementa iegāde nepilngadīgajam apliecina vecāka vai likumiskā pārstāvja piekrišanu Kluba publiskā piedāvājuma un šiem noteikumiem.",
        ],
      },
    ],
  },
];

export const minorsSectionsLangs: Record<LangT, Section[]> = {
  ru: ruSections,
  en: enSections,
  lv: lvSections,
};
