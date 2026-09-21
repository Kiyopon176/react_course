import './About.css'

export default function About({ paragraphs, stats }) {
  return (
    <section className="section about" id="about">
      <h2 className="section__title">
        <span className="section__index">01.</span> Обо мне
      </h2>

      <div className="about__grid">
        <div className="about__text">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ul className="about__stats">
          {stats.map((stat) => (
            <li key={stat.label} className="about__stat">
              <span className="about__stat-value">{stat.value}</span>
              <span className="about__stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
