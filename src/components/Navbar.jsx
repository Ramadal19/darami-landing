import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "solutions", "about", "insights", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = "home";

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    const handleResize = () => {
      if (window.innerWidth > 640) {
        setMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
  <a href="#home" onClick={closeMenu} className="logo-container">
    <img
      src={logo}
      alt="Darami Logo"
      className="logo-img"
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  </a>
</div>

        <nav className="navbar__nav">
          <a
            href="#home"
            onClick={closeMenu}
            className={`nav-link ${activeSection === "home" ? "nav-link--active" : ""}`}
          >
            Home
          </a>

          <a
            href="#solutions"
            onClick={closeMenu}
            className={`nav-link ${activeSection === "solutions" ? "nav-link--active" : ""}`}
          >
            Solutions
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className={`nav-link ${activeSection === "about" ? "nav-link--active" : ""}`}
          >
            About
          </a>

          <a
            href="#insights"
            onClick={closeMenu}
            className={`nav-link ${activeSection === "insights" ? "nav-link--active" : ""}`}
          >
            Insights
          </a>

          <a href="#contact" onClick={closeMenu} className="navbar__button">
            Contact
          </a>
        </nav>

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""}`}
      >
        <a
          href="#home"
          onClick={closeMenu}
          className={`mobile-link ${activeSection === "home" ? "mobile-link--active" : ""}`}
        >
          Home
        </a>

        <a
          href="#solutions"
          onClick={closeMenu}
          className={`mobile-link ${activeSection === "solutions" ? "mobile-link--active" : ""}`}
        >
          Solutions
        </a>

        <a
          href="#about"
          onClick={closeMenu}
          className={`mobile-link ${activeSection === "about" ? "mobile-link--active" : ""}`}
        >
          About
        </a>

        <a
          href="#insights"
          onClick={closeMenu}
          className={`mobile-link ${activeSection === "insights" ? "mobile-link--active" : ""}`}
        >
          Insights
        </a>

        <a href="#contact" onClick={closeMenu} className="navbar__mobile-button">
          Contact
        </a>
      </div>
    </header>
  );
}