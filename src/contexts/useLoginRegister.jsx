import React, { createContext, useContext } from "react";

const authContext = createContext();

export default function AuthContextProvider({ children }) {
  return (
    <authContext.Provider value={{ name: "Icaro" }}>
      {children}
    </authContext.Provider>
  );
}

function useNewUser() {
  const data = useContext();

  return data;
}

function useLogin() {
  const data = useContext(authContext);

  return data;
}
