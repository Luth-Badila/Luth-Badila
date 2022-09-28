import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Business from "./components/Business";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-red h-[83.6vh]">
                <Hero />
                <Stats />
              </div>
            }
          />
          <Route
            path="/business"
            element={
              <div className="bg-red px-4 h-[83.6vh]">
                <Business />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
