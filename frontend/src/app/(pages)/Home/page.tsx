"use client";

import HeroSection from "@/components/section/Hero";
import AboutSection from "@/components/section/About";
import MissionVisionSection from "@/components/section/Values";
import ProgramsSection from "@/components/section/Program";
import EventsSection from "@/components/section/Event";
import ContactSection from "@/components/section/Contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ProgramsSection />
      <EventsSection />
      <ContactSection />
    </>
  );
}
