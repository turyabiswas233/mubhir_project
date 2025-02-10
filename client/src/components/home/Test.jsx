import React from "react";
import thumbsup from "/icons/thumbsup.svg";
import heart from "/icons/heart.svg";
import check from "/icons/check.svg";
import test from "/images/test.png";

const data = [
  {
    title: "What It Offers",
    text: "Focus on what matters most to you! With Customized Tests, you can select specific topics—like vocabulary, algebra, or data analysis—and build your skills at your own pace.",
    icon: heart,
  },
  {
    title: "Why You’ll Love It",
    text: "Perfect for Saudi students who want to target their weak areas and make steady progress. Whether you’re starting out or polishing your skills, this test gives you full control.",
    icon: thumbsup,
  },
  {
    title: "How It Works",
    text: "Pick your topics, start your practice, and get real-time feedback tailored to help you improve.",
    icon: check,
  },
];

function Test() {
  return (
    <div>
      {/* part 1 */}
      <div className="my-32">
        <header className="header max-w-3xl mx-auto text-center space-y-6">
          <h2>
            Tailored Testing Options to <br /> Match Your SAT Goals
          </h2>
          <p className="font-normal text-xl opacity-80">
            Choose between customized practice or full-length tests to get the
            most out of your SAT preparation journey.
          </p>
        </header>
      </div>

      {/* part 2 */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="my-10 grid grid-cols-1 gap-7 text-left">
          <h3>Customized Tests</h3>
          <div className="grid grid-cols-1 gap-5">
            {data.map((item, index) => (
              <Card key={`test-${index}`} {...item} />
            ))}
          </div>
          <button className="btn_default">Create your Custom Test Now</button>
        </div>
        <div className="flex justify-end items-center">
          <img
            className="rounded-xl h-full w-full max-w-md object-cover"
            src={test}
            width={568}
            height={650}
          />
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
export default Test;
