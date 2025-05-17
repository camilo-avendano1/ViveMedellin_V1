// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-red-800 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Página no encontrada</p>
      <Link href="/" className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600">
        Volver al Inicio
      </Link>
    </div>
  );
}
