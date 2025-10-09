import './App.css';
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Carrusel from "./components/carrusel";
import Nosotros from "./components/nosotros";
import MisionVision from "./components/misionVision";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import Juego from "./pages/juego";
import Historia from './pages/historia';
import Politica from './pages/politica';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  // 🔹 Rutas donde NO se mostrará el Navbar
  const sinNavbar = ["/juego", "/politica"]; 

  // 🔹 Rutas donde NO se mostrará el Footer
  const sinFooter = ["/juego", "/politica", "/historia"]; 

  const ocultarNavbar = sinNavbar.includes(location.pathname);
  const ocultarFooter = sinFooter.includes(location.pathname);

  return (
    <>
      {/* ✅ Navbar solo si la ruta no está en sinNavbar */}
      {!ocultarNavbar && <Navbar />}

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Carrusel />
              <Nosotros />
              <MisionVision />
              <Contacto />
            </>
          }
        />

        {/* Páginas individuales */}
        <Route path="/juego" element={<Juego />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/politica" element={<Politica />} />
      </Routes>

      {/* ✅ Footer solo si la ruta no está en sinFooter */}
      {!ocultarFooter && <Footer />}
    </>
  );
}

export default App;

