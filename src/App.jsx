import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedOption, setSelectedOption] = useState("about");
  const [lastSelectedOption, setLastSelectedOption] = useState("about");

  const handleNavClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Router> 
      <div className="flex gap-10">
        <NavBar
          handleNavClick={handleNavClick}
          isExpanded={isExpanded}
          selectedOption={selectedOption}
        /> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
