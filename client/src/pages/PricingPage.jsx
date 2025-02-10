import React from "react";
import PricingPlans from "../components/partial/Pricing";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

function PricingPage() {
  return (
    <div>
      <Navbar />
      <PricingPlans
        title1={"Choose the Plan That"}
        title2={"Matches Your SAT Goals"}
      />
      <Footer />
    </div>
  );
}

export default PricingPage;
