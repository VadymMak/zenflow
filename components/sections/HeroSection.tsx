import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-image-wrap">
        <Image
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1600&q=80"
          alt="Yoga štúdio ZenFlow"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-badge">🌿 Yoga & Wellness Štúdio Bratislava</div>

        <h1 className="hero-title">
          Nájdi svoju <em>vnútornú</em> harmóniu
        </h1>

        <p className="hero-desc">
          Objavte krásu jogy v priateľskom prostredí ZenFlow štúdia. Certifikovaní
          inštruktori, malé skupiny a prírodné materiály — pre váš skutočný pokoj.
        </p>

        <div className="hero-actions">
          <a href="#rezervacia" className="btn-primary">
            Bezplatná prvá lekcia →
          </a>
          <a href="#lekcie" className="btn-outline">
            Zobraziť lekcie
          </a>
        </div>

        <div className="hero-scroll">
          <span>Posunúť nadol</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}
