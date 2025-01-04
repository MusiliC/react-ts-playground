import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./common/AppLayout";
import ParentForm from "./pages/ParentForm";
import TablesPage from "./pages/TablesPage";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./features/auth/AuthContext";
import ProtectedRoute from "./common/ProtectedRoute";
import Admin from "./features/auth/Admin";
import AdminDashboard from "./features/auth/AdminDashboard";
import Trustee from "./features/auth/Trustee";
import Agent from "./features/auth/Agent";
import AgentDashboard from "./features/auth/AgentDashboard";
import TrusteeDashboard from "./features/auth/TrusteeDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/auth" element={<AuthPage />} ></Route>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<ParentForm />} />
              <Route path="/tables" element={<TablesPage />} />

              {/* Admin Only Route */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute roles={["admin"]}>
                    <Admin />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<AdminDashboard />} />
              </Route>

              {/* Trustee Only Route */}
              <Route
                path="/trustee"
                element={
                  <ProtectedRoute roles={["trustee"]}>
                    <Trustee />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<TrusteeDashboard />} />
              </Route>

              {/* Agents Only Route */}
              <Route
                path="/agent"
                element={
                  <ProtectedRoute roles={["agent"]}>
                    <Agent />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<AgentDashboard />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
