import { useEffect } from "react";

export default function CalendlyBadge() {
  useEffect(() => {
    const head = document.querySelector("head");

    // Cargar CSS de Calendly
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    head.appendChild(link);

    // Cargar JS de Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/ferminpacheco87/30min",
          text: "Agendar una reunión",
          color: "#097333",         // Verde claro
          textColor: "#ffffff",
          branding: false
        });
      }
    };
    head.appendChild(script);
  }, []);

  return null; // No renderiza nada en el DOM directamente
}
