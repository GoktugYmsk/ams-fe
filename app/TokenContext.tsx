"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface TokenContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  handleLogout: () => void;
}

export const TokenContext = createContext<TokenContextProps | undefined>(
  undefined,
);

export const TokenProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = sessionStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };

  return (
    <TokenContext.Provider value={{ token, setToken, handleLogout }}>
      {children}
    </TokenContext.Provider>
  );
};
