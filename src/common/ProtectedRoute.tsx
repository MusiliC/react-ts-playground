import { RoleType } from "@/features/auth/role";


interface ProtectedRouteProps {
  roles?: RoleType[];
  children: React.ReactNode;
}

const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {
   console.log("Inside protected routes for this role " + roles);

  return children;
};

export default ProtectedRoute;
