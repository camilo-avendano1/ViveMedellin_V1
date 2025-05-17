// src/app/notifications/page.tsx
import React from 'react';
import Link from 'next/link';

export default function Notifications() {
  // Simulación de datos de notificaciones (esto se reemplazará con datos reales más adelante)
  const notifications = [
    { id: 1, message: "Nuevo miembro en tu grupo 'Exploradores de Medellín'", groupId: 1 },
    { id: 2, message: "Nueva publicación en 'Músicos Paisas'", groupId: 2 },
    { id: 3, message: "Evento creado en 'Amantes del Café'", groupId: 3 },
    { id: 4, message: "Alguien comentó tu publicación en 'Deportistas Medellín'", groupId: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 mb-8">Notificaciones</h1>

        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="bg-white rounded-lg shadow-lg p-4">
              <p className="text-gray-800">{notification.message}</p>
              <Link href={`/groups/${notification.groupId}`} className="text-blue-600 underline mt-4 inline-block">
                Ver Detalles del Grupo
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
