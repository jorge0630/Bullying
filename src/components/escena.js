import { useState } from "react";

export default function Escena({ escenarioActual, avatarUrl }) {
  const [imagenCargada, setImagenCargada] = useState(false);

  const handleLoad = () => {
    setImagenCargada(true);
  };
  return (
    <div className="escenario-container">
      <img
        src={`/img/${escenarioActual}.jpg`}
        alt={`img ${escenarioActual}`}
        className={`fondo-escenario ${imagenCargada ? "loaded" : ""}`}
        onLoad={handleLoad}
      />
      {avatarUrl && <img src={avatarUrl} alt="Tu avatar" className="avatar-jugador" />}

      {escenarioActual === "s1" && (
        <>
          <img src="/img/niñaCaminando.png" alt="Niño" className="personaje personaje-1" />
          <img src="img/niñaCorriendo.png" alt="Niña" className="personaje personaje-2" />
          <img src="/img/niñaGritando.png" alt="Niña" className="personaje personaje-3" />
          <img src="/img/niñaSaludando.png" alt="Niña" className="personaje personaje-4" />
        </>
      )}

      {escenarioActual === "s2" && (
        <>
          <img src="/img/NiñoArt.png" alt="Niño" className="personaje niñoArt" />
        </>
      )}

      {escenarioActual === "s3" && (
        <>
          <img src="/personajes/niño1.png" alt="Niño" className="personaje niño1" />
          <img src="/personajes/niña2.png" alt="Niña" className="personaje niña2" />
        </>
      )}

      {escenarioActual === "s4" && (
        <>
          <img src="/personajes/niño1.png" alt="Niño" className="personaje niño1" />
          <img src="/personajes/niña2.png" alt="Niña" className="personaje niña2" />
        </>
      )}

      {escenarioActual === "s5" && (
        <>
          <img src="/personajes/niño1.png" alt="Niño" className="personaje niño1" />
          <img src="/personajes/niña2.png" alt="Niña" className="personaje niña2" />
        </>
      )}


    </div>
  );
}