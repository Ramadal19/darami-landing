import "../styles/insights.css";

const insights = [
  {
    title: "Why Most Businesses Struggle with Automation",
    description:
      "Many companies attempt automation without a clear process strategy, leading to fragmented systems and limited results.",
  },
  {
    title: "AI Is Not Just for Big Companies",
    description:
      "Modern AI tools are accessible to small and medium businesses, enabling smarter operations without massive infrastructure.",
  },
  {
    title: "From Manual Work to Smart Systems",
    description:
      "Inefficiencies in daily operations can silently reduce profitability and limit long-term growth potential.",
  },
  {
    title: "The Hidden Cost of Inefficient Processes",
    description:
      "Inefficiencies in daily operations can silently reduce profitability and limit long-term growth potential.",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="insights">
      <div className="insights__inner">
        <div className="insights__header">
          <p className="insights__eyebrow">INSIGHTS</p>

          <h2 className="insights__title">
            Ideas, innovation, and digital transformation
          </h2>

          <p className="insights__subtitle">
            Explore key topics in automation, AI, and scalable systems shaping
            the future of modern businesses.
          </p>
        </div>

        <div className="insights__grid">
          {insights.map((item) => (
            <article className="insight-card" key={item.title}>
              <h3 className="insight-card__title">{item.title}</h3>
              <p className="insight-card__description">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}