import AppSection from "~/src/entities/app-section/ui";
import ContactsSection from "~/src/entities/contacts/ui";
import MembershipSection from "~/src/entities/membership/ui";
import SpaceSections from "~/src/entities/space-sections/ui";
import StartSection from "~/src/entities/start/ui";
import SubscribeModal from "~/src/entities/subscribe-modal/ui";

export default function HomePage() {
  return (
    <>
      <StartSection />
      <SpaceSections />
      <MembershipSection />
      <AppSection />
      <ContactsSection />
      <SubscribeModal />
    </>
  );
}
