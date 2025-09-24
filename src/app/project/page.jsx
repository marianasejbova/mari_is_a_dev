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
                  Project: Single-Page Website for a Gym Community
The client needed a single-page website to deliver essential information to gym members in a simple, accessible way.
I began by aligning with the client’s vision to ensure the site reflected his brand identity. Next, I conducted research on the target audience and competitors, identifying design and usability patterns that would resonate with users.
Finally, I implemented the website using JavaScript, HTML5, and CSS3, focusing on responsive design, performance optimization, and intuitive navigation. The result was a lightweight, user-friendly site that successfully connected the gym with its community.
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
