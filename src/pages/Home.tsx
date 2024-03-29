import WhoWeAre from "@/components/WhoWeAre";
import Advantages from "@/components/Advantages";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import HowDoesItWork from "@/components/HowDoesItWork";
import OurCommitmentsForQuality from "@/components/OurCommitmentsForQuality";
import OurWorkings from "@/components/OurWorkings";

const Home = () => {
  return (
    <div id="home">
      <HeroSection />
      <OurCommitmentsForQuality />
      <WhoWeAre />
      <OurWorkings />
      <HowDoesItWork />
      <Advantages />
      <ContactUs />
    </div>
  );
};

export default Home;
