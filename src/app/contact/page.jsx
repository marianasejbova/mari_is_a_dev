"use client";
import "./contact.css";
import { useState, useEffect } from "react";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import { ReactLenis } from "@studio-freight/react-lenis";

const Page = () => {
  const [nyTime, setNyTime] = useState("--:-- AM EST");
  const [tokyoTime, setTokyoTime] = useState("--:-- AM JST");

  useEffect(() => {
    const updateTimes = () => {
      const nyOptions = {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const nyFormatter = new Intl.DateTimeFormat("en-US", nyOptions);
      setNyTime(nyFormatter.format(new Date()) + " EST");

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
                <AnimatedCopy>Prague</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>hhh</AnimatedCopy>
                  <AnimatedCopy>Prague, Czechia</AnimatedCopy>
                  <AnimatedCopy>USA</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>{nyTime}</AnimatedCopy>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <AnimatedCopy>Tokyo</AnimatedCopy>
              </div>
              <div className="col">
                <div className="sub-col">
                  <AnimatedCopy>3-5-7 Ginza</AnimatedCopy>
                  <AnimatedCopy>Chuo-ku, Tokyo 104-0061</AnimatedCopy>
                  <AnimatedCopy>Japan</AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy>{tokyoTime}</AnimatedCopy>
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
