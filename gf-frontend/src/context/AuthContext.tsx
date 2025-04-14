import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

type User = {
  id: string;
  role: "admin" | "cliente";
};

type AuthContextType = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        setUser({
          id: decodedToken.id,
          role: decodedToken.role,
        });
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
        setUser(null);
      }
    }
  }, [token]);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
