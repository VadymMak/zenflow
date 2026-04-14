"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      setHidden(currentY > lastScrollY.current && currentY > 120);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`header ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}
      >
        <div className="container">
          <div className="header-inner">
            <a
              href="#"
              className="header-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="header-logo-icon">🌿</span>
              ZenFlow
            </a>

            <nav className="header-nav">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#rezervacia"
                className="header-cta"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#rezervacia");
                }}
              >
                Rezervovať
              </a>
            </nav>

            <button
              className="header-burger"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`header-mobile-nav ${mobileOpen ? "open" : ""}`}>
        <button
          className="mobile-nav-close"
          aria-label="Zavrieť menu"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#rezervacia"
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#rezervacia");
          }}
        >
          Rezervovať
        </a>
      </nav>
    </>
  );
}
