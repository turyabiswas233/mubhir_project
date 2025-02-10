import React from "react";
import bp from "/images/BoostPerson.png";
function BoostCard() {
  return (
    <div className="px-16 py-24 bg-white flex items-center justify-center">
      <div className="bg-tBlue rounded-4xl w-full h-auto p-10 flex items-center justify-evenly max-w-310 mx-auto relative overflow-hidden">
        <div className="grid gap-5">
          <p className="font-semibold text-5xl text-white w-auto md:w-3/5">
            Ready to Boost Your SAT Score?
          </p>

          <div className="flex gap-5">
            <button className="btn_invert">Start Free Trial Now</button>
            <button className="btn_default btn_default_ring">
              Explore Plans
            </button>
          </div>
        </div>
        <div className="z-10">
          <img
            className="rounded-2xl object-cover"
            src={bp}
            width={321}
            height={300}
            alt="boost image"
          />
        </div>

        <div className="circle1 absolute w-100 h-100 rounded-full ring-6 ring-[#a49ce8] -right-65 top-1/2 z-0"></div>
        <div className="circle1 absolute w-100 h-100 rounded-full ring-6 ring-[#6152d8] -right-20 top-65 z-0"></div>
      </div>
    </div>
  );
}

export default BoostCard;
