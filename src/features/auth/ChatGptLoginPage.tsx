// import React from "react";
// import { useAuth } from "./AuthContext";
// import { useNavigate } from "react-router-dom";

// const LoginPage: React.FC = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Simulate fetching data from backend
//     const fetchedUser = {
//       username: "john_doe",
//       email: "john@example.com",
//       role: "admin", // Replace with the role fetched from backend
//       token: "abcd1234",
//     };

//     login(fetchedUser);

//     // Redirect based on role
//     switch (fetchedUser.role) {
//       case "admin":
//         navigate("/admin");
//         break;
//       case "agent":
//         navigate("/agent");
//         break;
//       case "trustee":
//         navigate("/trustee");
//         break;
//       default:
//         navigate("/unauthorized");
//         break;
//     }
//   };

//   return <button onClick={handleLogin}>Login</button>;
// };

// export default LoginPage;
