import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import WhatWeDo from "./pages/WhatWeDo";
import { NavbarContextProvider } from "./context/NavbarContext";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={<Navigate to="/not-found" replace={true} />}
          />
          <Route path="not-found" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/what-we-do/:type" element={<WhatWeDo />} />
        </Routes>
        <Footer />
      </NavbarContextProvider>
    </>
  );
}

export default App;
