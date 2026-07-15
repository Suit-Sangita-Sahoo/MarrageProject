import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Gallery from "./Pages/Galery";
import Family from "./Pages/Family";
import Venue from "./Pages/Venue";
import RSVP from "./Pages/RSPV";
import Blessings from "./Pages/Blessing";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/events" element={<Events />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/family" element={<Family />} />

          <Route path="/venue" element={<Venue />} />

          <Route path="/rsvp" element={<RSVP />} />

          <Route path="/blessings" element={<Blessings />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* Footer will appear on all pages */}
        <Footer />

      </BrowserRouter>
    );
  }
}

export default App;