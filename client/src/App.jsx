import { Outlet } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import "./styles/App.css";

import React from "react";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div>
      <div className="max-w-310 mx-auto">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
