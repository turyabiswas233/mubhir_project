import React from "react";
import icon1 from "/images/success/one.png";
import icon2 from "/images/success/two.png";
import icon3 from "/images/success/three.png";
import icon4 from "/images/success/four.png";
const successRatedata = [
  {
    number: "98%",
    text: "Students improved their SAT scores.",
  },
  {
    number: "12,00+",
    text: "SAT practice questions available.",
  },
  {
    number: "1,00+",
    text: "Saudi students using Mubhir",
  },
];
const platformData = [
  {
    title: "Personalized Prctice",
    text: "Over 12,000 questions tailored to SAT 1 (Verbal & Quantitative) and SAT 2 (Math, Physics, Chemistry, Biology.",
    imgSrc: icon1,
    color: "bg-[#F1F7FF]",
  },
  {
    title: "Progress Tracking",
    text: "Monitor your improvement with detailed feedback after every test.",
    imgSrc: icon2,
    color: "bg-[#E8FFF9]",
  },
  {
    title: "Full-Length Mock Exams",
    text: "Practice under real exam conditions to build confidence.",
    imgSrc: icon3,
    color: "bg-[#FFF9EE]",
  },
  {
    title: "Mobile-Friendly Learning",
    text: "Study anytime, anywhere—on your phone, tablet, or laptop.",
    imgSrc: icon4,
    color: "bg-[#FAF4FF]",
  },
];
function Success() {
  return (
    <div>
      {/* part 1 */}
      <div className="my-32">
        <h4 className="text-center text-[#101828] text-2xl font-semibold">
          Proven Success You Can Trust
        </h4>
        <div className="grid px-32 mt-10 grid-cols-1 gap-y-10 lg:grid-cols-3">
          {successRatedata.map((item, index) => (
            <Card
              key={`suc-${index}`}
              number={item.number}
              text={item.text}
              id={index}
            />
          ))}
        </div>
      </div>

      {/* part 2 */}
      <div className="my-32">
        <header className="header max-w-3xl mx-auto text-center space-y-6">
          <h2>
            The SAR Prep Platform <br /> Designed for you
          </h2>
          <p className="font-normal text-xl opacity-80">
            At Mubhir, we understand the challenges Saudi students face when
            preparing for the SAT. That's why we've built a platform that
            simplifies your preparation journey
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 my-20 lg:grid-cols-2">
          {platformData.map((item, index) => (
            <PersonalizedCard
              key={`perso-${index}`}
              title={item.title}
              text={item.text}
              imgSrc={item.imgSrc}
              color={item.color}
              id={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const Card = ({ number, text, id }) => {
  return (
    <div className="flex">
      <div className="grid justify-center grid-cols-1 gap-3 mx-auto text-center">
        <p className="text-tBlue text-6xl font-bold">{number}</p>

        <p className="text-midgray text-lg w-[75%] mx-auto">{text}</p>
      </div>
      {id < 2 && (
        <span className="text-tBlue h-auto scale-y-150 w-px my-auto hidden lg:inline">
          |
        </span>
      )}
    </div>
  );
};
const PersonalizedCard = ({ title, text, imgSrc, color, id }) => {
  return (
    <div>
      <div
        className={`h-full flex flex-col justify-between gap-5 p-5 rounded-3xl ${color} mx-auto`}
      >
        <div className="text-left">
          <h4 className="text-[#251A05] text-2xl font-semibold">{title}</h4>
          <p className="text-[#251A05CC] font-medium text-sm">{text}</p>
        </div>
        <img
          src={imgSrc}
          alt="image"
          className="w-full aspect-video object-cover rounded-xl"
          width={540}
          height={287}
        />
      </div>
    </div>
  );
};
export default Success;
