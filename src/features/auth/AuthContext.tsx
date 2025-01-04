/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";
import { Roles, RoleType } from "./role";


type AuthContextProps = {
  children: ReactNode;
};

type AuthUser = {
  role: RoleType;
  isLoggedIn: boolean;
};


 // Todo -> Real world scenario
// interface AuthContextType {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
//   isAuthorized: (roles: Role[]) => boolean;
// }

export const AuthContext = createContext<AuthUser | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const role = Roles.Admin;

  const isLoggedIn = true;

  return (
    <AuthContext.Provider value={{ role, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const myAuthContext = useContext(AuthContext);
  if (myAuthContext === null) {
    throw new Error("Auth Context used outside provider");
  }
  return myAuthContext;
}
