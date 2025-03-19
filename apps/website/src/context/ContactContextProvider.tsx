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

  const onSuccess = () => {
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setOpen(false);
        setIsSuccess(false);
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <ContactContext.Provider value={{ open, isSuccess, toggle: toggleButton, onSuccess }}>
      {children}
    </ContactContext.Provider>
  );
};
