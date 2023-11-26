import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactUs from "./components/ContactUs";
import TestingServices from "./components/WhatWeDo/TestingServices";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/testing-services" element={<TestingServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
