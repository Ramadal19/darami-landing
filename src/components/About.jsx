import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__header">
          <p className="about__eyebrow">ABOUT DARAMI</p>

          <h2 className="about__title">
            Advancing business innovation through intelligent digital systems
          </h2>

          <p className="about__description">
            Darami Creative Technologies focuses on helping small and medium-sized
            businesses modernize their operations through digital transformation,
            automation, and intelligent systems. Our goal is to create scalable
            solutions that improve efficiency, reduce operational friction, and
            support long-term growth in an increasingly technology-driven economy.
          </p>
        </div>

        <div className="about__grid">
          <article className="about-card">
            <h3 className="about-card__title">
              Digital Transformation for SMEs
            </h3>
            <p className="about-card__text">
              We support businesses in adopting modern digital tools and systems,
              enabling them to transition from manual processes to scalable,
              technology-driven operations.
            </p>
          </article>

          <article className="about-card">
            <h3 className="about-card__title">
              Automation & Intelligent Systems
            </h3>
            <p className="about-card__text">
              Our solutions integrate automation and intelligent workflows to
              streamline operations, enhance productivity, and reduce repetitive
              tasks across business functions.
            </p>
          </article>

          <article className="about-card">
            <h3 className="about-card__title">
              Economic & Operational Impact
            </h3>
            <p className="about-card__text">
              By improving efficiency and enabling scalability, our systems help
              businesses grow sustainably, strengthen competitiveness, and
              contribute to broader economic development.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}