import React, { useState } from "react";
import {
  FaArrowRight,
  FaChevronCircleDown,
  FaChevronCircleUp,
} from "react-icons/fa";

const faqs = [
  {
    question: "How does Mubhir's AI personalize my learning experience?",
    answer:
      "Our AI analyzes your performance, identifies strengths and weaknesses, and tailors a study plan to maximize your score improvement.",
  },
  {
    question: "How many practice tests are included in the program?",
    answer: "Some texts",
  },
  {
    question: "Can I use Mubhir on my phone or tablet?",
    answer: "Some texts",
  },
  {
    question: "Is there a free trial available?",
    answer: "Some texts",
  },
  {
    question: "What if I'm not satisfied with the program?",
    answer: "Some texts",
  },
  {
    question: "Will I get support during my preparation?",
    answer: "Some texts",
  },
];

function FAQ() {
  return (
    <div className="p-28 mt-20 bg-lightgray rounded-xl">
      <div className="max-w-310 mx-auto">
        <h1 className="text-center">Your Questions Answered</h1>
      </div>

      <p className="text-center text-black">Frequently asked questions.</p>

      <div className="max-w-310 mx-auto">
        {faqs.map((faq) => (
          <FaqCard key={faq.id} {...faq} />
        ))}
      </div>
      <div className="w-fit mx-auto space-y-2 mt-15">
        <p className="text-center">Still have questions?</p>

        {/* use useNavigate() hook to make it change route */}
        <button className="rounded-full p-1 text-white bg-pp flex items-center">
          <span className="px-5 text-lg font-medium">Contact Us</span>
          <span>
            <FaArrowRight
              enableBackground={true}
              className="text-pp p-2.5 bg-white rounded-full"
              size={40}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  return (
    <div
      className={`group flex w-full justify-between items-center my-4 p-4 border border-[#fff] rounded-3xl bg-white transition-colors`}
    >
      <div className="w-full gap-3 flex flex-col">
        <h4 className="flex flex-row justify-between items-start">
          <span className={open ? "text-pp" : "text-black"}>{question}</span>
          <button className="cursor-pointer outline-0 focus-within:outline-none" onClick={handleToggle}>
            <FaChevronCircleUp
              enableBackground={true}
              className={`rounded-full ${open ? 'rotate-180 bg-white text-pp': 'rotate-0 bg-pp text-white'} transition-all`}
              size={32}
            />
          </button>
        </h4>

        {open && <p className="font-normal text-base opacity-80">{answer}</p>}
      </div>
    </div>
  );
};
export default FAQ;
