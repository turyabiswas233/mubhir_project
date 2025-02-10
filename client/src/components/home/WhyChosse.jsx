import React from "react";
import exam from "/icons/whychoose/exam.svg";
import laptop from "/icons/whychoose/laptop.svg";
import library from "/icons/whychoose/library.svg";
import progress from "/icons/whychoose/progress.svg";
import review from "/icons/whychoose/review.svg";
import test from "/icons/whychoose/test.svg";

function WhyChosse() {
  return (
    <div className="max-w-310 mx-auto">
      <header className="header max-w-xl mx-auto text-center my-20">
        <h2 className="text-center">Why Choose Mubhir?</h2>
        <p className="text-center text-gray-600 font-normal text-xl">
          Choose between customized practice or full-length tests to get the
          most out of your SAT preparation journey
        </p>
      </header>

      <div className="grid grid-cols-3 gap-6 justify-center items-center w-fit p-5 mx-auto">
        <Card
          title={"Realistic Practice Tests"}
          icon={exam}
          description={"Questions designed to reflect the SAT exam format."}
        />
        <Card
          title={"Detailed Feedback"}
          icon={review}
          description={
            "Receive actionable insights after every test to identify and improve your weak areas effectively"
          }
        />
        <Card
          title={"Progress Tracking"}
          icon={progress}
          description={
            "Monitor your improvement with detailed performance reports and see how close you are to your target score"
          }
        />
        <Card
          title={"Mobile-Friendly Platform"}
          icon={laptop}
          description={
            "Study anytime, anywhere, on your phone, tablet, or laptop with Mubhir’s fully responsive design"
          }
        />
        <Card
          title={"Subject Specific Pre"}
          icon={library}
          description={
            "Master SAT 2 subjects like Math, Physics, Chemistry, and Biology with focused practice tailored to each topic"
          }
        />
        <Card
          title={"Customizable Tests"}
          icon={test}
          description={
            "Create personalized tests that target your specific needs, helping you focus on areas that matter most."
          }
        />
      </div>
      <br />
    </div>
  );
}
const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-heroBg rounded-xl px-4 py-12 max-w-96 grid justify-evenly h-full gap-5 mx-auto">
      <img className="mx-auto" src={icon} width={80} height={80} alt={title} />
      <p className="font-semibold text-supergray text-center text-3xl">
        {title}
      </p>
      <p className="font-normal text-midgray text-center text-lg">
        {description}
      </p>
    </div>
  );
};

export default WhyChosse;
