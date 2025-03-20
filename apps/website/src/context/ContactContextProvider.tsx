import React, { PropsWithChildren, createContext, useEffect, useState } from 'react';

import { ContactState } from '@/types';

export const ContactContext = createContext<Partial<ContactState>>({});

interface ContactContextProviderProps extends PropsWithChildren {}

export const ContactContextProvider = ({ children }: ContactContextProviderProps) => {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleButton = () => {
    setOpen((state) => !state);
  };

  useEffect(() => {
    if (!isSuccess) return;

    const timeout = setTimeout(() => {
      setOpen(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <ContactContext.Provider value={{ open, isSuccess, toggle: toggleButton, setIsSuccess }}>
      {children}
    </ContactContext.Provider>
  );
};
