import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./DashBoard";
import Login from "./Login";
const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default AppRouter;
