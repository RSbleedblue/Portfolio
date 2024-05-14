import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedOption, setSelectedOption] = useState("about");

  const handleNavClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelection = (opt) => {
    setSelectedOption(opt);
  };

  return (
    <Router>
      <div className="flex gap-10">
        <div className="fixed">
          <NavBar
            handleNavClick={handleNavClick}
            isExpanded={isExpanded}
            selectedOption={selectedOption}
            handleSelection={handleSelection}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home isExpanded={isExpanded} />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;