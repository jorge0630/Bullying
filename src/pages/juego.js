import React from "react";
import { useNavigate } from "react-router-dom";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import "../style/juego.css";

function Juego() {
  const navigate = useNavigate();

  const handleOnAvatarExported = (event) => {
    const avatarUrl = event.data.url;
    console.log("Avatar URL:", avatarUrl);

    localStorage.setItem("avatarUrl", avatarUrl);
    navigate("/historia");
  };

  return (
    <div className="game-container">
      {/* Botón Volver */}
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Volver
      </button>

      {/* Título gamer */}
      <h1 className="game-title neon-text">Crea tu avatar</h1>

      {/* Avatar Creator con marco */}
      <div className="avatar-box">
        <AvatarCreator
          subdomain="conectados-contra-el-bullying" //  reemplázalo con tu subdominio de Ready Player Me
          editorConfig={{
            clearCache: true,
            bodyType: "fullbody",
            language: "es",
          }}
          style={{ width: "100%", height: "100%", border: "none" }}
          onAvatarExported={handleOnAvatarExported}
        />
      </div>

      {/* Instrucciones */}
      <p className="game-instructions">
        Diseña tu personaje y prepárate para la aventura 🎮
      </p>
    </div>
  );
}

export default Juego;
