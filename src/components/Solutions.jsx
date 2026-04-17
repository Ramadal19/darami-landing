import "../styles/solutions.css";

const solutions = [
  {
    icon: "⚡",
    title: "Automation Systems",
    description:
      "Streamline your operations with smart automation that reduces manual work and increases efficiency.",
  },
  {
    icon: "🧠",
    title: "AI-Powered Solutions",
    description:
      "Leverage AI to enhance decision-making, customer experience, and business intelligence.",
  },
  {
    icon: "💻",
    title: "Web & App Development",
    description:
      "Build modern, scalable websites and applications tailored to your business needs.",
  },
  {
    icon: "📊",
    title: "Data & Insights",
    description:
      "Turn data into actionable insights that drive growth and strategic decisions.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="solutions">
      <div className="solutions__inner">
        <div className="solutions__header">
          <p className="solutions__eyebrow">OUR SOLUTIONS</p>
          <h2 className="solutions__title">
            Transforming ideas into intelligent digital systems
          </h2>
          <p className="solutions__subtitle">
            We help businesses modernize, automate, and grow through practical
            technology solutions designed for real-world impact.
          </p>
        </div>

        <div className="solutions__grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-card__icon">{solution.icon}</div>
              <h3 className="solution-card__title">{solution.title}</h3>
              <p className="solution-card__description">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}