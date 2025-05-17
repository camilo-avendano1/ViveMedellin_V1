// src/app/groups/create/page.tsx
import React from 'react';

export default function CreateGroup() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Crear Nuevo Grupo
        </h1>
        
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Nombre del Grupo</label>
            <input type="text" placeholder="Nombre del grupo" className="w-full border p-2 rounded-md" />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Descripción</label>
            <textarea placeholder="Descripción del grupo" className="w-full border p-2 rounded-md"></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Categoría</label>
            <select className="w-full border p-2 rounded-md">
              <option>Deportes</option>
              <option>Música</option>
              <option>Viajes</option>
              <option>Tecnología</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Privacidad</label>
            <select className="w-full border p-2 rounded-md">
              <option>Público</option>
              <option>Privado</option>
            </select>
          </div>

          <button type="submit" className="bg-green-700 text-white w-full py-3 rounded-md hover:bg-green-600">
            Crear Grupo
          </button>
        </form>
      </div>
    </div>
  );
}
