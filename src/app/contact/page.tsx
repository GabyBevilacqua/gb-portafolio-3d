'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
    const router = useRouter();
  return (
    <div className="p-10 text-black">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p>Esta sección contiene información personal y profesional...</p>
        <button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => router.push('/')}
        >
            Volver al inicio
        </button>
    </div>
  );
}