import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./common/AppLayout";
import ParentForm from "./pages/ParentForm";
import TablesPage from "./pages/TablesPage";
import AuthPage from "./pages/AuthPage";
import { AuthProvider } from "./features/auth/AuthContext";
import ProtectedRoute from "./common/ProtectedRoute";
import Admin from "./features/auth/Admin";
import AdminDashboard from "./features/auth/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<ParentForm />} />
              <Route path="/tables" element={<TablesPage />} />
              <Route path="/auth" element={<AuthPage />} />

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
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
