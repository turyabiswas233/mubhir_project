import React from "react";
import Navbar from "../home/Navbar";
import heroImage from "/images/hero.png";
function Hero() {
  return (
    <div className="bg-pp pb-32 p-3 rounded-2xl">
      <Navbar />
      <div className="h-auto w-full max-w-310 flex justify-between gap-32 mx-auto px-10">
        <div className="my-auto flex flex-col gap-5 text-left max-w-lg">
          {/* rating */}
          <p className="w-fit ring-1 ring-lightgray font-normal rounded-full p-1 pr-3 bg-white flex items-center">
            <span className="w-fit flex items-center justify-center rounded-full ring-1 ring-lightgray p-2 font-medium text-black mr-2 bg-white text-base">
              ⭐ 4.8/5
            </span>
            <span className="text-deepgray text-sm">
              From more that 1,000 Saudi students
            </span>
          </p>
          <h1 className="leading-14">
            Your SAT Success <br /> Starts Here!
          </h1>
          <p>
            Tailored for Saudi students, Mubhir helps you master SAT 1 & SAT 2
            with expert-designed practice tests, real-time feedback, and
            progress tracking. Prepare smarter, not harder
          </p>
          <button className="btn_default bg-tBlue w-fit">
            Start Free Trial Now
          </button>
        </div>
        <div className="flex justify-end items-center flex-auto">
          <img
            className="rounded-xl h-full w-full max-w-md object-cover"
            src={heroImage}
            width={450}
            height={(450 * 9) / 16}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
