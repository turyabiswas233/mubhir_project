import React from "react";
import spinArrow from "/icons/spinarrow.svg";
import { Check } from "../icons/Icons";
const PricingPlans = ({ title1, title2 }) => {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title1}
          <br />
          {title2}
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="rounded-2xl bg-heroBg/50 p-8">
            <p className="font-semibold text-xl text-supergray">Monthly Plan</p>
            <p className="text-gray-600 mt-1">
              Perfect for starting your journey
            </p>

            <div className="my-8">
              <span className="text-6xl font-bold text-tBlue">$99</span>
              <span className="text-gray-600 ml-1">/ Month</span>
            </div>

            <button className="btn_transparent w-full mb-10">
              Subscribe to the Monthly Plan
            </button>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-10 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Access SAT 1 and SAT 2 practice questions.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="bg-hpink w-10 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Weekly progress reports to track improvement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-10 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>24/7 support to answer tour questions.</span>
              </li>
            </ul>
          </div>

          {/* Popular Plan */}
          <div className="rounded-2xl bg-tBlue p-8 text-white relative">
            <p className="font-semibold text-xl text-white">Monthly Plan</p>
            <p className="text-indigo-200 mt-1">Best for focused preparation</p>

            <div className="my-8">
              <span className="text-6xl font-bold relative">
                $199
                <span className="absolute -top-4 right-5">
                  <img src={spinArrow} alt={"mark"} />
                </span>
                <div className="absolute -top-3 -right-16 bg-[#F8A9A3] text-[#4F1F1C] font-bold text-xs px-3 py-1 rounded-full rotate-20">
                  Save 15%
                </div>
              </span>
              <span className="text-indigo-200 ml-1">/ Month</span>
            </div>

            <button className="btn_transparent_inv mb-10 w-full">
              Subscribe to the 3-Month Plan
            </button>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-8 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Includes all monthly features.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-8 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>
                  Unlimited full-length mock tests for deeper practice.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-8 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Save 15% compared to the monthly plan.</span>
              </li>
            </ul>
          </div>

          {/* Basic Plan */}
          <div className="rounded-2xl bg-heroBg/50 p-8">
            <p className="font-semibold text-xl text-supergray">6-Month Plan</p>
            <p className="text-gray-600 mt-1">
              Maximuze your results and save big!
            </p>

            <div className="my-8">
              <span className="text-6xl font-bold text-tBlue">$299</span>
              <span className="text-gray-600 ml-1">/ Month</span>
            </div>

            <button className="btn_transparent w-full mb-10">
              Subscribe to the 6-Month Plan
            </button>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-10 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Full access to all platform features.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="bg-hpink w-10 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Exclusive advanced progress insights.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-10 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Priority support for personalized help.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-hpink w-10 h-8 flex items-center justify-center rounded-full">
                  <Check />
                </span>
                <span>Save 25 compared to the monthly plan.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
