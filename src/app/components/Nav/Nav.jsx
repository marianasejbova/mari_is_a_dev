"use client";
import "./Nav.css";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import { useTransitionRouter } from "next-view-transitions";

const Nav = () => {
  const router = useTransitionRouter();
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const navRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuOverlayBarRef = useRef(null);
  const menuOpenBtnRef = useRef(null);
  const menuCloseBtnRef = useRef(null);
  const menuFooterRef = useRef(null);

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "scale(1)",
        },
        {
          opacity: 0.4,
          transform: "scale(0.5)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  const handleCloseMenu = () => {
    if (
      !menuOverlayBarRef.current ||
      !menuCloseBtnRef.current ||
      !navRef.current ||
      !menuOpenBtnRef.current ||
      !menuOverlayRef.current ||
      !menuFooterRef.current
    ) {
      return;
    }

    gsap.to(
      [
        menuOverlayBarRef.current.querySelector("a"),
        menuCloseBtnRef.current.querySelector("p"),
        menuFooterRef.current.querySelector(".showreel a"),
        ...menuFooterRef.current.querySelectorAll(".media-link a"),
      ],
      {
        y: -20,
        duration: 1,
        stagger: 0.1,
        ease: CustomEase.create("", ".76,0,.2,1"),
        onComplete: () => {
          gsap.set(menuOverlayBarRef.current.querySelector("a"), { y: 20 });
          gsap.set(menuCloseBtnRef.current.querySelector("p"), { y: 20 });
          gsap.set(menuFooterRef.current.querySelector(".showreel a"), {
            y: 20,
          });
          gsap.set(menuFooterRef.current.querySelectorAll(".media-link a"), {
            y: 20,
          });
        },
      }
    );

    gsap.to(".menu-link a", {
      y: "-100%",
      duration: 0.75,
      stagger: 0.05,
      ease: "power4.in",
      onComplete: () => {
        gsap.set(".menu-link a", { y: "100%" });
      },
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      delay: 0.5,
      ease: CustomEase.create("", ".76,0,.2,1"),
      onComplete: () => {
        gsap.set(navRef.current, { pointerEvents: "all" });
        gsap.set(menuOverlayRef.current, {
          pointerEvents: "none",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
      },
    });

    gsap.to(
      [
        navRef.current.querySelector("a"),
        menuOpenBtnRef.current.querySelector("p"),
      ],
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: CustomEase.create("", ".76,0,.2,1"),
      }
    );
  };

  const handleOpenMenu = () => {
    if (
      !navRef.current ||
      !menuOpenBtnRef.current ||
      !menuOverlayRef.current ||
      !menuOverlayBarRef.current ||
      !menuCloseBtnRef.current ||
      !menuFooterRef.current
    ) {
      return;
    }

    gsap.to(
      [
        navRef.current.querySelector("a"),
        menuOpenBtnRef.current.querySelector("p"),
      ],
      {
        y: -20,
        duration: 1,
        stagger: 0.1,
        ease: CustomEase.create("", ".76,0,.2,1"),
        onComplete: () => {
          gsap.set(navRef.current.querySelector("a"), { y: 20 });
          gsap.set(menuOpenBtnRef.current.querySelector("p"), { y: 20 });
        },
      }
    );

    gsap.to(menuOverlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: CustomEase.create("", ".76,0,.2,1"),
      onComplete: () => {
        gsap.set(navRef.current, { pointerEvents: "none" });
        gsap.set(menuOverlayRef.current, { pointerEvents: "all" });
      },
    });

    gsap.to(".menu-link a", {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.to(
      [
        menuOverlayBarRef.current.querySelector("a"),
        menuCloseBtnRef.current.querySelector("p"),
        menuFooterRef.current.querySelector(".showreel a"),
        ...menuFooterRef.current.querySelectorAll(".media-link a"),
      ],
      {
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: CustomEase.create("", ".76,0,.2,1"),
      }
    );
  };

  useEffect(() => {
    gsap.registerPlugin(CustomEase);

    if (menuOpenBtnRef.current) {
      menuOpenBtnRef.current.addEventListener("click", handleOpenMenu);
    }

    if (menuCloseBtnRef.current) {
      menuCloseBtnRef.current.addEventListener("click", handleCloseMenu);
    }

    router.events?.on("routeChangeStart", handleCloseMenu);

    return () => {
      if (menuOpenBtnRef.current) {
        menuOpenBtnRef.current.removeEventListener("click", handleOpenMenu);
      }

      if (menuCloseBtnRef.current) {
        menuCloseBtnRef.current.removeEventListener("click", handleCloseMenu);
      }

      router.events?.off("routeChangeStart", handleCloseMenu);
    };
  }, [router]);

  const handleNavigation = (e, path) => {
    e.preventDefault();

    const currentPath =
      typeof window !== "undefined" ? window.location.pathname : "/";

    if (currentPath === path) {
      handleCloseMenu();
      return;
    }

    handleCloseMenu();

    setTimeout(() => {
      router.push(path, {
        onTransitionReady: slideInOut,
      });
    }, 200);
  };

  return (
    <>
      <nav ref={navRef}>
        <div className="logo">
          <a href="/" onClick={(e) => handleNavigation(e, "/")}>
            Mariana Šejbová
          </a>
        </div>
        <div className="menu-toggle-open" ref={menuOpenBtnRef}>
          <p>Menu</p>
        </div>
      </nav>

      <div className="menu-overlay" ref={menuOverlayRef}>
        <div className="menu-overlay-bar" ref={menuOverlayBarRef}>
          <div className="logo">
            <a href="/">Mariana Šejbová</a>
          </div>
          <div className="menu-toggle-close" ref={menuCloseBtnRef}>
            <p>Close</p>
          </div>
        </div>

        <div className="menu-footer" ref={menuFooterRef}>
          <div className="showreel">
            <a href="https://vimeo.com/1027126039">Showreel</a>
          </div>
          <div className="socials">
            <div className="media-link">
              <a href="https://www.instagram.com/codegridweb/">Instagram</a>
            </div>
            <div className="media-link">
              <a href="https://x.com/codegridweb">Twitter</a>
            </div>
          </div>
        </div>

        <div className="menu-links">
          <div className="menu-link">
            <a href="/" onClick={(e) => handleNavigation(e, "/")}>
              <h1>Home</h1>
            </a>
          </div>
          <div className="menu-link">
            <a href="/about" onClick={(e) => handleNavigation(e, "/about")}>
              <h1>Who I am</h1>
            </a>
          </div>
          <div className="menu-link">
            <a href="/work" onClick={(e) => handleNavigation(e, "/work")}>
              <h1>Work</h1>
            </a>
          </div>
          <div className="menu-link">
            <a href="/contact" onClick={(e) => handleNavigation(e, "/contact")}>
              <h1>HIRE ME</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
