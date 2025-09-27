import React from "react";
import { useNavigate } from "react-router-dom";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import "../style/juego.css";

function Juego() {
  const navigate = useNavigate();

  const handleOnAvatarExported = (event) => {
    const avatarUrl = event.data.url;
    console.log("Avatar URL:", avatarUrl);

    // Guardamos el URL para usarlo después
    localStorage.setItem("avatarUrl", avatarUrl);

    // Navegamos a la página de historia
    navigate("/historia");
  };

  return (
    <div className="avatar-container">
      <AvatarCreator
        subdomain="demo" // ⚠️ reemplázalo con tu subdominio de Ready Player Me
        editorConfig={{
          clearCache: true,
          bodyType: "fullbody",
          language: "es",
        }}
        style={{ width: "100%", height: "100%", border: "none" }}
        onAvatarExported={handleOnAvatarExported} // ✅ manejador del evento
      />
    </div>
  );
}

export default Juego;

