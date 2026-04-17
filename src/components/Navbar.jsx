import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

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

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand">
          <div className="logo-container">
            <img src={logo} alt="Darami Logo" className="logo-img" />
          </div>
        </div>

        <nav className="navbar__nav">
          <a
            href="#home"
            className={`nav-link ${activeSection === "home" ? "nav-link--active" : ""}`}
          >
            Home
          </a>

          <a
            href="#solutions"
            className={`nav-link ${activeSection === "solutions" ? "nav-link--active" : ""}`}
          >
            Solutions
          </a>

          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "nav-link--active" : ""}`}
          >
            About
          </a>

          <a
            href="#insights"
            className={`nav-link ${activeSection === "insights" ? "nav-link--active" : ""}`}
          >
            Insights
          </a>

          <a href="#contact" className="navbar__button">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}