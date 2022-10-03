import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Business from "./components/Business";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import FeedbackCard from "./components/FeedbackCard";
import { feedback } from "./constants";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
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
            path="/whymakewebsite"
            element={
              <div>
                <Business />
                <FeedbackCard feedback={feedback} />
              </div>
            }
          />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
