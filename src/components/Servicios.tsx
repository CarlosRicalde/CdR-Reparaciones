import "./Servicios.css";

const servicios = [
  {
    icon: "🖥️",
    titulo: "PC de escritorio",
    desc: "Diagnóstico, limpieza, cambio de componentes, formateo y optimización de rendimiento.",
  },
  {
    icon: "💻",
    titulo: "Notebooks",
    desc: "Reparación de pantallas, teclados, bisagras, conectores de carga y placa madre.",
  },
  {
    icon: "🖱️",
    titulo: "All in One",
    desc: "Servicio técnico especializado para equipos all-in-one de todas las marcas.",
  },
  {
    icon: "❄️",
    titulo: "Mantenimiento",
    desc: "Limpieza profunda, cambio de pasta térmica y optimización del sistema para mayor vida útil.",
  },
  {
    icon: "🛠️",
    titulo: "Armado de PC",
    desc: "Armado de PC basica, de oficina o gamer de gama alta, garantizamos un cableado prolijo y configuracion inicial (BIOS y Sistema Operativo)",
  },
  {
    icon: "📦",
    titulo: "Instalación de software",
    desc: "Instalación de Windows, drivers, programas y configuración completa del equipo.",
  },
];

export default function Servicios() {
  return (
    <section className="section servicios" id="servicios">
      <div className="container">
        <p className="section-label">Lo que hago</p>
        <h2 className="section-title">Servicios</h2>
        <p className="section-subtitle">
          Atención personalizada para todo tipo de problema técnico, con
          repuestos de calidad y garantía incluida.
        </p>
        <div className="servicios__grid">
          {servicios.map((s) => (
            <div className="servicios__card" key={s.titulo}>
              <span className="servicios__icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3 className="servicios__card-title">{s.titulo}</h3>
              <p className="servicios__card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
