import React, { createContext, useState, useEffect } from "react";
import ConvertGoogleSheet from "../services/ConvertGoogleSheet";
import jason from "../data/users.json";

const Context = createContext();

function Provider({ children }) {
  const [actionsList, setActionsList] = useState("");
  const [users, setUsers] = useState([]);

  const actions = ConvertGoogleSheet(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsY9ig9iBPQKlyIXHq0bPzodjWiqdcp4WSIIcxAGtEJ-l4hJsIaoIiH_Tx4TUyFyoHviWrfpS7Wbs2/pub?output=csv"
  );
  useEffect(() => {
    setActionsList(actions);
  }, [actions]);
  useEffect(() => {
    setUsers(jason.user);
  }, [users]);

  return (
    <Context.Provider
      value={{
        actionsList,
        setActionsList,
        users,
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
