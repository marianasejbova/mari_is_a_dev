"use client";
import "./Footer.css";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const logoRef = useRef(null);

  useGSAP(
    () => {
      if (!logoRef.current) return;

      const text = new SplitType(logoRef.current, {
        types: "chars",
        charClass: "footer-logo-char",
      });

      gsap.set(".footer-logo-char", {
        y: "100%",
        display: "inline-block",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
        .to(".footer-logo-char", {
          y: "0%",
          stagger: 0.04,
          duration: 0.8,
          ease: "power2.out",
        });

      return () => {
        if (text) text.revert();
        ScrollTrigger.getAll()
          .filter((st) => st.vars.trigger === logoRef.current)
          .forEach((st) => st.kill());
      };
    },
    { scope: logoRef }
  );

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="col">
            <h3>Content delivered to your inbox</h3>
            <div className="subscribe-form">
              <input type="text" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="footer-socials">
                <a href="https://www.instagram.com/marian_sej/">Instagram</a>
                <a href="https://www.linkedin.com/in/mariana-šejbová-627a4336b/">LinkedIn</a>
              </div>

              <div className="langs">
                <p>EN</p>
                <p></p>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-logo">
          <h1 ref={logoRef}>MARIANA</h1>
        </div>

        <div className="footer-copyright">
          <p>My portfolio</p>
          <p>By mariana šejbová</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
