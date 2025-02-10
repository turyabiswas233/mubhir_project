import React, { useState } from "react";

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
    <div className="p-28 mt-20 bg-heroBg">
      <div className="max-w-310 mx-auto">
        <h1 className="text-center">Frequently Asked Questions</h1>
      </div>

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
      className={`group flex w-full justify-between items-center my-4 p-5 border border-[#C2BCF0] rounded-3xl ${
        open ? "bg-white" : "bg-transparent"
      } transition-colors `}
    >
      <div className="grid gap-3 items-center">
        <h4>{question}</h4>

        {open && <p className="font-normal text-base opacity-80">{answer}</p>}
      </div>
      <button
        className="w-5 h-5 min-w-8 min-h-8 cursor-pointer"
        onClick={handleToggle}
      >
        {open ? (
          <img
            className="w-5 h-5"
            src={"/icons/down.svg"}
            alt="down"
            width={14}
            height={14}
          />
        ) : (
          <img
            className="w-5 h-5 group-hover:translate-x-1 transition-transform ease-out"
            src={"/icons/right.svg"}
            alt="right"
            width={14}
            height={14}
          />
        )}
      </button>
    </div>
  );
};
export default FAQ;
