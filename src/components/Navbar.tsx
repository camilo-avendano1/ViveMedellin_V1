// src/components/Navbar.tsx
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white py-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Enlace a la Página Principal */}
        <Link href="/" className="text-2xl font-bold hover:text-green-200">
          ViveMedellín
        </Link>

        {/* Menú de Navegación */}
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-green-200">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/groups/create" className="hover:text-green-200">
              Crear Grupo
            </Link>
          </li>
          <li>
            <Link href="/groups/featured" className="hover:text-green-200">
              Grupos Destacados
            </Link>
          </li>
          <li>
            <Link href="/notifications" className="hover:text-green-200">
              Notificaciones
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-green-200">
              Acerca de
            </Link>
          </li>
        </ul>

        {/* Opciones de Autenticación */}
        <div className="flex gap-4">
          <Link href="/auth/login" className="hover:text-green-200">
            Iniciar Sesión
          </Link>
          <Link href="/auth/register" className="hover:text-green-200 bg-white text-green-800 px-4 py-2 rounded-md shadow-lg hover:bg-gray-200">
            Crear Cuenta
          </Link>
        </div>
      </div>
    </nav>
  );
}
