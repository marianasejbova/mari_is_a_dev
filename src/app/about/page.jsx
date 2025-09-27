"use client";
import "./about.css";
import { useEffect, useRef, useState } from "react";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Next.js",
  "Three.js",
  "GSAP",
  "Tailwind CSS",
  "GIT",
  "Figma",
  "React",
  "SwiftUI - in progress",
];

const page = () => {
  const container = useRef();
  const [windowWidth, setWindowWidth] = useState(0);
  const scrollTriggerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useGSAP(
    () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      const timeoutId = setTimeout(() => {
        if (windowWidth > 900) {
          const expertiseSection = document.querySelector(".expertise");
          const expertiseHeader = document.querySelector(".expertise-header");
          const services = document.querySelector(".services");

          if (expertiseSection && expertiseHeader && services) {
            ScrollTrigger.refresh();

            scrollTriggerRef.current = ScrollTrigger.create({
              trigger: expertiseSection,
              start: "top top",
              endTrigger: services,
              end: "bottom bottom",
              pin: expertiseHeader,
              pinSpacing: false,
              onEnter: () => {
                gsap.to(expertiseHeader, { duration: 0.1, ease: "power1.out" });
              },
            });
          }
        }
      }, 100);

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(timeoutId);

        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }
      };
    },
    { dependencies: [windowWidth], scope: container }
  );

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 300);

    return () => {
      clearTimeout(refreshTimeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page" ref={container}>
        <section className="about-hero">
          <div className="aura-gradient-bg">
            <div 
              className="floating-light light-1"
              style={{
                left: `${mousePosition.x * 0.3 + 15}%`,
                top: `${mousePosition.y * 0.2 + 10}%`,
              }}
            ></div>
            <div 
              className="floating-light light-2"
              style={{
                right: `${(100 - mousePosition.x) * 0.4 + 20}%`,
                top: `${mousePosition.y * 0.3 + 60}%`,
              }}
            ></div>
            <div 
              className="floating-light light-3"
              style={{
                left: `${mousePosition.x * 0.5 + 50}%`,
                bottom: `${(100 - mousePosition.y) * 0.2 + 20}%`,
              }}
            ></div>
          </div>
          <div className="container">
            <AnimatedH1 delay={1}>Shaping YOUR IDEAS</AnimatedH1>

            <div className="about-tagline">
              <div className="col">
                <AnimatedCopy delay={1} animateOnScroll={false}>
                  BUILDING YOUR BRAND-IDENTITY & RESPONZIVE WEBSITE.
                </AnimatedCopy>
              </div>
            </div>
            <AnimatedH1 delay={1.2}>with Vision and Innovation</AnimatedH1>
          </div>
        </section>

        <section className="about-copy">
          <div className="container">
            <AnimatedCopy tag="h2">The Origin</AnimatedCopy>

            <div className="about-copy-wrapper">
              <AnimatedCopy>
              Based in Sokolov, Czechia, in 2005. Raised on Minecraft and Linux based systems. Now I play in Visual Studio Code. Built up my programming chops at CTU Prague, Faculty of Electrical Engineering. <br /> Suspiciously good at JavaScript.
              I have a certification in UI/UX design, now I am learning SwiftUI. Always looking for new challenges and opportunities to grow. 
              </AnimatedCopy>

              <AnimatedCopy delay={0.25}>
              I don't like wordPress.
              </AnimatedCopy>

            </div>
          </div>
        </section>

        <section className="expertise">
          <div className="expertise-header">
            <div className="container">
              <div className="row">
                <AnimatedH1 animateOnScroll={true}>
                What I've been <br className="" /> up to <br /> & my skills
                </AnimatedH1>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="col"></div>
            <div className="col">
              <div className="service">
                <AnimatedCopy tag="h3">(01)</AnimatedCopy>
                <AnimatedCopy tag="h2">Visual Identity</AnimatedCopy>
                <AnimatedCopy>01 Color Theory & Typography</AnimatedCopy>
                <AnimatedCopy>02 Design Systems & Assets</AnimatedCopy>
                <AnimatedCopy>03 Website Voice & Personality</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(02)</AnimatedCopy>
                <AnimatedCopy tag="h2">Digital Experiences</AnimatedCopy>
                <AnimatedCopy>01 UI/UX & Interactive Design</AnimatedCopy>
                <AnimatedCopy>02 Frontend Development</AnimatedCopy>
                <AnimatedCopy>03 Performance & Accessibility</AnimatedCopy>
              </div>
              <div className="service">
                <AnimatedCopy tag="h3">(03)</AnimatedCopy>
                <AnimatedCopy tag="h2">Soft Skills</AnimatedCopy>
                <AnimatedCopy>01 Hungry for knowledge - always learning</AnimatedCopy>
                <AnimatedCopy>02 Teamwork & Collaboration</AnimatedCopy>
                <AnimatedCopy>03 Staying humble</AnimatedCopy>
              </div>
            </div>
          </div>
        </section>


        <section className="founder-voice">
          <div className="container">
            <AnimatedCopy tag="h2">
              Because with the right JavaScript framework, everything is possible.
            </AnimatedCopy>

            <div className="founder-image">
              <ParallaxImage
                src="/about/IMG_7414.jpg"
                alt="Mariana Šejbová"
                speed={0.3}
              />
            </div>

            <div className="founter-info">
              <AnimatedCopy>Mariana Šejbová</AnimatedCopy>
              <AnimatedCopy>That's me</AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="my-stack">
          <div className="container">
            <div className="stack-header">
              <AnimatedH1 animateOnScroll={true}>My Tech Stack</AnimatedH1>
            </div>
            <div className="stack-grid">
              {techStack.map((tech, index) => (
                <div className="stack-item" key={index}>
                  <AnimatedCopy tag="p" animateOnScroll={true}>
                    {tech}
                  </AnimatedCopy>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default page;
