'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const TransitionContext = createContext<any>(null);

export function useTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Oculta el overlay cada vez que cambia la ruta
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('isFading') === 'true') {
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        sessionStorage.removeItem('isFading');
      }, 800);
    } else {
      setIsFading(false);
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('isFading');
      }
    }
  }, [pathname]);

  // Limpieza extra por seguridad
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('isFading');
      }
    };
  }, []);

  const fadeTo = (url: string) => {
    setIsFading(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('isFading', 'true');
    }
    setTimeout(() => {
      router.push(url);
    }, 800); // duración del fade (ms)
  };

  return (
    <TransitionContext.Provider value={{ fadeTo }}>
      {children}
      {isFading && (
        <div className="fixed inset-0 z-50 bg-black opacity-80 animate-fadeOut pointer-events-none" />
      )}
    </TransitionContext.Provider>
  );
}
