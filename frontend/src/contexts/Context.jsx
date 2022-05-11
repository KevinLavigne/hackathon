import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);

  return (
    <PanierContext.Provider
      value={{
        state,
        setState,
        state2,
        setState2,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
}
const ExportContext = {
  Context,
  Provider,
};
export default ExportContext;
