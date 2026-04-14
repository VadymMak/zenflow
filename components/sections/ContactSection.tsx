"use client";

import { useEffect, useRef } from "react";
import { CONTACT_ITEMS } from "@/lib/constants";

export default function ContactSection() {
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
    <section className="section" id="kontakt" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Kontakt</span>
          <h2 className="section-title">Nájdite nás</h2>
          <p className="section-desc">
            Sme tu pre vás. Navštívte nás osobne alebo nás kontaktujte.
          </p>
        </div>

        <div className="contact-inner">
          <div className="contact-items reveal">
            {CONTACT_ITEMS.map((item) => (
              <div key={item.title} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-map reveal reveal-delay-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.773527906174!2d17.107748315721!3d48.14388507922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c893a83d4dde1%3A0x9f29f7b2a39e5e6!2sŠtúrova%2C%20Bratislava!5e0!3m2!1ssk!2ssk!4v1680000000000!5m2!1ssk!2ssk"
              title="ZenFlow mapa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
