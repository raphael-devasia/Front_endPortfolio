import React, { useState } from "react";
import { BrowserRouter} from "react-router-dom";
import {
  Navbar,
  Sidebar,
  Footer,
  Hero,
  FeaturedProducts,
  Services,
  Contact,
} from "./components";

import About from "./components/About";

function App() {
  
  
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <FeaturedProducts />
      <Services />
      <Contact />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
