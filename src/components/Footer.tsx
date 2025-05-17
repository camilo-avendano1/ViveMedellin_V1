// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Vive Medellín - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
