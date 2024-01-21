import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TermsAndConditions from "./components/TermsAndConditions";
import NotFound from "./components/NotFound";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/not-found" replace={true} />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/what-we-do/:type" element={<WhatWeDo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
