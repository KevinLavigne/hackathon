import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [actionsList, setActionsList] = useState("");

  return (
    <Context.Provider
      value={{
        actionsList,
        setActionsList,
      }}
    >
      {children}
    </Context.Provider>
  );
}
const ExportContext = {
  Context,
  Provider,
};
export default ExportContext;
