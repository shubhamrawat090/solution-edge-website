import Advantages from "../components/Advantages";
import ContactUs from "../components/ContactUs";
import HeroSection from "../components/HeroSection";
import HowDoesItWork from "../components/HowDoesItWork";

const Home = () => {
  return (
    <div id="home">
      <HeroSection />
      <HowDoesItWork />
      <Advantages />
      <ContactUs />
    </div>
  );
};

export default Home;
