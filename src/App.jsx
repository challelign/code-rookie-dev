import AnimatedCounter from "./components/AnimatedCounter";

import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import heroBg from "../public/assets/herobg.png";

const App = () => (
  <>
    <div className="relative z-0 bg-primary">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <Hero />
      </div>
      <AnimatedCounter />
      <Showcase />
    </div>
  </>
);

export default App;
