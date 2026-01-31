'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationState {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const NavigationContext = createContext<NavigationState | undefined>(undefined);

export function NavigationStoreProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState('inicio');

  return (
    <NavigationContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationStore() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationStore must be used within NavigationStoreProvider');
  }
  return context;
}