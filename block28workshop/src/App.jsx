import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import Pink from "./components/Pink";
import Purple from "./components/Purple";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/pink">Pink</Link>
          <Link to="/purple">Purple</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/pink" element={<Pink />} />
            <Route path="/purple" element={<Purple />} />
          </Routes>
        </div>
        <footer>
          <Link to="/">Home</Link> |<Link to="/blue">Blue</Link> |
          <Link to="/red">Red</Link> |<Link to="/pink">Pink</Link> |
          <Link to="/purple">Purple</Link>
        </footer>
      </div>
    </>
  );
}

export default App;
