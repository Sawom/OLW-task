"use client";

import ClientReviews from "@/components/ClientReviews/ClientReviews";
import GettingStarted from "@/components/GettingStarted/GettingStarted";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurService from "@/components/OurServices/OurServices";
import OurTools from "@/components/OurTools/OurTools";
import Pricing from "@/components/Pricing/Pricing";
import Trusted from "@/components/Trusted/Trusted";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Trusted />
      <OurService />
      <Pricing />
      <OurTools />
      <GettingStarted />
      <WhyChooseUs />
      <ClientReviews />
    </>
  );
};

export default HomePage;
