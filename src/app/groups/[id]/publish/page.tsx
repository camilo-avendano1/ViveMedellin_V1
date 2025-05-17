// src/app/groups/[id]/publish/page.tsx
import React from 'react';
import Link from 'next/link';

export default function PublishToGroup({ params }: { params: { id: string } }) {
  // Simulación de datos del grupo (esto se reemplazará con datos reales más adelante)
  const groupDetails = {
    id: params.id,
    name: `Grupo ${params.id}`,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Publicar en {groupDetails.name}</h1>

        {/* Formulario de Publicación */}
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Título de la Publicación</label>
            <input type="text" placeholder="Título de la publicación" className="w-full border p-2 rounded-md" />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Contenido</label>
            <textarea placeholder="Escribe el contenido aquí..." className="w-full border p-2 rounded-md"></textarea>
          </div>

          <button type="submit" className="bg-green-700 text-white w-full py-3 rounded-md hover:bg-green-600">
            Publicar
          </button>
        </form>

        {/* Enlace para regresar a los detalles del grupo */}
        <Link href={`/groups/${groupDetails.id}`} className="text-blue-600 underline mt-6 block">
          Volver a los Detalles del Grupo
        </Link>
      </div>
    </div>
  );
}
