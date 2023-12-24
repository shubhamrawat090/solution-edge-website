import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import TestingServices from "./components/WhatWeDo/TestingServices";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/testing-services" element={<TestingServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
