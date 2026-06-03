import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import BodyPartSection from "../components/BodyPartSection.jsx";
import USPSection from "../components/USPSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import WhoWeServeSection from "../components/WhoWeServeSection.jsx";
import TeamStepsSection from "../components/TeamStepsSection.jsx";
import DoctorsSection from "../components/DoctorsSection.jsx";
import KarnatakaReachSection from "../components/KarnatakaReachSection.jsx";
import AppBannerSection from "../components/AppBannerSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import SpecialistsCta from "../components/SpecialistsCta.jsx";

export default function Index() {
  return (
    <>
      <HeroSection />
      <BodyPartSection />
      <USPSection />
      <ServicesSection />
      <WhoWeServeSection />
      <TeamStepsSection />
      <DoctorsSection />
      <KarnatakaReachSection />
      <AppBannerSection />
      <TestimonialsSection />
      <SpecialistsCta />
    </>
  );
}
