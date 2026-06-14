"use client";

import { useEffect, useRef } from "react";

export function Altimeter() {
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const altRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrolled / maxScroll, 1) : 0;
      const altitude = Math.round(progress * 35000);

      if (fillRef.current) {
        fillRef.current.style.height = `${progress * 100}%`;
      }
      if (dotRef.current) {
        dotRef.current.style.bottom = `${progress * 100}%`;
      }
      if (altRef.current) {
        altRef.current.textContent = altitude.toLocaleString();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="altimeter-shell" aria-hidden="true">
      <div className="altimeter-label">Alt</div>
      <div className="altimeter-max">35K</div>
      <div className="altimeter-track">
        <div className="altimeter-bar">
          <div ref={fillRef} className="altimeter-fill" />
          <div ref={dotRef} className="altimeter-dot" />
        </div>
      </div>
      <div className="altimeter-min">0</div>
      <div className="altimeter-readout">
        <span ref={altRef}>0</span>
        <span className="altimeter-unit">FT</span>
      </div>
    </div>
  );
}
