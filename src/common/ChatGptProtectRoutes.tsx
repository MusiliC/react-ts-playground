// import { useAuthContext } from "@/features/auth/AuthContext";
// import { RoleType } from "@/features/auth/role";
// import React from "react";
// import { Navigate } from "react-router-dom";

// interface ProtectedRouteProps {
//   roles: RoleType[];
//   children: React.ReactNode;
// }

// export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
//   roles,
//   children,
// }) => {
//   const { user, isAuthorized } = useAuthContext();

//   if (!user || !isAuthorized(roles)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <>{children}</>;
// };
