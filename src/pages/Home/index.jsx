import Main from "../../components/Main";
import HeroSection from "./components/HeroSection";
import HomeCarousel from "./components/HomeCarousel";
import MainSearch from "./components/MainSearch";
import SpotlightDisplays from "./components/SpotlightDisplays";

const Home = () => {
  return (
    <Main>
      <MainSearch />
      <HeroSection />
      <SpotlightDisplays />
      <HomeCarousel />
    </Main>
  );
};

export default Home;
