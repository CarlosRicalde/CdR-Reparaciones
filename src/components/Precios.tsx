import "./Precios.css";

const planes = [
  {
    nombre: "Diagnóstico",
    precio: "$19.500",
    desc: "Evaluación completa del equipo e informe de fallas.",
    items: [
      "Revisión de hardware",
      "Revisión de software",
      "Presupuesto de reparación",
    ],
    destacado: false,
    cta: "Solicitar turno",
  },
  {
    nombre: "Reparación",
    precio: "Desde $33.000",
    desc: "Reparación completa con garantía. El presupuesto depende del tipo de reparación.",
    items: [
      "Todo del diagnóstico",
      "Mano de obra incluida",
      "Soporte post-reparación",
    ],
    destacado: true,
    cta: "Consultar precio exacto",
  },
  {
    nombre: "Mantenimiento de PC, Notebook e All in one",
    precio: "$45.000",
    desc: "Limpieza, optimización y puesta a punto de tu equipo.",
    items: ["Limpieza profunda", "Cambio pasta térmica", "Revisión general"],
    destacado: false,
    cta: "Solicitar turno",
  },
];

export default function Precios() {
  return (
    <section className="section precios" id="precios">
      <div className="container">
        <p className="section-label">Inversión</p>
        <h2 className="section-title">Precios</h2>
        <p className="section-subtitle">
          Precios transparentes y sin sorpresas. El presupuesto final depende
          del diagnóstico.
        </p>
        <div className="precios__grid">
          {planes.map((p) => (
            <div
              className={`precios__card ${p.destacado ? "precios__card--destacado" : ""}`}
              key={p.nombre}
            >
              {p.destacado && (
                <span className="precios__badge">Más elegido</span>
              )}
              <h3 className="precios__nombre">{p.nombre}</h3>
              <p className="precios__precio">{p.precio}</p>
              <p className="precios__desc">{p.desc}</p>
              <ul className="precios__items">
                {p.items.map((item) => (
                  <li key={item}>
                    <span className="precios__check">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`btn ${p.destacado ? "btn-primary" : "btn-outline"} precios__btn`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
