import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./screens/About";
import Hero from "./screens/Hero";
import "./utils/Variables.css";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
