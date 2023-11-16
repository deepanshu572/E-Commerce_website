import { createContext, useContext } from "react";
import menu from "../menu";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  return (
    <AppContext.Provider value={{ menu}}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
