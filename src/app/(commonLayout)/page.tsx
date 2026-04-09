import HeroSection from "@/components/HeroSection/HeroSection";
import OurService from "@/components/OurServices/OurServices";
import Pricing from "@/components/Pricing/Pricing";
import Trusted from "@/components/Trusted/Trusted";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Trusted />
      <OurService />
      <Pricing />
    </>
  );
};

export default HomePage;