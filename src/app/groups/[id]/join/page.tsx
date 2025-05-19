// src/app/groups/[id]/join/page.tsx

import React from 'react';
import Link from 'next/link';

type PageProps = {
  params: {
    id: string;
  };
};

export default function JoinGroup({ params }: PageProps) {
  // Simulación de datos del grupo (esto se reemplazará con datos reales más adelante)
  const groupDetails = {
    id: params.id,
    name: `Grupo ${params.id}`,
    description: "Un grupo increíble para personas con intereses similares.",
    members: 320,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Unirse al {groupDetails.name}
        </h1>
        <p className="text-gray-700 mb-4">{groupDetails.description}</p>
        <p className="text-gray-500 mb-8">
          Miembros Actuales: {groupDetails.members}
        </p>

        {/* Botón para unirse al grupo */}
        <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 mb-4">
          Unirse al Grupo
        </button>

        {/* Enlace para regresar a los detalles del grupo */}
        <Link href={`/groups/${groupDetails.id}`} className="text-blue-600 underline">
          Volver a los Detalles del Grupo
        </Link>
      </div>
    </div>
  );
}
