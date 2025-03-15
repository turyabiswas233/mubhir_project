import { Outlet } from "react-router-dom";
import "./styles/App.css";

import React from "react";
import Footer from "./components/home/Footer";

function App() {
  return (
    <div className="bg-white p-2">
      <div className="px-3 py-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
