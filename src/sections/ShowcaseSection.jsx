import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  chatShowcase,
  ecommercehowcase,
  eventsShowcase,
  lmsShowcase,
  nikeShowcase,
  youtubeShowcase,
} from "../constants";
import {
  renderArrowNext,
  renderArrowPrev,
  renderIndicator,
} from "../components/carouselHelpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current,
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
        <TitleHeader
          title="Full-Stack Project Showcase"
          sub="🚀 Explore the features and architecture of my end-to-end application"
        />
        <div className="mt-15 showcaselayout">
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

          <div className="project-list-wrapper overflow-hidden">
            {/* RIGHT */}
            <div className="project" ref={project2Ref}>
              <Carousel
                // autoPlay
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

              <h2>Event Elevation: Crafting Unforgettable Experiences</h2>
              <p className="text-white-50 md:text-xl"></p>
              <p className="text-white-50 md:text-xl">
                An app built with NextJs, Mongose,clerk auth using clerk webhook
                and Strip payment with TailwindCSS for a fast, user-friendly
                experience.
              </p>
            </div>
            {/* RIGHT */}
            {/* A YouTube clone application */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <Carousel
                  // autoPlay
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
                  {youtubeShowcase.map((showcase, index) => (
                    <div className="image-wrapper bg-[#FFEFDB]" key={index}>
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        src={showcase.imgPath}
                        alt={showcase.alt || "Chat Showcase Image"}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <h2>A YouTube clone application</h2>
              <p className="text-white-50 md:text-xl">
                An app built using the RapidAPI YouTube endpoint with the latest
                technologies React.
              </p>
            </div>
          </div>
        </div>
        {/* 
        
        
        */}
        <div className="mt-15 showcaselayout">
          {/* LEFT */}
          <div className="project-list-wrapper overflow-hidden">
            {/* Event Elevation: */}
            <div className="project" ref={project4Ref}>
              <Carousel
                // autoPlay
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
                {nikeShowcase.map((showcase, index) => (
                  <div className="image-wrapper bg-[#FFEFDB]" key={index}>
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

              <h2>Nike product list Landing page</h2>
              <p className="text-white-50 md:text-xl"></p>
              {/* <p className="text-white-50 md:text-xl">
                An app built with NextJs, Mongose,clerk auth using clerk webhook
                and Strip payment with TailwindCSS for a fast, user-friendly
                experience.
              </p> */}
            </div>
            {/* Other project here */}
            <div className="project" ref={project5Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <Carousel
                  // autoPlay
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
                  {chatShowcase.map((showcase, index) => (
                    <div className="image-wrapper bg-[#FFEFDB]" key={index}>
                      <LazyLoadImage
                        effect="blur"
                        width="100%"
                        src={showcase.imgPath}
                        alt={showcase.alt || "Chat Showcase Image"}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
             <div className="text-content">
              <h2>Social Chat App with Real-Time Notifications</h2>
              <p className="text-white-50 md:text-xl">
                Social Chat, a cutting-edge social media application built with
                the latest technologies! This dynamic platform leverages Next.js
                15 for seamless server-side rendering, React 19 for an
                interactive user experience, and Socket.io for real-time
                notifications and messaging.and TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
            </div>
          </div>

          {/* RIGHT */}
          {/* Social Chat App with Real-Time Notifications */}
          <div className="first-project-wrapper" ref={project6Ref}>
            <Carousel
              // autoPlay
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
              {ecommercehowcase.map((showcase, index) => (
                <div className="image-wrapper bg-[#FFEFDB]" key={index}>
                  <LazyLoadImage
                    effect="blur"
                    width="100%"
                    src={showcase.imgPath}
                    alt={showcase.alt || "Ecommerce Showcase Image"}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </Carousel>
            <div className="text-content">
              <h2>E-commerce website using the MERN Stack</h2>
              <p className="text-white-50 md:text-xl">
                a modern e-commerce application developed using the MERN stack, which consists of MongoDB, Express, React, and Node.js. This application is designed to deliver a seamless shopping experience, featuring robust functionalities for both customers and administrators
              </p>

              <p className="text-white-50 md:text-xl"> 

              <p className="text-white-50 md:text-xl font-bold">Key Features</p>
                
                Filter, Pagination, and Search,
                
                Authentication & Authorization,
                
                User Routes,
                
                Adding Orders Resource,
                
                User Reviews, 
                Implementing Redux,
                
                Adding Pagination, Search & Filters,
                
                Users & Authentication Frontend,
                
                Adding Shopping Cart,
                
                Handle Checkout & Payments,
                
                User Orders & Reviews,
                
                Admin Features and
                Admin Routes 
              </p>
            </div>
          </div>
        </div>

        {/* <div className="pt-20 w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2 border-red-500">
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 w-fit border-2 border-red-500 "> */}
        <div className="pt-20 w-full px-4">
          <TitleHeader
            // title="My Prefeered Tech Stack"
            sub={
              <>
                <div className="flex gap-x-4 items-center">
                  <img src="/images/api.png" width={30} height={8} />
                  REST APIs [ Node, Express, Mailtrap, JWT and more ]
                </div>
              </>
            }
          /> 
          <div class="flex flex-col lg:flex-row gap-6 grid-cols-6 md:flex-row justify-evenly">
            <div class="w-full flex gap-x-4 bg-[#e5e5e5] shadow-lg rounded-xl p-6  ">
              <div className="flex flex-wrap gap-3 justify-evenly items-center w-full">
                {[
                  "Bill Payment System",
                  "M-PESA Ethiopia Payment Integration",
                  "Payment Integration for third-party API integration",
                  "Ecommerce API",
                  "Email Subscription API",
                  "ERP Integration for Moodle LMS",
                  "Banking applications Like backend api and fullstack ",
                ].map((title, index) => (
                  <span
                    key={index}
                    className="bg-black-200 text-sm px-4 py-2 justify-between rounded-full text-white"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
