import Advantages from "./Advantages";
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";
import HowDoesItWork from "./HowDoesItWork";

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
