import React, { PropsWithChildren, createContext, useState } from 'react';

import { GlobalState } from '@/types';

export const GlobalContext = createContext<Partial<GlobalState>>({});

interface GlobalContextProviderProps extends PropsWithChildren {}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [open, setOpen] = useState(false);

  const toggleButton = () => {
    setOpen((state) => !state);
  };

  return <GlobalContext.Provider value={{ open, toggle: toggleButton }}>{children}</GlobalContext.Provider>;
};
