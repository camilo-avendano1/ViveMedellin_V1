// src/app/about/page.tsx
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Sobre ViveMedellín
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          ViveMedellín es una plataforma para conectar a personas con intereses similares, 
          fomentar nuevas amistades y fortalecer las comunidades en Medellín. Aquí puedes crear 
          y unirte a grupos, compartir tus ideas, descubrir nuevas experiencias y explorar todo 
          lo que esta vibrante ciudad tiene para ofrecer.
        </p>

        <h2 className="text-2xl font-bold text-green-700 mb-4">¿Qué Puedes Hacer en ViveMedellín?</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Explorar y unirte a grupos con personas que comparten tus intereses.</li>
          <li>Crear tus propios grupos y construir comunidades únicas.</li>
          <li>Publicar contenido, eventos y experiencias para compartir con otros.</li>
          <li>Recibir notificaciones sobre lo que más te importa.</li>
        </ul>

        <h2 className="text-2xl font-bold text-green-700 mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-700 mb-6">
          Nuestra misión es conectar personas y comunidades en Medellín, promoviendo la colaboración,
          el intercambio de ideas y la creación de vínculos significativos.
        </p>

        <h2 className="text-2xl font-bold text-green-700 mb-4">Únete a la Comunidad</h2>
        <p className="text-lg text-gray-700 mb-6">
          No importa si eres nuevo en Medellín o has vivido aquí toda tu vida, siempre hay algo nuevo
          por descubrir y personas increíbles por conocer. ¡Únete a ViveMedellín y sé parte de esta 
          gran comunidad!
        </p>

        <Link href="/" className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
