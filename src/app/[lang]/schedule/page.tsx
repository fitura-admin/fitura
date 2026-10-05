import SchedulePage from "~/src/pages-components/schedule";
import { canonicalMetadata } from "~/src/shared/lib/utils/canonical";

export const generateMetadata = canonicalMetadata("/schedule");

export default function Page() {
  return <SchedulePage />;
}
