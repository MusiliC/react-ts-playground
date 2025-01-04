// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { UserType, RoleType } from "./role";

// interface AuthContextType {
//   user: UserType | null;
//   login: (user: UserType) => void;
//   logout: () => void;
//   isAuthorized: (roles: RoleType[]) => boolean;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<UserType | null>(null);

//   const login = (userData: UserType) => setUser(userData);
//   const logout = () => setUser(null);

//   const isAuthorized = (roles: RoleType[]) => user && roles.includes(user.role);

//   return (
//     <AuthContext.Provider value={{ user, login, logout, isAuthorized }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };
