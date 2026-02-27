"use client";

import { ReactNode, useState } from "react";
import { AppContext } from "./appContext";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        showForm,
        setShowForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
