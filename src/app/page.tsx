"use client";
import React from "react";
import StartSection from "~/src/entities/start/ui";
import MembershipSection from "~/src/entities/membership/ui";
import ContactsSection from "../entities/contacts/ui";
import AppSection from "../entities/app-section/ui";
import SpaceSections from "../entities/space-sections/ui";
import SubscribeModal from "../entities/subscribe-modal/ui";

export default function Home() {
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
