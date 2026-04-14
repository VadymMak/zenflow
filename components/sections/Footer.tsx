import { NAV_ITEMS } from "@/lib/constants";

const CLASSES_LINKS = [
  "Hatha Yoga",
  "Vinyasa Flow",
  "Yin Yoga",
  "Power Yoga",
  "Prenatálna Yoga",
  "Meditácia",
];

const INFO_LINKS = [
  { label: "Cenník", href: "#cennik" },
  { label: "Inštruktori", href: "#instruktori" },
  { label: "Galéria", href: "#galeria" },
  { label: "Recenzie", href: "#recenzie" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>🌿 ZenFlow</h3>
            <p>
              Yoga & Wellness štúdio v srdci Bratislavy. Objavte harmóniu tela a
              mysle s certifikovanými inštruktormi.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="YouTube">
                ▶️
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigácia</h4>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Lekcie</h4>
            <ul>
              {CLASSES_LINKS.map((cls) => (
                <li key={cls}>
                  <a href="#lekcie">{cls}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Informácie</h4>
            <ul>
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} ZenFlow. Všetky práva vyhradené.</p>
          <p>Vytvorené s 💚 pre zdravší životný štýl</p>
        </div>
      </div>
    </footer>
  );
}
