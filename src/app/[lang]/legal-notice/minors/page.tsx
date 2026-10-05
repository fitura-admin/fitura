import MinorsPage from "~/src/pages-components/minors/ui";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata("/legal-notice/minors");

export default function Page() {
  return <MinorsPage />;
}
