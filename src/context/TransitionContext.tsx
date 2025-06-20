'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

const TransitionContext = createContext<any>(null);

export function useTransition() {
  return useContext(TransitionContext);
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  const fadeTo = (url: string) => {
    setIsFading(true);
    setTimeout(() => {
      router.push(url);
      setIsFading(false);
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
