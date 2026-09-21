import './Skills.css'

export default function Skills({ skills }) {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">
        <span className="section__index">02.</span> Навыки
      </h2>

      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={skill.name} className="skills__item">
            <div className="skills__head">
              <span className="skills__name">
                <span className="skills__icon" aria-hidden="true">
                  {skill.icon}
                </span>
                {skill.name}
              </span>
              <span className="skills__percent">{skill.level}%</span>
            </div>

            <div
              className="skills__track"
              role="progressbar"
              aria-label={skill.name}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {/* Уровень приходит из данных в CSS-переменную: ширина и анимация роста. */}
              <div className="skills__bar" style={{ '--level': `${skill.level}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
