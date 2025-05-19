// src/app/groups/[id]/page.tsx

import React from 'react';

type Props = {
  params: {
    id: string;
  };
};

export default function GroupPage({ params }: Props) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Hola grupo {params.id}</h1>
    </div>
  );
}
