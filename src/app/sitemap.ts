import type { MetadataRoute } from "next";

import { languages } from "~/src/app/i18n/settings";
import { SITE_URL } from "~/src/shared/lib/utils/canonical";

const paths = [
  "",
  "/schedule",
  "/legal-notice",
  "/legal-notice/privacy-policy",
  "/legal-notice/offer",
  "/legal-notice/minors",
  "/legal-notice/withdrawal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return languages.flatMap((lang) =>
    paths.map((path) => ({ url: `${SITE_URL}/${lang}${path}` })),
  );
}
