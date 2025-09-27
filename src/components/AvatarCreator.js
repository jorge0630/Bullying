// src/components/AvatarCreator.js
import React from "react";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";

function AvatarCreatorComponent() {
  return (
    <div style={{ height: "600px", width: "100%" }}>
      <AvatarCreator
        subdomain="demo" 
        editorConfig={{
          language: "es",       // Español
          bodyType: "fullbody", // Puede ser "halfbody" o "fullbody"
          quickStart: true,     // Arranca con selección rápida
          clearCache: true,     // No guarda el avatar anterior
        }}
        onAvatarExported={(event) => {
          console.log("Avatar exportado:", event.data);
        }}
        onUserSet={(event) => {
          console.log("Usuario listo:", event.data);
        }}
      />
    </div>
  );
}

export default AvatarCreatorComponent;
