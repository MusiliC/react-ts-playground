import { BrowserRouter,Route, Routes } from "react-router-dom";
import AppLayout from "./common/AppLayout";
import ParentForm from "./pages/ParentForm";
import TablesPage from "./pages/TablesPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<ParentForm />} />
            <Route path="/tables" element={<TablesPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
