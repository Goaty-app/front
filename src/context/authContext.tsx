"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  saveToken: (token: string) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const saveToken = (newToken: string) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!token, token, saveToken, clearToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
