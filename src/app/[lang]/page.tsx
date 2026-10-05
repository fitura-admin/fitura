import HomePage from "~/src/pages-components/homepage";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata();

export default function Page() {
  return <HomePage />;
}
