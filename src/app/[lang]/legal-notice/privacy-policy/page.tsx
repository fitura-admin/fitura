import PrivacyPolicyPage from "~/src/pages-components/privacy-policy/ui";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata(
  "/legal-notice/privacy-policy",
);

export default function Page() {
  return <PrivacyPolicyPage />;
}
