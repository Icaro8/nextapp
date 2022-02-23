import React, { createContext, useContext, useState } from "react";

const ResponseContext = createContext();

export default function ContextResponse({ children }) {
  const [selected, setSelected] = useState();

  return (
    <ResponseContext.Provider value={{ selected, setSelected }}>
      {children}
    </ResponseContext.Provider>
  );
}

export function useQuestion() {
  const data = useContext(ResponseContext);

  return data;
}
