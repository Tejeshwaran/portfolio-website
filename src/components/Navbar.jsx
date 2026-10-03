import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/languageContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const { t } = useLanguage();
  useEffect(() => {
    if (!menuOpen) return;
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
  ];

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label={t.nav.label}>
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label={t.nav.home}>
          <span className="brand-mark" aria-hidden="true">T<span>.</span></span>
          <span className="brand-name">Tejeshwaran<span className="brand-dot">.</span></span>
        </a>

        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div className={"nav-panel" + (menuOpen ? " is-open" : "")} id="primary-navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <LanguageSwitcher />
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
              {t.nav.contact}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
