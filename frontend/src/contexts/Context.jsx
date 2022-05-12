import React, { createContext, useState } from "react";
import ConvertGoogleSheet from "../services/ConvertGoogleSheet";

const Context = createContext();

function Provider({ children }) {
  const [actionsList, setActionsList] = useState("");

  const actions = ConvertGoogleSheet(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsY9ig9iBPQKlyIXHq0bPzodjWiqdcp4WSIIcxAGtEJ-l4hJsIaoIiH_Tx4TUyFyoHviWrfpS7Wbs2/pub?output=csv"
  );
  React.useEffect(() => {
    setActionsList(actions);
  }, [actions]);

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
