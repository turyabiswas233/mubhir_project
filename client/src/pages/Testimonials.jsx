import React from "react";
import abdulla from "/images/abdulla.png";
import noura from "/images/noura.png";
import bstar from "/icons/bluestar.svg";

const data = [
  {
    img: abdulla,
    fName: "Abdulla",
    lName: "Riyadh",
    text: "Mubhir made SAT prep so much easier. I boosted my score by 200 points in 3 months!",
  },
  {
    img: noura,
    fName: "Noura",
    lName: "Jeddah",
    text: "The detailed feedback after every test was a game-changer for me. I felt fully prepared on exam day!",
  },
  {
    img: abdulla,
    fName: "Abdulla",
    lName: "Riyadh",
    text: "Mubhir made SAT prep so much easier. I boosted my score by 200 points in 3 months!",
  },
  {
    img: noura,
    fName: "Noura",
    lName: "Jeddah",
    text: "The detailed feedback after every test was a game-changer for me. I felt fully prepared on exam day!",
  },
  {
    img: abdulla,
    fName: "Abdulla",
    lName: "Riyadh",
    text: "Mubhir made SAT prep so much easier. I boosted my score by 200 points in 3 months!",
  },
  {
    img: noura,
    fName: "Noura",
    lName: "Jeddah",
    text: "The detailed feedback after every test was a game-changer for me. I felt fully prepared on exam day!",
  },
  {
    img: abdulla,
    fName: "Abdulla",
    lName: "Riyadh",
    text: "Mubhir made SAT prep so much easier. I boosted my score by 200 points in 3 months!",
  },
  {
    img: noura,
    fName: "Noura",
    lName: "Jeddah",
    text: "The detailed feedback after every test was a game-changer for me. I felt fully prepared on exam day!",
  },
];

function Testimonials() {
  return (
    <div className="px-28 py-20 space-y-5 max-w-360 mx-auto">
      <header className="text-center max-w-1/2 mx-auto ">
        <h1>Trusted by Saudi Students Like You</h1>
      </header>
      <div className="grid grid-cols-2 gap-y-10 gap-x-5 mt-20">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <div className="w-fit mx-auto pt-4">
        <button className="w-fit mx-auto btn_default">Load More</button>
      </div>
    </div>
  );
}

const Card = ({ img, fName, lName, text }) => {
  return (
    <div className="bg-heroBg rounded-2xl flex items-start h-auto p-6 gap-8">
      <img
        src={img}
        width={213}
        height={239}
        className="rounded-lg"
        alt="image"
      />
      <div className="my-auto h-full flex flex-col gap-16 justify-center">
        <div>
          <div className="flex gap-1 items-center">
            <img src={bstar} width={16} height={16} alt="blue star" />
            <img src={bstar} width={16} height={16} alt="blue star" />
            <img src={bstar} width={16} height={16} alt="blue star" />
            <img src={bstar} width={16} height={16} alt="blue star" />
            <img src={bstar} width={16} height={16} alt="blue star" />
          </div>
          <p className="text-supergray font-semibold">{text}</p>
        </div>
        <p>
          <span className="text-supergray font-bold">{fName}, </span>
          <span className="text-midgray font-normal">{lName}</span>
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
