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

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Carrusel />
              <Nosotros />
              <MisionVision />
              <Contacto />
              <Footer />
            </>
          }
        />

        {/* Ruta del juego */}
        <Route path="/juego" element={<Juego />} />
        <Route path="/historia" element={<Historia />} />
      </Routes>

      
    </Router>
  );
}

export default App;
