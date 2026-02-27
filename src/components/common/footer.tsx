"use client";

import { useEffect, useRef } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fitText = () => {
      const text = textRef.current;
      const container = containerRef.current;
      if (!text || !container) return;

      // Binary search for the perfect font size
      let lo = 10;
      let hi = 3000;
      while (hi - lo > 1) {
        const mid = Math.floor((lo + hi) / 2);
        text.style.fontSize = `${mid}px`;
        if (text.scrollWidth <= container.offsetWidth) {
          lo = mid;
        } else {
          hi = mid;
        }
      }
      text.style.fontSize = `${lo}px`;
    };

    fitText();
    const ro = new ResizeObserver(fitText);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <footer className="overflow-hidden">
      {/* Full-width name */}
      <div ref={containerRef} className="w-full overflow-hidden">
        <p
          ref={textRef}
          className="font-medium text-neutral-900 dark:text-neutral-50 leading-none select-none uppercase whitespace-nowrap block"
          style={{ letterSpacing: "-0.02em" }}
        >
          OBIOMA
        </p>
      </div>

      {/* Copyright — centered */}
      <div className="flex items-center justify-center py-4 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-500">
          &copy; {currentYear} Wisdom Obioma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
