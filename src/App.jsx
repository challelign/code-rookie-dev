import AnimatedCounter from "./components/AnimatedCounter";
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";

import Hero from "./sections/HeroSection";
import Showcase from "./sections/ShowcaseSection";
import heroBg from "/assets/herobg.png";

const App = () => (
  <>
    <div className="relative z-0 bg-primary">
      <NavBar />
      <div
        className="hero-section pt-5"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Hero />
      </div>
      <AnimatedCounter />
      <LogoSection />

      <Showcase />
    </div>
  </>
);

export default App;
