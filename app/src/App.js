import React from "react";
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Notes from "./context/notes/Notes";

function App() {
  return (
    <>
      <Notes>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </Notes>
    </>
  );
}

export default App;
