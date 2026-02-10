import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
