// src/app/groups/[id]/page.tsx
import React from 'react';
import Link from 'next/link';

export default function GroupDetails({ params }: { params: { id: string } }) {
  // Simulación de datos del grupo (esto se reemplazará con datos reales más adelante)
  const groupDetails = {
    id: params.id,
    name: `Grupo ${params.id}`,
    description: "Un grupo increíble para personas con intereses similares.",
    members: 320,
    posts: 50,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-4">{groupDetails.name}</h1>
        <p className="text-gray-700 mb-4">{groupDetails.description}</p>
        <p className="text-gray-500 mb-8">Miembros: {groupDetails.members} | Publicaciones: {groupDetails.posts}</p>

        {/* Botones de Acción */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href={`/groups/${groupDetails.id}/join`} className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600">
            Unirse al Grupo
          </Link>

          <Link href={`/groups/${groupDetails.id}/publish`} className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
            Publicar en el Grupo
          </Link>

          <Link href={`/groups/${groupDetails.id}/posts`} className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600">
            Ver Publicaciones
          </Link>
        </div>

        {/* Sección de Publicaciones Recientes */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Publicaciones Recientes</h2>
          <ul>
            <li>
              <Link href={`/groups/${groupDetails.id}/posts?post=1`} className="text-blue-600 underline">
                Publicación 1
              </Link>
            </li>
            <li>
              <Link href={`/groups/${groupDetails.id}/posts?post=2`} className="text-blue-600 underline">
                Publicación 2
              </Link>
            </li>
            <li>
              <Link href={`/groups/${groupDetails.id}/posts?post=3`} className="text-blue-600 underline">
                Publicación 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
