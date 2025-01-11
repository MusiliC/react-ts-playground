/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Roles, RoleType } from "./role";
import { Loader } from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(true);

  const role = Roles.Agent;

  const isLoggedIn = true;

  useEffect(() => {
    const fetchedLoggedInUser = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    fetchedLoggedInUser();
  }, []);

  // loading ->  fullPage loading -> spinner

  return (
    <AuthContext.Provider value={{ role, isLoggedIn }}>
      {/* {children} */}{" "}
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          <Loader size={24} className="animate-spin" />
        </div>
      ) : (
        children
      )}
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
