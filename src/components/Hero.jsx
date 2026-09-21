import './Hero.css'

export default function Hero({ profile }) {
  return (
    <section className="hero" id="home">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__text">
        <p className="hero__hello">👋 Привет, меня зовут</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#contacts">
            Связаться
          </a>
          <a className="btn btn--ghost" href="#about">
            Обо мне
          </a>
        </div>

        <p className="hero__location">📍 {profile.location}</p>
      </div>

      <div className="hero__avatar">
        <div className="hero__ring" aria-hidden="true" />
        <img src={profile.avatar} alt={`Аватар: ${profile.name}`} width="320" height="320" />
      </div>
    </section>
  )
}
