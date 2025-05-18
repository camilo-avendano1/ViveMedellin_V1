// src/app/page.tsx
import React from 'react';
import Link from 'next/link';

export default function ExploreGroups() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Explora Grupos en Vive Medellín
        </h1>

        {/* Botones de Acción */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link href="/groups/create" className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600">
            Crear Nuevo Grupo
          </Link>

          <Link href="/groups/featured" className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">
            Ver Grupos Destacados
          </Link>

          <Link href="/notifications" className="bg-orange-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600">
            Ver Notificaciones
          </Link>
        </div>

        {/* Grupos Sugeridos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Aquí podemos insertar componentes de grupo dinámicamente */}
          {[1, 2, 3].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold text-gray-800">Grupo {id}</h2>
              <p className="text-gray-600">Descripción del grupo {id}</p>
              <Link href={`/groups/${id}`} className="text-blue-600 underline mt-4 inline-block">
                Ver Detalles
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
