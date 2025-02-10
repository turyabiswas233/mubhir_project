import React from "react";
import thumbsup from "/icons/thumbsup.svg";
import heart from "/icons/heart.svg";
import check from "/icons/check.svg";
import test from "/images/fulltest.png";

const data = [
  {
    title: "What It Offers",
    text: "Experience the real SAT before test day! Full-Length Tests simulate the actual exam with both quantitative and verbal sections in one sitting.",
    icon: heart,
  },
  {
    title: "Why You'll Love It",
    text: "Designed for students who want to practice managing time, understand the question distribution, and get ready for real test-day challenges",
    icon: thumbsup,
  },
  {
    title: "How It Works",
    text: "Take a full test, review detailed performance reports, and get actionable insights to refine your strategies",
    icon: check,
  },
];

function FullTest() {
  return (
    <div className="my-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex justify-start items-center">
          <img
            className="rounded-xl h-full w-full max-w-md object-cover"
            src={test}
            width={495}
            height={625}
          />
        </div>
        <div className="my-10 grid grid-cols-1 gap-7 text-left">
          <h3>Customized Tests</h3>
          <div className="grid grid-cols-1 gap-5">
            {data.map((item, index) => (
              <Card key={`test-${index}`} {...item} />
            ))}
          </div>
          <button className="btn_default h-fit">Start a Full Test Today</button>
        </div>
      </div>
    </div>
  );
}
const Card = ({ title, text, icon }) => {
  return (
    <div className="flex items-start justify-start gap-5">
      <img
        src={icon}
        alt="thumbsup"
        className="p-3 shadow-lg shadow-[#3927CE12] rounded-[10px]"
        width={48}
        height={48}
      />

      <div className="text-left">
        <h4>{title}</h4>
        <p className="text-midgray">{text}</p>
      </div>
    </div>
  );
};
export default FullTest;
