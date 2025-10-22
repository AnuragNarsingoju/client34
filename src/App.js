import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SchoolPage from "./SchoolPageNew";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<SchoolPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
