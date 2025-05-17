// src/app/auth/login/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Iniciar Sesión</h1>

      <form className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-96">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Correo Electrónico</label>
          <input type="email" placeholder="Correo electrónico" className="w-full border p-2 rounded-md" />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
          <input type="password" placeholder="Contraseña" className="w-full border p-2 rounded-md" />
        </div>

        <button type="submit" className="bg-green-700 text-white w-full py-3 rounded-md hover:bg-green-600">
          Iniciar Sesión
        </button>

        <p className="text-center text-gray-600 mt-4">
          ¿No tienes una cuenta? <Link href="/auth/register" className="text-blue-600 underline">Regístrate</Link>
        </p>
      </form>
    </div>
  );
}
