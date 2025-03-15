import React from "react";
import PricingPlans from "../components/partial/Pricing";
import Navbar from "../components/home/Navbar";

function PricingPage() {
  return (
    <div>
      <Navbar />
      <PricingPlans
        title1={"Flexible Pricing for"}
        title2={"Every Learner"}
        extraTitle="Choose the plan that first your goals and budget."
      />
    </div>
  );
}

export default PricingPage;
