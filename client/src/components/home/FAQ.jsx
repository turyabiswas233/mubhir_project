import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaCircleUp } from "react-icons/fa6";
import {
  MdArrowCircleUp,
  MdArrowDownward,
  MdArrowUpward,
} from "react-icons/md";
import {
  PiCaretCircleDown,
  PiCaretCircleUp,
  PiCaretCircleUpFill,
} from "react-icons/pi";

const faqs = [
  {
    question: "What is Mubhir, and how does it help with SAT preparation?",
    answer:
      "Mubhir is an online platform tailored for Saudi students to prepare for SAT 1 and SAT 2 exams. We provide realistic practice tests, detailed feedback, progress tracking, and subject-specific prep to help you succeed",
  },
  {
    question:
      "What is the difference between SAT 1 and SAT 2 preparation on Mubhir?",
    answer: "Some texts",
  },
  {
    question: "Can I customize my tests?",
    answer: "Some texts",
  },
  {
    question: "What's included in the free trial?",
    answer: "Some texts",
  },
  {
    question: "Are the practice tests similar to the real SAT exam?",
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
          <button
            className="w-10 h-10 cursor-pointer mr-0"
            onClick={handleToggle}
          >
            {open ? (
              <PiCaretCircleUpFill color="671E5A" size={24} />
            ) : (
              <PiCaretCircleDown color="671E5A" size={24} />
            )}
          </button>
        </h4>

        {open && <p className="font-normal text-base opacity-80">{answer}</p>}
      </div>
    </div>
  );
};
export default FAQ;
