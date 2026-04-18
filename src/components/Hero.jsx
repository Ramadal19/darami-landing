import { motion } from "framer-motion";
import orbImage from "../assets/darami-orb.png";
import "../styles/hero.css";

const sparkles = [
  { top: "18%", left: "52%", size: 6, delay: 0.2 },
  { top: "24%", left: "65%", size: 5, delay: 1.2 },
  { top: "35%", left: "55%", size: 7, delay: 0.8 },
  { top: "42%", left: "48%", size: 5, delay: 1.8 },
  { top: "50%", left: "69%", size: 6, delay: 0.4 },
  { top: "60%", left: "56%", size: 5, delay: 1.5 },
  { top: "32%", left: "32%", size: 7, delay: 0.9 },
  { top: "51%", left: "35%", size: 6, delay: 1.1 },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title--purple">WHERE</span>
            <br />
            <span className="hero__title--pink">CREATIVITY</span>
            <br />
            <span className="hero__title--orange">MEETS</span>
            <br />
            <span className="hero__title--white">TECHNOLOGY</span>
          </h1>

          <p className="hero__description">
            We build intelligent digital solutions that automate, scale, and
            transform businesses.
          </p>

          <div className="hero__actions">
            <a href="#solutions" className="hero__button hero__button--primary">
              Our Solutions
            </a>

            <a href="#about" className="hero__button hero__button--secondary">
            <span>Learn More</span>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__orb-wrap">
            <img
              src={orbImage}
              alt="Darami technology orb"
              className="hero__orb-image"
            />

            {sparkles.map((sparkle, index) => (
              <motion.span
                key={index}
                className="hero__sparkle"
                initial={{ opacity: 0.2, scale: 0.8 }}
                animate={{
                  opacity: [0.2, 1, 0.3, 1, 0.2],
                  scale: [0.8, 1.25, 0.9, 1.15, 0.8],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  delay: sparkle.delay,
                  ease: "easeInOut",
                }}
                style={{
                  top: sparkle.top,
                  left: sparkle.left,
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}