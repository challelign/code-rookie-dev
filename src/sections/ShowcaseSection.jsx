import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { eventsShowcase, lmsShowcase } from "../constants";
import {
  renderArrowNext,
  renderArrowPrev,
  renderIndicator,
} from "../components/carouselHelpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    //FOR EACH PROJECT REF
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    //   FOR SECTION
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      // className="app-showcase border-2 border-red-400"
      className="app-showcase"
    >
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            {/* <div className="image-wrapper">
              <img src="/images/lms/lms-home.png" alt="Ryde" />
            </div> */}
            <Carousel
              autoPlay
              infiniteLoop
              interval={5000}
              showThumbs={false}
              showStatus={false}
              // dynamicHeight
              swipeable
              useKeyboardArrows
              renderArrowPrev={renderArrowPrev}
              renderArrowNext={renderArrowNext}
              renderIndicator={renderIndicator}
            >
              {lmsShowcase.map((showcase, index) => (
                <div className="image-wrapper bg-[#FFEFDB]" key={index}>
                  {/*    <img
                    src={showcase.imgPath}
                    alt={showcase.alt || "Event Showcase Image"}
                    className="w-full h-auto object-cover"
                  /> */}

                  <LazyLoadImage
                    effect="blur"
                    width="100%"
                    src={showcase.imgPath}
                    alt={showcase.alt || "LMS Showcase Image"}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </Carousel>
            <div className="text-content">
              <h2>On-Demand Learning Management Platform</h2>
              <p className="text-white-50 md:text-xl">
                An app built with Next.js, React, Stripe for payments, Mux for
                video streaming, Prisma for database management ,Clerk for
                authehentication , Tailwind for styling, and MySQL for data
                storage and more...
              </p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              {/* <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/event/home.png"
                  alt="Library Management Platform"
                />
              </div> */}

              <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                showThumbs={false}
                showStatus={false}
                // dynamicHeight
                swipeable
                useKeyboardArrows
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
                renderIndicator={renderIndicator}
              >
                {eventsShowcase.map((showcase, index) => (
                  <div className="image-wrapper bg-[#FFEFDB]" key={index}>
                    {/*  <img
                      src={showcase.imgPath}
                      alt={showcase.alt || "Event Showcase Image"}
                      className="w-full h-auto object-cover"
                    /> */}

                    <LazyLoadImage
                      effect="blur"
                      width="100%"
                      src={showcase.imgPath}
                      alt={showcase.alt || "Event Showcase Image"}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </Carousel>

              <h2> Event Elevation: Crafting Unforgettable Experiences</h2>
              <p className="text-white-50 md:text-xl"></p>
              <p className="text-white-50 text-sm">
                An app built with NextJs, Mongose,clerk auth using clerk webhook
                and Strip payment with TailwindCSS for a fast, user-friendly
                experience.
              </p>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
