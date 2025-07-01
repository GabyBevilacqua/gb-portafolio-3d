'use client';
import Link from 'next/link';
import { useTransition } from '@/context/TransitionContext';

const sections = [
  { label: 'Sobre mí', route: '/about' },
  { label: 'Proyectos', route: '/projects' },
  { label: 'Estudios', route: '/studies' },
  { label: 'Arte', route: '/art' },
  { label: 'Contacto', route: '/contact' },
];

export default function Navbar() {
  const { fadeTo } = useTransition();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent text-black flex justify-center gap-6 font-semibold">
      {sections.map((sec, i) => (
        <button
          key={i}
          onClick={() => fadeTo(sec.route)}
          className="hover:underline bg-transparent border-none cursor-pointer focus:outline-none"
        >
          {sec.label}
        </button>
      ))}
    </nav>
  );
}
// Este componente es la barra de navegación que se muestra en la parte superior de la pantalla