import "./SobreMi.css";

export default function SobreMi() {
  return (
    <section className="section sobre-mi" id="sobre-mi">
      <div className="container sobre-mi__layout">
        <div className="sobre-mi__visual">
          <div className="sobre-mi__avatar">
            <img src="/logo_negro.png" alt="Logo CdR Reparaciones" />
          </div>
          <div className="sobre-mi__badge">
            <span className="sobre-mi__badge-dot" />
            Disponible para turnos
          </div>
        </div>
        <div className="sobre-mi__text">
          <p className="section-label">Quién soy</p>
          <h2 className="section-title">Sobre mí</h2>
          <p>
            Hola soy Carlos, técnico en reparación de computadoras. Me
            especializo en el diagnóstico y solución de fallas en PC de
            escritorio, notebooks y equipos all-in-one de todas las marcas.
          </p>
          <p>
            Trabajo de forma independiente, lo que me permite ofrecer atención
            personalizada, precios justos y tiempos de respuesta rápidos.
          </p>
          <ul className="sobre-mi__puntos">
            <li>✔ Presupuesto sin cargo</li>
            <li>✔ Garantía en todos los trabajos</li>
            <li>✔ Repuestos originales y compatibles</li>
            <li>✔ Atención a domicilio disponible</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
