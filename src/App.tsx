import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Precios from "./components/Precios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Precios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
