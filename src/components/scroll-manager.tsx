"use client";

import { useEffect } from "react";

export default function ScrollManager() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          if (
            target.classList.contains("grid") &&
            !target.classList.contains("reveal-element")
          ) {
            Array.from(target.children).forEach((child, index) => {
              (child as HTMLElement).style.animationDelay = `${index * 100}ms`;
              child.classList.add("animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]");
              (child as HTMLElement).style.opacity = "0";
            });
          } else {
            target.classList.add("animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]");
          }
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    document
      .querySelectorAll("h2, h3, .grid > div, .arch-border > table tr")
      .forEach((el) => {
        const closestTextMask = el.closest(".text-mask");
        const closestThead = el.closest("thead");
        
        if (!closestTextMask && !closestThead) {
          if (!el.classList.contains("animate-reveal-up")) {
            el.classList.add("reveal-element");
            (el as HTMLElement).style.opacity = "0";
            (el as HTMLElement).style.transform = "translateY(40px)";
            observer.observe(el);
          }
        }
      });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}