import ThankYouPage from "~/src/pages-components/thank-you/ui";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata("/thank-you");

export default function Page() {
  return <ThankYouPage />;
}
