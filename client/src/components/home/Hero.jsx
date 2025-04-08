import React from "react";
import heroImage from "/images/hero.png";
import Navbar from "./Navbar";
function Hero() {
  return (
    <div className="bg-pp p-3 rounded-2xl">
      <Navbar />

      <div className="h-auto w-full max-w-310 grid min-lg:grid-cols-2 justify-between gap-28 mx-auto p-5 min-lg:p-10 ">
        <div className="my-auto flex flex-col gap-5 text-left max-w-lg text-white">
          {/* rating */}
          <p className="w-fit ring-1 ring-lightgray font-normal rounded-full p-1 pr-3 bg-white flex items-center">
            <span className="w-fit flex items-center justify-center rounded-full ring-1 ring-lightgray p-2 font-medium text-black mr-2 bg-white text-base">
              ⭐ 4.8/5
            </span>
            <span className="text-deepgray text-sm">
              From more that 1,000 Saudi students
            </span>
          </p>
          <h1 className="leading-14 ">
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
        <div>
          <img
            className="rounded-xl h-auto w-auto max-lg:mx-auto object-cover aspect-auto"
            src={heroImage}
            width={350}
            height={(350 * 9) / 16}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
