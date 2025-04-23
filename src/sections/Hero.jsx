import { styles } from "../styles";
import ComputersCanvas from "../components/canvas/Computers";

import Button from "../components/Button";
import StarsCanvas from "../components/canvas/Stars";
import { words } from "../constants";

const Hero = () => {
  return (
    <section id="hero" className={`relative w-full h-screen mx-auto   `}>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <StarsCanvas />

      <div
        className={` absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col gap-7">
          <h1
            className={`${styles.heroHeadText} text-white text-3xl md:text-4xl`}
          >
            Hi, I'm <span className="text-[#915EFF]">Challelign</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-4 text-white-100 break-words hidden md:block`}
          >
            Full-stack developer based in Ethiopia
            <br className="sm:block hidden" />
            focused on building clean & efficient digital products.
          </p>
          <div className="hero-text">
            <h1>
              I turn
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-2 gap-1 pb-1"
                    >
                      <img
                        src={word.imgPath}
                        alt="person"
                        className="md:size-5 size-3 rounded-full bg-white-50"
                      />
                      <span className="text-[#915EFF]">{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className={`${styles.heroSubText}`}>into scalable solutions</h1>
            <h1 className={`${styles.heroSubText}`}>
              that people love to use.
            </h1>
          </div>
          <header className="flex flex-col justify-center items-start w-full px-6 md:px-10 mt-6 md:mt-10">
            <div className="flex flex-col gap-6">
              <Button
                className="w-56 h-12 sm:w-60 sm:h-14"
                id="button"
                text="See my work"
              />
            </div>
          </header>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
