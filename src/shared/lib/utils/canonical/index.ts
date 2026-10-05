import type { Metadata } from "next";

import { languages } from "~/src/app/i18n/settings";

export const SITE_URL = "https://www.fitura.lv";

type Params = Promise<{ lang: string }>;

export const canonicalMetadata =
  (path = "") =>
  async ({ params }: { params: Params }): Promise<Metadata> => {
    const { lang } = await params;

    if (!(languages as readonly string[]).includes(lang)) return {};

    return { alternates: { canonical: `/${lang}${path}` } };
  };
