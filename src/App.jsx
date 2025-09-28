import "./App.css";
import Login from "./components/Login";
import StudentDashboard from "./dashboards/student";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
