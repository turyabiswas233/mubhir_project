import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
const PricingPlans = ({ title1, title2, extraTitle = "" }) => {
  return (
    <section className="py-16 px-4 md:px-6 bg-ps rounded-xl">
      <div className="mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">{title1}</span>
          <br />
          <span className="text-white">{title2}</span>
        </h1>
        {extraTitle && (
          <p className="text-lg text-center mb-8 text-white">{extraTitle}</p>
        )}

        <div className="flex flex-wrap flex-col lg:flex-row justify-center gap-6 mx-auto w-fit">
          <PriceCard
            title="Monthly Plan"
            subTitle="Perfect for starting your journey"
            price="99"
            tipsList={[
              "Access SAT 1 and SAT 2 practice questions.",
              "Weekly progress reports to track improvement.",
              "24/7 support to answer your questions.",
            ]}
            buttonTitle={"Start Monthly Plan"}
          />

          {/* Popular Plan */}
          <PriceCard
            title="3 months Plan"
            subTitle="Perfect for starting your journey"
            price="199"
            tipsList={[
              "Access SAT 1 and SAT 2 practice questions.",
              "Weekly progress reports to track improvement.",
              "24/7 support to answer your questions.",
            ]}
            hasOffer={true}
            offer="Save 15%"
            buttonTitle={"Start 3 months Plan"}
          />

          <PriceCard
            title="6 Months Plan"
            subTitle="Perfect for starting your journey"
            price="299"
            tipsList={[
              "Access SAT 1 and SAT 2 practice questions.",
              "Weekly progress reports to track improvement.",
              "24/7 support to answer your questions.",
            ]}
            buttonTitle={"Start 6 Months Plan"}
          />
          <PriceCard
            title="Yearly Plan"
            subTitle="Perfect for long-term commitment"
            price="399"
            tipsList={[
              "Access SAT 1 and SAT 2 practice questions.",
              "Weekly progress reports to track improvement.",
              "24/7 support to answer your questions.",
            ]}
            buttonTitle={"Start Yearly Plan"}
          />
        </div>
      </div>
      <p className="text-center mt-4 text-white font-medium flex items-center gap-2 justify-center">
        See more pricing plan <FaArrowRight />
      </p>
    </section>
  );
};

const PriceCard = ({
  title,
  subTitle,
  price,
  tipsList,
  hasOffer = false,
  offer,
  buttonTitle,
}) => {
  return (
    <div className="rounded-2xl flex flex-col justify-between bg-white shadow-2xl shadow-pp/10 p-8">
      <p className="font-semibold text-xl text-supergray">
        {title}
        {hasOffer && (
          <span className="float-right text-xs text-white bg-pp px-3 py-1 rounded-full">
            {offer}
          </span>
        )}
      </p>
      <p className="text-gray-600 mt-1">
        {subTitle || "Perfect for starting your journey"}
      </p>

      <div>
        <span className="text-5xl font-bold text-pp">{price}</span>
        <span className="text-gray-600 ml-1 text-2xl"> SAR</span>
      </div>

      <p className="w-full">Per user per month</p>
      <hr className="border border-[#d9d9d9]" />
      <ul className="space-y-4 my-6">
        {tipsList?.map((tl) => (
          <li className="flex-nowrap flex gap-2" key={tl}>
            <div className="bg-pp text-white w-9 h-8 p-1 flex items-center justify-center rounded-full text-2xl">
              <MdCheck size={"1em"} />
            </div>
            <span className="float-right">{tl}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="ring-2 ring-pp rounded-full text-pp font-medium px-6 py-3 w-full
     text-center"
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default PricingPlans;
