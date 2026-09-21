import './Footer.css'

export default function Footer({ name, nickname }) {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {name} · <span className="footer__nick">{nickname}</span>
      </p>
      <p className="footer__built">Сделано на React + Vite, задеплоено на GitHub Pages</p>
    </footer>
  )
}
