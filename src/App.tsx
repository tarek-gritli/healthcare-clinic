import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";

import Login from "@/pages/auth/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/home/Home";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/pages/dashboard/Dashboard";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;
