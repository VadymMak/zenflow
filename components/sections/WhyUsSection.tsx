"use client";

import { useEffect, useRef } from "react";
import { WHY_ITEMS } from "@/lib/constants";

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="preco-my" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Prečo ZenFlow?</span>
          <h2 className="section-title">Čo nás robí výnimočnými</h2>
          <p className="section-desc">
            V ZenFlow veríme, že každý si zaslúži priestor pre rast, pokoj a
            autentický zážitok z jogy.
          </p>
        </div>

        <div className="why-grid">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className={`why-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="why-icon">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
