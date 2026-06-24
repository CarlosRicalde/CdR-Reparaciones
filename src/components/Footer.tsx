import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">CdR<span>Reparaciones</span></span>
        <p className="footer__copy">© {new Date().getFullYear()} CdR Reparaciones · Salta, Argentina</p>
      </div>
    </footer>
  )
}
