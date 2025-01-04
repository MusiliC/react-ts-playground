// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
// import { ProtectedRoute } from "./ProtectedRoute";
// import AdminPage from "./pages/AdminPage";
// import AgentPage from "./pages/AgentPage";
// import TrusteePage from "./pages/TrusteePage";
// import UnauthorizedPage from "./pages/UnauthorizedPage";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute roles={["admin"]}>
//                 <AdminPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/agent"
//             element={
//               <ProtectedRoute roles={["agent"]}>
//                 <AgentPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/trustee"
//             element={
//               <ProtectedRoute roles={["trustee"]}>
//                 <TrusteePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/unauthorized" element={<UnauthorizedPage />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
