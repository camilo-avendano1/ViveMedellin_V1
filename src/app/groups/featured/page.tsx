// src/app/groups/featured/page.tsx
import React from 'react';
import Link from 'next/link';

export default function FeaturedGroups() {
  // Simulación de datos de grupos destacados (esto se reemplazará con datos reales más adelante)
  const featuredGroups = [
    { id: 1, name: "Exploradores de Medellín", members: 320, description: "Descubre los lugares más increíbles de Medellín con nosotros." },
    { id: 2, name: "Músicos Paisas", members: 450, description: "Conecta con otros músicos de la ciudad y comparte tu talento." },
    { id: 3, name: "Amantes del Café", members: 210, description: "Para los verdaderos amantes del café colombiano." },
    { id: 4, name: "Deportistas Medellín", members: 500, description: "Encuentra personas para hacer deporte y mantenerte activo." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Grupos Destacados
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredGroups.map((group) => (
            <div key={group.id} className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold text-gray-800">{group.name}</h2>
              <p className="text-gray-600">{group.description}</p>
              <p className="text-gray-500 text-sm">Miembros: {group.members}</p>
              <Link href={`/groups/${group.id}`} className="text-blue-600 underline mt-4 inline-block">
                Ver Detalles
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
