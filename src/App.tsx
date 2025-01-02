import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./common/AppLayout";
import ParentForm from "./pages/ParentForm";


function App() {
  return (
    <BrowserRouter>
      <main>
       
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="form" />} />
            <Route path="form" element={<ParentForm />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
