"use client";
import "./contact.css";
import { useState, useEffect } from "react";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";

const Page = () => {
  const [cetTime, setCetTime] = useState("--:-- AM CET");
  const [tokyoTime, setTokyoTime] = useState("--:-- AM JST");

  useEffect(() => {
    const updateTimes = () => {
      const cetOptions = {
        timeZone: "Europe/Prague",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const cetFormatter = new Intl.DateTimeFormat("en-US", cetOptions);
      setCetTime(cetFormatter.format(new Date()) + " CET");

      const tokyoOptions = {
        timeZone: "Asia/Tokyo",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const tokyoFormatter = new Intl.DateTimeFormat("en-US", tokyoOptions);
      setTokyoTime(tokyoFormatter.format(new Date()) + " JST");
    };

    updateTimes();

    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ReactLenis root>
      <div className="page">
        <section className="contact-hero">
          <div className="container">
            <AnimatedH1 delay={0.85}>
              I love making stuff and I love to craft bold identities that inspire and leave a lasting mark.
              I am fierce but true to everyone. Team-player, but able to handle things on my own. I admit mistake, laugh at myself - I am proud of the wrinkles from smiling.
            </AnimatedH1>
          </div>
        </section>

        <section className="contact-details">
          <div className="container">
            <div className="row">
              <div className="col">
                <AnimatedCopy>Let's Build</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>New Collaborations</AnimatedCopy>
                  <AnimatedCopy>sejbomar@cvut.cz</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>Join me on LinkedIn</AnimatedCopy>
                  <AnimatedCopy>Mariana Šejbová</AnimatedCopy>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <AnimatedCopy>Mostly in</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy></AnimatedCopy>
                  <AnimatedCopy>Czechia</AnimatedCopy>
                  <AnimatedCopy>Dejvice, Prague 6</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>{cetTime}</AnimatedCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-bg">
            <ParallaxImage src="/contact/banner.jpg" alt="" speed={0.2} />
          </div>

          <div className="contact-banner-cta">
            <AnimatedH1 animateOnScroll={true}>Let's build together</AnimatedH1>
          </div>
        </section>
      </div>

      <Footer />
    </ReactLenis>
  );
};

export default Page;
