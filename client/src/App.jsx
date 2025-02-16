import { Outlet } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import "./styles/App.css";

import React from "react";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div className="bg-white p-3">
      <div className="p-5 bg-pp min-h-screen rounded-2xl ">
        <Navbar />
      </div>
      <div className="p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
