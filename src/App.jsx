import AnimatedCounter from "./components/AnimatedCounter";
import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";

import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
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
