import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#0F0E0C",
        color: "#F0EDE6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <span
        style={{
          fontSize: "10px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#C4A882",
          marginBottom: "16px",
        }}
      >
        Erro 404
      </span>
      <h1 className="font-display" style={{ fontSize: "clamp(48px, 10vw, 120px)", lineHeight: 1, marginBottom: "16px" }}>
        404
      </h1>
      <p style={{ fontSize: "16px", color: "rgba(240,237,230,0.6)", marginBottom: "32px", maxWidth: "420px" }}>
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        to="/"
        style={{
          fontSize: "12px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#0F0E0C",
          backgroundColor: "#C4A882",
          padding: "14px 28px",
          borderRadius: "2px",
        }}
      >
        Voltar para o início
      </Link>
    </div>
  );
}
