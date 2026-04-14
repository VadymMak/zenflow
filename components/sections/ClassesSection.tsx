"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CLASSES } from "@/lib/constants";

export default function ClassesSection() {
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
    <section className="section" id="lekcie" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Naše lekcie</span>
          <h2 className="section-title">Každý si nájde svoju cestu</h2>
          <p className="section-desc">
            Od pokojnej Hatha Yogy pre začiatočníkov až po dynamickú Power Yogu —
            ponúkame rôznorodé štýly pre všetky úrovne a potreby.
          </p>
        </div>

        <div className="classes-grid">
          {CLASSES.map((cls, i) => (
            <div
              key={cls.id}
              className={`class-card reveal reveal-delay-${Math.min(i % 3 + 1, 4)}`}
            >
              <div className="class-card-image">
                <Image
                  src={cls.image}
                  alt={cls.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="class-level">{cls.level}</span>
              </div>
              <div className="class-card-body">
                <div className="class-meta">
                  <span>⏱ {cls.duration}</span>
                  <span className="class-dot" />
                  <span>{cls.level}</span>
                </div>
                <h3>{cls.name}</h3>
                <p>{cls.description}</p>
                <a href="#rezervacia" className="class-card-link">
                  Rezervovať lekciu →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
