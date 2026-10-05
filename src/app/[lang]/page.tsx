import type { Metadata } from "next";

import HomePage from "~/src/pages-components/homepage";
import { homepageMeta } from "~/src/pages-components/homepage/model/homepage.const";
import { LangT } from "~/src/app/store/reducers/navigation.slice";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

const canonical = canonicalMetadata();

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return { ...homepageMeta[lang as LangT], ...(await canonical(props)) };
}

export default function Page() {
  return <HomePage />;
}
