"use client";
import "./project.css";

import AnimatedH1 from "../components/AnimatedH1/AnimatedH1";
import AnimatedCopy from "../components/AnimatedCopy/AnimatedCopy";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Footer from "../components/Footer/Footer";

import ReactLenis from "@studio-freight/react-lenis";

const page = () => {
  return (
    <ReactLenis root>
      <div className="page">
        <section className="project-hero">
          <div className="col">
            <div className="project-hero-img">
              <div className="project-hero-img-wrapper">
                <ParallaxImage
                  src="/project/IMG_7412.jpg"
                  alt=""
                  speed={0.2}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="project-page-title">
                <AnimatedH1 delay={1}>Ultimate CrossGym</AnimatedH1>
              </div>
              <div className="row">
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    Client
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    steven Krt
                  </AnimatedCopy>
                </div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.125} animateOnScroll={false}>
                    Services
                  </AnimatedCopy>
                  <AnimatedCopy delay={1.25} tag="h3" animateOnScroll={false}>
                    Digital Branding & Website Development
                  </AnimatedCopy>
                </div>
              </div>
              <div className="row">
                <div className="sub-col"></div>
                <div className="sub-col">
                  <AnimatedCopy delay={1.5}>
                    My client wanted to create a single page website for a gym community. Just enough to provide important information for the members. Firstly, we focused on his visions, so we could design a website that would reflect his brand identity. Then, I did some deep research on the target audience and the competition. Then I implemented the website.
                  </AnimatedCopy>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col">
              <AnimatedCopy tag="h3">Summary</AnimatedCopy>
            </div>
            <div className="col">
              <AnimatedCopy>
                
              </AnimatedCopy>

              <AnimatedCopy delay={0.15}>
              The client’s goal was simple: provide members with all essential gym information in one intuitive, mobile-friendly interface. I began by mapping out his vision and translating it into a brand-aligned UI/UX design. To ensure the website stood out, I conducted market and competitor research, focusing on usability and clarity.
              </AnimatedCopy>

              <AnimatedCopy delay={0.3}>
              The results spoke for themselves: organic search traffic saw a significant boost, while average session duration jumped by nearly +3 minutes — a clear indicator of stronger engagement.
              This project proved how thoughtful web development can reshape brand perception and drive measurable business outcomes when executed with creativity, precision, and user focus.
              </AnimatedCopy>
            </div>
          </div>
        </section>

        <section className="project-info">
          <div className="container">
            <div className="col"></div>
            <div className="col">
              <div className="project-info-img-1">
                <div className="project-info-img-1-wrapper">
                  <ParallaxImage
                    src="/project/IMG_7413.jpg"
                    alt=""
                    speed={0.2}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default page;
