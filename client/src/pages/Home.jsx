import Hero from "../components/home/Hero";
import Success from "../components/home/Success";
import Test from "../components/home/Test";
import FullTest from "../components/home/FullTest";
import Review from "../components/home/Review";
import WhyChosse from "../components/home/WhyChosse";
import BoostCard from "../components/home/BoostCard";
import FAQ from "../components/home/FAQ";
import PricingPlans from "../components/partial/Pricing"; 

function HomePage() {
  return (
    <>
      <Hero />
      <div className="max-w-310 w-full mx-auto px-5">
        <Success />
        <Test />
        <FullTest />
      </div>
      <Review />
      <WhyChosse />
      <PricingPlans
        title1={"Flexible Pricing for"}
        title2={"Every Learner"}
        extraTitle={"Choose the plan that fits your goals and budget."}
      />
      <FAQ />
      <BoostCard />
    </>
  );
}

export default HomePage;
