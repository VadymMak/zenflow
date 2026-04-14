"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { INSTRUCTORS } from "@/lib/constants";

export default function InstructorsSection() {
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
    <section className="section section-alt" id="instruktori" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Tím</span>
          <h2 className="section-title">Naši inštruktori</h2>
          <p className="section-desc">
            Skúsení a certifikovaní odborníci, ktorí vás prevedú cestou k zdravšiemu
            a šťastnejšiemu životu.
          </p>
        </div>

        <div className="instructors-grid">
          {INSTRUCTORS.map((instructor, i) => (
            <div
              key={instructor.id}
              className={`instructor-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="instructor-image">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div className="instructor-body">
                <h3>{instructor.name}</h3>
                <p className="instructor-speciality">{instructor.speciality}</p>
                <p className="instructor-bio">{instructor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
