import React, { useEffect, createContext, useRef } from "react";

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const ref = useRef({});
  useEffect(() => {});
  return (
    <ScrollContext.Provider value={ref}>{children}</ScrollContext.Provider>
  );
}
export default ScrollContext;
