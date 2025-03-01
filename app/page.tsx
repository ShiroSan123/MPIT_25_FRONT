"use client";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LogAndReg from "./pages/LogAndReg";
import ChooseAuth from "./pages/ChooseAuth";
import News from "./pages/News";
import Employees from "./pages/Employees";
import Events from "./pages/Events";
import Logout from "./pages/Logout";
import "./globals.css";
import AdminPage from "./pages/Admin";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/LogAndReg" element={<LogAndReg />} />
        <Route path="/ChooseAuth" element={<ChooseAuth />} />
        <Route path="/News" element={<News />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
