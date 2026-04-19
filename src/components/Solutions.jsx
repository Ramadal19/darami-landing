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

const packages = [
  {
    name: "Starter",
    description: "A solid starting point for new or growing businesses.",
    items: ["Brand foundation", "Landing page", "Core digital presence"],
  },
  {
    name: "Growth",
    description: "For businesses ready to improve visibility and performance.",
    items: [
      "Expanded branding",
      "Professional website",
      "Workflow improvement",
    ],
    featured: true,
  },
  {
    name: "Pro Automation",
    description: "For businesses ready to scale with smarter systems.",
    items: [
      "Custom solutions",
      "Process automation",
      "Advanced integrations",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We learn about your business, your goals, and the challenges you want to solve.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the right solution and align it with your priorities and growth stage.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We create the digital system, automation, or experience your business needs.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We deliver, refine, and prepare everything for real-world impact.",
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

        <div className="solutions__extra">
          <div className="solutions__packages">
            <div className="solutions__section-header">
              <p className="solutions__section-eyebrow">SERVICE PACKAGES</p>
              <h3 className="solutions__section-title">
                Flexible solutions for different stages of growth
              </h3>
              <p className="solutions__section-subtitle">
                Our services are designed to adapt to your business needs, from
                foundational digital presence to advanced automation systems.
              </p>
            </div>

            <div className="solutions__packages-grid">
              {packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={`package-card ${
                    pkg.featured ? "package-card--featured" : ""
                  }`}
                >
                  {pkg.featured && (
                    <span className="package-card__badge">Most Popular</span>
                  )}

                  <h4 className="package-card__title">{pkg.name}</h4>
                  <p className="package-card__description">{pkg.description}</p>

                  <ul className="package-card__list">
                    {pkg.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="solutions__process">
            <div className="solutions__section-header">
              <p className="solutions__section-eyebrow">HOW IT WORKS</p>
              <h3 className="solutions__section-title">
                A simple process with meaningful results
              </h3>
            </div>

            <div className="solutions__process-grid">
              {processSteps.map((step) => (
                <article key={step.number} className="process-card">
                  <div className="process-card__number">{step.number}</div>
                  <h4 className="process-card__title">{step.title}</h4>
                  <p className="process-card__description">{step.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="solutions__cta">
            <p className="solutions__section-eyebrow">LET’S BUILD</p>
            <h3 className="solutions__cta-title">Ready to grow your business?</h3>
            <p className="solutions__cta-text">
              Whether you need automation, a digital platform, or a stronger
              online presence, we create solutions designed for real business
              impact.
            </p>

            <div className="solutions__cta-actions">
              <a href="#contact" className="solutions__btn solutions__btn--primary">
                <span className="btn-line-1">Start Your Project</span>
                <span className="btn-line-2">Book a Consultation</span>
              </a>
            </div>

            <p className="solutions__cta-note">
              We do not just create digital products — we build systems that
              generate results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}