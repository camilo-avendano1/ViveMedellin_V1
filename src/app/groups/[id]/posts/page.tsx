// src/app/groups/[id]/posts/page.tsx
import React from 'react';
import Link from 'next/link';

export default function GroupPosts({ params }: { params: { id: string } }) {
  // Simulación de datos de publicaciones (esto se reemplazará con datos reales más adelante)
  const posts = [
    { id: 1, title: "Primera Publicación", content: "Contenido de la primera publicación." },
    { id: 2, title: "Segunda Publicación", content: "Contenido de la segunda publicación." },
    { id: 3, title: "Tercera Publicación", content: "Contenido de la tercera publicación." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Publicaciones del Grupo {params.id}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <Link href={`/groups/${params.id}/posts/${post.id}`} className="text-blue-600 underline mt-4 inline-block">
                Ver Detalles
              </Link>
            </div>
          ))}
        </div>

        {/* Enlace para regresar a los detalles del grupo */}
        <Link href={`/groups/${params.id}`} className="text-blue-600 underline mt-8 block">
          Volver a los Detalles del Grupo
        </Link>
      </div>
    </div>
  );
}
