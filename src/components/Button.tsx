// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      {label}
    </button>
  );
}