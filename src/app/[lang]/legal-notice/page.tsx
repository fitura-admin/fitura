import LegalNoticePage from "~/src/pages-components/legal-notice/ui";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata("/legal-notice");

export default function Page() {
  return <LegalNoticePage />;
}
