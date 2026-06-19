import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./css/App.css";

import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/error";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 1. Redirect the blank root path "/" straight to your login page */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
