"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface PreloaderContextValue {
  isComplete: boolean;
  setComplete: () => void;
}

const PreloaderContext = createContext<PreloaderContextValue>({
  isComplete: false,
  setComplete: () => { },
});

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <PreloaderContext.Provider value={{ isComplete, setComplete: () => setIsComplete(true) }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  return useContext(PreloaderContext);
}
