import { styles } from "../styles";

import ComputersCanvas from "../components/canvas/Computers";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import StarsCanvas from "../components/canvas/Stars";
import { words } from "../constants";
import { useRef } from "react";

const HeroSection = () => {
  // Typing animation
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  // First, show the full name instantly
  const fullName = "Challelign";
  const pauseDuration = 2; // seconds

  // this is text animation
  /*   useGSAP(() => {
    const chars = fullName.split("");
    const tl = gsap.timeline({ repeat: -1, repeatDelay: pauseDuration });

    chars.forEach((char, i) => {
      tl.to(textRef.current, {
        textContent: fullName.slice(0, i + 1),
        duration: 0.15,
        ease: "none",
      });
    });

    // FOR THE TEXT
    tl.to(textRef.current, {
      textContent: "",
      duration: 0.5,
      delay: pauseDuration,
    });

    // FOR THE CURSOR
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.6,
    });
  }, []);
 */
  // this is text animation but the text start with all text after 3 seconds it will animate to type

  useGSAP(() => {
    const chars = fullName.split("");

    // First, show the full name instantly
    gsap.set(textRef.current, { textContent: fullName });

    // Delay the animation start by 3 seconds
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: pauseDuration,
      delay: 2,
    });

    chars.forEach((char, i) => {
      tl.to(textRef.current, {
        textContent: fullName.slice(0, i + 1),
        duration: 0.17,
        ease: "power2.inOut",
      });
    });

    // After typing, clear the text
    tl.to(textRef.current, {
      textContent: "",
      duration: 0.5,
      delay: pauseDuration,
    });

    // Cursor blinking animation (no change)
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.6,
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap.fromTo(
      ".heroHeadTxt",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

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

        <div className="flex flex-col gap-7 heroHeadTxt">
          <h1
            className={`${styles.heroHeadText} text-white text-3xl md:text-4xl  `}
          >
            Hi, I'm <span className="text-[#915EFF]" ref={textRef}></span>
            <span
              ref={cursorRef}
              className="ml-2 w-[2px] h-14 bg-white inline-block blinking-cursor"
            ></span>
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
          {/*  <header className="flex flex-col justify-center items-start w-full px-6 md:px-10 mt-6 md:mt-10">
            <div className="flex flex-col gap-6">
              <Button
                className="w-56 h-12 sm:w-60 sm:h-14"
                id="button"
                text="See my work"
              />
            </div>
          </header> */}
        </div>
      </div>
      {/* Button fixed to bottom-left corner */}
      {/*      <div className="absolute bottom-20 pl-20 md:left-10 z-10 ">
        <Button
          className="w-96 h-12 sm:w-60 sm:h-14"
          id="button"
          text="See my work"
        />
      </div>
 */}
      <div
        className="
  absolute z-10
  bottom-10 left-4              /* default (mobile) */
  sm:bottom-12 sm:left-6        /* small screens */
  md:bottom-16 md:left-10       /* medium screens */
  xl:bottom-20 xl:pl-20         /* extra-large screens */
"
      >
        <Button
          className="
      w-56 h-12                  /* default */
      sm:w-60 sm:h-14           /* small screens */
      md:w-72 md:h-14           /* medium screens */
      xl:w-96 xl:h-14           /* extra-large screens */
    "
          id="button"
          text="See my work"
        />
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default HeroSection;
