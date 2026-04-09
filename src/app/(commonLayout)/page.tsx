import HeroSection from "@/components/HeroSection/HeroSection";
import OurService from "@/components/OurServices/OurServices";
import OurTools from "@/components/OurTools/OurTools";
import Pricing from "@/components/Pricing/Pricing";
import Trusted from "@/components/Trusted/Trusted";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Trusted />
      <OurService />
      <Pricing />
      <OurTools />
    </>
  );
};

export default HomePage;