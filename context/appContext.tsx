"use client";

import { createContext } from "react";

export interface AppContextType {
  showForm: boolean;
  setShowForm: (showForm: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
