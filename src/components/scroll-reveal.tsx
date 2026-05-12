"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]");
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-element ${className}`}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
      }}
    >
      {children}
    </div>
  );
}

export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (
            entry.target.classList.contains("grid") &&
            !entry.target.classList.contains("reveal-element")
          ) {
            Array.from(entry.target.children).forEach((child, index) => {
              (child as HTMLElement).style.animationDelay = `${index * 100}ms`;
              child.classList.add("animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]");
              (child as HTMLElement).style.opacity = "0";
            });
          } else {
            entry.target.classList.add("animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]");
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document
      .querySelectorAll("h2, h3, .grid > div, .arch-border > table tr")
      .forEach((el) => {
        if (!el.closest(".text-mask") && !el.closest("thead")) {
          el.classList.add("reveal-element");
          el.setAttribute("style", "opacity: 0; transform: translateY(40px);");
          observer.observe(el);
        }
      });

    return () => {
      observer.disconnect();
    };
  }, []);
}