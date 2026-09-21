import './Navbar.css'

export default function Navbar({ sections, activeSection, theme, onToggleTheme, brand }) {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home">
        <span className="navbar__dot" />
        {brand}
      </a>

      <nav className="navbar__links">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={
              activeSection === section.id ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            {section.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="navbar__theme"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  )
}
