import { createContext } from "react";
import useTasks from "../hooks/useTasks";
const { VITE_API_URL } = import.meta.env;

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const taskData = useTasks();

  return (
    <GlobalContext.Provider value={{ ...taskData }}>
      {children}
    </GlobalContext.Provider>
  );
}
