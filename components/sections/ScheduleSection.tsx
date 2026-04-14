"use client";

import { useEffect, useRef, useState } from "react";
import { SCHEDULE } from "@/lib/constants";

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);
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

  const currentEntries = SCHEDULE[activeDay]?.entries ?? [];

  return (
    <section className="section section-alt" id="rozvrh" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Rozvrh</span>
          <h2 className="section-title">Nájdite si čas pre seba</h2>
          <p className="section-desc">
            Lekcie prebiehajú každý deň. Vyberte si deň a čas, ktorý vám vyhovuje.
          </p>
        </div>

        <div className="reveal">
          <div className="schedule-tabs">
            {SCHEDULE.map((day, i) => (
              <button
                key={day.day}
                className={`schedule-tab ${activeDay === i ? "active" : ""}`}
                onClick={() => setActiveDay(i)}
              >
                {day.day}
              </button>
            ))}
          </div>

          <div className="schedule-entries">
            {currentEntries.map((entry, i) => (
              <div
                key={`${entry.time}-${entry.className}-${i}`}
                className="schedule-entry"
              >
                <div className="schedule-time">{entry.time}</div>
                <div className="schedule-info">
                  <h4>{entry.className}</h4>
                  <p>Inštruktor: {entry.instructor}</p>
                </div>
                <a href="#rezervacia" className="schedule-book">
                  Rezervovať
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
