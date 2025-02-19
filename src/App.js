import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Activities from "./pages/Activities";
import Blogs from "./pages/Blog";
import Members from "./pages/Members";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
}

export default App;
