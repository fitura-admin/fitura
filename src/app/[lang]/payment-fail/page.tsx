import PaymentFailPage from "~/src/pages-components/fail/ui";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata("/payment-fail");

export default function Page() {
  return <PaymentFailPage />;
}
