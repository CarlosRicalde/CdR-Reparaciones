import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="section-label">Salta · Argentina</p>
          <h1 className="hero__title">
            Bienvenido, somos CdR
            <br />
            <span>tu servicio ideal</span>
          </h1>
          <p className="hero__subtitle">
            Reparación profesional de computadoras, notebooks y all-in-one.
            Diagnóstico rápido y soluciones reales.
          </p>
          <div className="hero__actions">
            <a
              href="#contacto"
              className="btn btn-primary hero__btn-presupuesto"
            >
              Pedí tu presupuesto →
            </a>
            <a
              href="#servicios"
              className="btn btn-outline hero__btn-servicios"
            >
              Ver servicios
            </a>
          </div>
        </div>
        <div className="hero__logo">
          <img src="/logo_negro.png" alt="Logo CdR Reparaciones" />
        </div>
      </div>
    </section>
  );
}
