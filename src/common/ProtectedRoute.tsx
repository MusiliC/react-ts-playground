import { useAuthContext } from "@/features/auth/AuthContext";
import { RoleType } from "@/features/auth/role";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  roles?: RoleType[];
  children: React.ReactNode;
}

// protected Guard, 

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
  const { role, isLoggedIn } = useAuthContext();

  console.log({ role, isLoggedIn, roles });

  if (!isLoggedIn) return <Navigate to="/auth" />;
  console.log("Inside protected routes for this role " + roles);

  if (!roles || roles.length === 0) return <>{children}</>;

  return <>{roles.includes(role) ? children : <h1>Not Authorized </h1>}</>;
};

export default ProtectedRoute;
