import WithdrawalPage from "~/src/pages-components/withdrawal/ui";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata("/legal-notice/withdrawal");

export default function Page() {
  return <WithdrawalPage />;
}
