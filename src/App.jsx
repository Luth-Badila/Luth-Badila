import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Business from "./components/Business";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import NotFound from "./components/NotFound";
import Success from "./components/Success";
import Cv from "./components/Cv";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
                <Testimonials />
              </div>
            }
          />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
