"use client";

import { useState } from "react";
import { CLASSES } from "@/lib/constants";

const PERKS = [
  "Prvá lekcia zadarmo pre nových záujemcov",
  "Žiadny záväzok — zrušenie kedykoľvek",
  "Potvrdenie rezervácie do 2 hodín",
];

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking-section" id="rezervacia">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-info">
            <h2>Rezervujte si svoju prvú lekciu</h2>
            <p>
              Začnite svoju cestu k zdravšiemu a šťastnejšiemu životu ešte dnes.
              Prvá lekcia je pre nových záujemcov úplne zadarmo.
            </p>
            <div className="booking-perks">
              {PERKS.map((perk) => (
                <div key={perk} className="booking-perk">
                  <span className="perk-check">✓</span>
                  {perk}
                </div>
              ))}
            </div>
          </div>

          <div className="booking-form">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🙏</div>
                <h3 style={{ marginBottom: "12px" }}>Ďakujeme!</h3>
                <p style={{ color: "var(--gray)" }}>
                  Vaša rezervácia bola prijatá. Ozveme sa vám do 2 hodín.
                </p>
              </div>
            ) : (
              <>
                <h3>Rezervácia lekcie</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="booking-name">Meno *</label>
                      <input
                        id="booking-name"
                        type="text"
                        placeholder="Vaše meno"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="booking-phone">Telefón *</label>
                      <input
                        id="booking-phone"
                        type="tel"
                        placeholder="+421 9XX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="booking-email">Email *</label>
                    <input
                      id="booking-email"
                      type="email"
                      placeholder="vas@email.sk"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="booking-class">Typ lekcie *</label>
                    <select id="booking-class" required>
                      <option value="">Vyberte lekciu</option>
                      {CLASSES.map((cls) => (
                        <option key={cls.id} value={cls.id}>
                          {cls.name} ({cls.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="booking-date">Dátum *</label>
                      <input id="booking-date" type="date" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="booking-time">Čas *</label>
                      <select id="booking-time" required>
                        <option value="">Vyberte čas</option>
                        <option>7:00</option>
                        <option>9:00</option>
                        <option>12:00</option>
                        <option>17:00</option>
                        <option>19:00</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="booking-submit">
                    Rezervovať lekciu →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
