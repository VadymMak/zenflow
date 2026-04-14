"use client";

import { useEffect, useRef } from "react";
import { PRICING_PLANS } from "@/lib/constants";

export default function PricingSection() {
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
    <section className="section" id="cennik" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Cenník</span>
          <h2 className="section-title">Transparentné ceny</h2>
          <p className="section-desc">
            Žiadne skryté poplatky. Vyberte si plán, ktorý vám najlepšie vyhovuje.
          </p>
        </div>

        <div className="pricing-grid reveal">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.badge && (
                <div className="pricing-badge">{plan.badge}</div>
              )}

              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-label">{plan.label}</div>

              <div className="pricing-price">
                <span className="pricing-currency">€</span>
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature} className="pricing-feature">
                    <span className="pricing-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="pricing-btn">
                {plan.featured ? "Začať teraz" : "Vybrať plán"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
