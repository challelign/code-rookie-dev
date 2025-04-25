import AnimatedCounter from "./components/AnimatedCounter";
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";

import heroBg from "/assets/herobg.png";
import FeatureCardsSection from "./sections/FeatureCardsSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

const App = () => (
  <>
    <div className="relative z-0 bg-primary">
      <NavBar />
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <HeroSection />
      </div>
      <AnimatedCounter />
      <LogoSection />

      <ShowcaseSection />
      <FeatureCardsSection />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
    </div>
  </>
);

export default App;
