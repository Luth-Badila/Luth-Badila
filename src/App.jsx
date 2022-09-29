import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Business from "./components/Business";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Portofolio from "./components/Portofolio";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Stats />
              </div>
            }
          />
          <Route
            path="/business"
            element={
              <div>
                <Business />
              </div>
            }
          />
          <Route
            path="/portofolio"
            element={
              <div>
                <Portofolio />
              </div>
            }
          />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
};

export default App;
