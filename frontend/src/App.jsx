import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import Test from "./components/test";
import Banner from "./components/nav/banner";

function App() {
  return (
    <Router>
      <Nav />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
