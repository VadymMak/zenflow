"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { REVIEWS } from "@/lib/constants";

export default function ReviewsSection() {
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
    <section className="section" id="recenzie" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Recenzie</span>
          <h2 className="section-title">Čo hovoria naši žiaci</h2>
          <p className="section-desc">
            Stovky spokojných klientov. Toto sú ich príbehy.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className={`review-card reveal reveal-delay-${Math.min(i % 2 + 1, 4)}`}
            >
              <div className="review-stars">
                {"★".repeat(review.rating)}
              </div>
              <p className="review-text">&ldquo;{review.text}&rdquo;</p>
              <div className="review-author">
                <div className="review-avatar">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    sizes="48px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-detail">{review.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
