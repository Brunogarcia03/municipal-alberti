// components/EmailTemplate.jsx
import * as React from "react";

export const EmailTemplate = ({ email, name, subject, content }) => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: "1.6",
        color: "#333",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/dshbxjhtw/image/upload/v1758062166/ICON_f25199ec4c.png"
          alt="Municipalidad de Alberti"
          style={{ maxWidth: "30px", marginRight: "10px" }}
        />
        <h1 style={{ color: "#00438b", fontSize: "24px", margin: 0 }}>
          Municipalidad de Alberti
        </h1>
      </div>

      {/* Encabezado */}
      <h2 style={{ color: "#00438b", marginBottom: "10px" }}>
        Nuevo mensaje desde el sitio web
      </h2>
      <p style={{ fontSize: "14px", margin: "0 0 20px" }}>
        Has recibido un mensaje a través del formulario de contacto de la
        <strong style={{ color: "#00438b" }}> Municipalidad de Alberti</strong>.
      </p>

      {/* Datos del remitente */}
      <div
        style={{
          borderLeft: "4px solid #00438b",
          paddingLeft: "12px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: "6px 0" }}>
          <strong style={{ color: "#00438b" }}>Nombre:</strong> {name}
        </p>
        <p style={{ margin: "6px 0" }}>
          <strong style={{ color: "#00438b" }}>Email:</strong> {email}
        </p>
        <p style={{ margin: "6px 0" }}>
          <strong style={{ color: "#00438b" }}>Asunto:</strong> {subject}
        </p>
      </div>

      {/* Contenido */}
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px 20px",
          marginBottom: "25px",
        }}
      >
        <h3 style={{ color: "#00438b", marginTop: 0 }}>Mensaje:</h3>
        <p style={{ margin: 0, whiteSpace: "pre-line" }}>{content}</p>
      </div>

      {/* Footer */}
      <footer
        style={{
          fontSize: "12px",
          textAlign: "center",
          color: "#666",
          borderTop: "1px solid #eee",
          paddingTop: "15px",
        }}
      >
        Este correo fue generado automáticamente desde el portal web de la{" "}
        <span style={{ color: "#00438b", fontWeight: "bold" }}>
          Municipalidad de Alberti
        </span>
        .
      </footer>
    </div>
  );
};
