import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import { profile } from './data/profile.js'

const SECTIONS = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'Обо мне' },
  { id: 'experience', label: 'Опыт' },
  { id: 'skills', label: 'Навыки' },
  { id: 'contacts', label: 'Контакты' },
]

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  // Подсвечиваем пункт меню той секции, которая сейчас на экране.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.05, 0.5, 1] },
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar
        sections={SECTIONS}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        brand={profile.name}
      />

      <main>
        <Hero profile={profile} />
        <About paragraphs={profile.about} stats={profile.stats} />
        <Experience jobs={profile.experience} />
        <Skills skills={profile.skills} />
        <Contacts contacts={profile.contacts} />
      </main>

      <Footer name={profile.name} nickname={profile.nickname} />
    </div>
  )
}
