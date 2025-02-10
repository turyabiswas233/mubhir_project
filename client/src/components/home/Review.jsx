import React from "react";
import abdulla from "/images/abdulla.png";
import noura from "/images/noura.png";
import bstar from "/icons/bluestar.svg";
import ystar from "/icons/yellowstar.svg";
function Review() {
  return (
    <div className="bg-heroBg py-32">
      <div className="h-auto w-full max-w-310 mx-auto px-10">
        <header className="flex items-center justify-between mb-10">
          <h2 className="max-w-100">
            Trusted by Saudi <br /> Students Like You
          </h2>
          <button className="btn_default">Read More Reviews</button>
        </header>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl flex items-start h-fit p-6 gap-8">
            <img
              src={abdulla}
              width={213}
              height={239}
              className="rounded-lg"
              alt="image"
            />
            <div className="my-auto h-full flex flex-col gap-16 justify-between">
              <div>
                <div className="flex gap-1 items-center">
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                </div>
                <p className="text-supergray font-semibold">
                  Mubhir made SAT prep so much easier. I boosted my score by 200
                  points in 3 months!"
                </p>
              </div>
              <p>
                <span className="text-supergray font-bold">Abdulla, </span>
                <span className="text-midgray font-normal">Riyadh</span>
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl flex items-start h-fit p-6 gap-8">
            <img
              src={noura}
              width={213}
              height={239}
              className="rounded-lg"
              alt="image"
            />
            <div className="my-auto h-full flex flex-col gap-16 justify-between">
              <div>
                <div className="flex gap-1 items-center">
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                  <img src={bstar} width={16} height={16} alt="blue star" />
                </div>
                <p className="text-supergray font-semibold">
                  The detailed feedback after every test was a game-changer for
                  me. I felt fully prepared on exam day!
                </p>
              </div>
              <p>
                <span className="text-supergray font-bold">Noura, </span>
                <span className="text-midgray font-normal">Jeddah</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center flex items-center justify-center w-full gap-4 mt-10">
          <div className="flex gap-px items-center">
            <img src={ystar} width={16} height={16} alt="yellow star" />
            <img src={ystar} width={16} height={16} alt="yellow star" />
            <img src={ystar} width={16} height={16} alt="yellow star" />
            <img src={ystar} width={16} height={16} alt="yellow star" />
            <img src={ystar} width={16} height={16} alt="yellow star" />
          </div>
          <p className="text-supergray font-medium text-base">
            Rated 4.8/5 by 1,000+ Saudi students.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
