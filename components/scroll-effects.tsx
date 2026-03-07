"use client";

import { useEffect } from "react";

import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function ScrollEffects() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const cleanup: Array<() => void> = [];
    let lenis: Lenis | null = null;
    let cursorFrame = 0;

    if (!reducedMotion) {
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        gestureOrientation: "vertical",
      });

      const raf = (time: number) => {
        // GSAP ticker passes seconds; Lenis expects milliseconds.
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(raf);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.lagSmoothing(0);
      cleanup.push(() => gsap.ticker.remove(raf));

      const internalLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
      const onAnchorClick = (event: MouseEvent) => {
        const anchor = event.currentTarget as HTMLAnchorElement;
        const href = anchor.getAttribute("href");
        if (!href || href === "#") {
          return;
        }

        const target = document.querySelector<HTMLElement>(href);
        if (!target) {
          return;
        }

        event.preventDefault();
        lenis?.scrollTo(target, {
          duration: 1.1,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        });
        window.history.replaceState(null, "", href);
      };

      internalLinks.forEach((link) => link.addEventListener("click", onAnchorClick));
      cleanup.push(() => {
        internalLinks.forEach((link) => link.removeEventListener("click", onAnchorClick));
      });
    }

    const loaderGate = document.body.dataset.loaded === "true";
    const baseDelay = reducedMotion ? 0 : loaderGate ? 0.2 : 1.7;

    gsap.fromTo(
      ".hero-status, .hero-kicker, .hero-body, .hero-actions, .hero-stats",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        delay: baseDelay,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".hero-word",
      { yPercent: 110 },
      {
        yPercent: 0,
        delay: baseDelay + 0.2,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      },
    );

    document.querySelectorAll<HTMLElement>("[data-stat-value]").forEach((node, index) => {
      const value = Number(node.dataset.statValue ?? "0");
      const suffix = node.dataset.statSuffix ?? "";
      const prefix = node.dataset.statPrefix ?? "";
      const decimals = Number(node.dataset.statDecimals ?? "0");
      const counter = { value: 0 };

      gsap.to(counter, {
        value,
        delay: baseDelay + 0.85 + index * 0.08,
        duration: 1.3,
        ease: "power2.out",
        onUpdate: () => {
          node.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`;
        },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
      const direction = element.dataset.reveal;
      const fromVars =
        direction === "left"
          ? { opacity: 0, x: -60 }
          : direction === "right"
            ? { opacity: 0, x: 60 }
            : { opacity: 0, y: 40 };

      gsap.fromTo(
        element,
        fromVars,
        reducedMotion
          ? { opacity: 1, x: 0, y: 0, duration: 0.01 }
          : {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 80%",
                once: true,
              },
            },
      );
    });

    gsap.utils.toArray<HTMLElement>(".skill-bar-fill").forEach((bar, index) => {
      const target = Number(bar.dataset.value ?? "0") / 100;
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        reducedMotion
          ? { scaleX: target, duration: 0.01 }
          : {
              scaleX: target,
              duration: 1.2,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 82%",
                once: true,
              },
            },
      );
    });

    const watermark = document.querySelector(".about-watermark");
    if (watermark && !reducedMotion) {
      gsap.fromTo(
        watermark,
        { opacity: 0.15, y: 80 },
        {
          opacity: 0.32,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        },
      );
    }

    const progressBar = document.querySelector("#progress-bar");
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }

    const nav = document.querySelector("[data-site-nav]");
    if (nav && !reducedMotion) {
      ScrollTrigger.create({
        start: 80,
        end: "max",
        onUpdate: (self) => {
          nav.classList.toggle("nav-scrolled", self.scroll() > 80);
        },
      });
    }

    const sections = gsap.utils.toArray<HTMLElement>("section[data-section-id]");
    const navLinks = gsap.utils.toArray<HTMLAnchorElement>("[data-nav-link]");
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (!self.isActive) {
            return;
          }

          const current = `#${section.dataset.sectionId}`;
          navLinks.forEach((link) => {
            link.dataset.active = link.getAttribute("href") === current ? "true" : "false";
          });
        },
      });
    });

    const contactOverlay = document.querySelector(".contact-overlay");
    if (contactOverlay && !reducedMotion) {
      gsap.fromTo(
        contactOverlay,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#contact",
            start: "top bottom",
            end: "top top+=120",
            scrub: true,
          },
        },
      );
    }

    mm.add("(pointer:fine)", () => {
      if (reducedMotion) {
        return;
      }

      const cursor = document.getElementById("cursor-dot");
      const ring = document.getElementById("cursor-ring");
      if (!cursor || !ring) {
        return;
      }

      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let ringX = mouseX;
      let ringY = mouseY;

      const moveCursor = (event: MouseEvent) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      };

      const hoverTargets = document.querySelectorAll("a, button, [data-cursor='text']");
      const onEnter = (event: Event) => {
        const target = event.currentTarget as HTMLElement;
        const textMode = target.dataset.cursor === "text";
        cursor.dataset.mode = textMode ? "text" : "interactive";
        ring.dataset.mode = textMode ? "text" : "interactive";
      };
      const onLeave = () => {
        cursor.dataset.mode = "default";
        ring.dataset.mode = "default";
      };

      hoverTargets.forEach((target) => {
        target.addEventListener("mouseenter", onEnter);
        target.addEventListener("mouseleave", onLeave);
      });

      const animateRing = () => {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        cursorFrame = window.requestAnimationFrame(animateRing);
      };

      window.addEventListener("mousemove", moveCursor);
      cursorFrame = window.requestAnimationFrame(animateRing);

      cleanup.push(() => {
        window.removeEventListener("mousemove", moveCursor);
        window.cancelAnimationFrame(cursorFrame);
        hoverTargets.forEach((target) => {
          target.removeEventListener("mouseenter", onEnter);
          target.removeEventListener("mouseleave", onLeave);
        });
      });
    });

    return () => {
      cleanup.forEach((fn) => fn());
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis?.destroy();
    };
  }, [reducedMotion]);

  return null;
}
