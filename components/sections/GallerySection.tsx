"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GallerySection() {
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
      { threshold: 0.05 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section-alt" id="galeria" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Galéria</span>
          <h2 className="section-title">Nahliadnite do štúdia</h2>
          <p className="section-desc">
            Svetlý, vzdušný priestor s prírodnými materiálmi navrhnutý pre váš
            maximálny komfort a sústredenie.
          </p>
        </div>

        <div className="gallery-grid reveal">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className={`gallery-item ${img.span ? "span" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={
                  img.span
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-overlay">
                <span className="gallery-zoom">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
