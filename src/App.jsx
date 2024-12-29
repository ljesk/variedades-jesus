import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/Home/Home";
import Products from "./sections/Products/Products";
import Location from "./sections/Location/Location";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
