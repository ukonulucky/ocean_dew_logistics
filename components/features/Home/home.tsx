"use client";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import ScrollReveal from "@/components/common/scrollReveal";
import ServicesSection from "@/components/common/servicesSection";
import SubscribeForm from "@/components/common/subscribeForm";
import AboutMe from "@/components/features/aboutMe/about";
import ContactUs from "@/components/features/contactUs/contactUs";
import MainHero from "@/components/features/Hero/mainHero";
import StayUpdated from "@/components/features/updated/stayUpdated";
import Work from "@/components/features/work/work";

import Whatapp from "@/components/common/whatapp";
import { NextFont } from "next/dist/compiled/@next/font";
import { useState } from "react";
import ReusableModal from "@/components/common/reusableModal";
import Form from "@/components/common/form";

export default function Home({
  poppings,
  inters,
}: {
  poppings: NextFont;
  inters: NextFont;
}) {
  return (
    <div
      className="bg-white relative overflow-hidden
    "
    >
      <Navbar poppings={poppings} />
      <Whatapp />
      <ScrollReveal>
        <MainHero />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <AboutMe />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ServicesSection />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ContactUs />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Work />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        {" "}
        <StayUpdated />
      </ScrollReveal>

      <Form />

      <Footer inter={inters} poppins={poppings} />
    </div>
  );
}
