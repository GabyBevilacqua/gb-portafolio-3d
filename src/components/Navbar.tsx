'use client';
import Link from 'next/link';

const sections = ['Sobre mí', 'Proyectos', 'Estudios', 'Arte', 'Contacto'];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent text-black flex justify-center gap-6 font-semibold">
      {sections.map((sec, i) => (
        <a key={i} href={`#${sec.toLowerCase()}`} className="hover:underline">
          {sec}
        </a>
      ))}
    </nav>
  );
}
// Este componente es la barra de navegación que se muestra en la parte superior de la pantalla