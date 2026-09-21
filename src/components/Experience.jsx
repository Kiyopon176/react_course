import './Experience.css'

export default function Experience({ jobs }) {
  return (
    <section className="section experience" id="experience">
      <h2 className="section__title">
        <span className="section__index">02.</span> Опыт работы
      </h2>

      <ol className="experience__timeline">
        {jobs.map((job) => (
          <li key={`${job.company}-${job.period}`} className="experience__item">
            <span className="experience__marker" aria-hidden="true" />

            <p className="experience__period">{job.period}</p>
            <h3 className="experience__role">
              {job.role} <span className="experience__at">@</span> {job.company}
            </h3>

            <ul className="experience__points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
