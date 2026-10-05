import OfferPage from "~/src/pages-components/offer/ui";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata("/legal-notice/offer");

export default function Page() {
  return <OfferPage />;
}
