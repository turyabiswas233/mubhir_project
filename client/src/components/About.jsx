import React from "react";
import Navbar from "./home/Navbar";
import FAQ from "./home/FAQ";
// contact icons
import { MdAccountCircle } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";

// social icons
import { FaArrowRight, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
const ScatterLabel = ({ label, color, rotate, className }) => {
  return (
    <div
      className={`absolute font-normal text-xl rounded-full px-3 py-0 tracking-tight ${className} ${color} ${rotate}`}
    >
      #{label}
    </div>
  );
};

function About() {
  return (
    <div>
      <div className="bg-gradient-to-b p-3 from-[#6f0767] to-[#2a056d] h-auto w-full rounded-2xl overflow-x-hidden relative mb-10">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-10">
          <header className="text-white py-32 px-32 space-y-6 relative">
            <h1 className="text-white">Your Smartest Path to SAT Success</h1>
            <p className="font-normal text-[#E1C1DC]">
              At Mubhir, we believe that every student deserves the best tools
              to achieve their dream SAT score. That's why we've built the most
              advanced SAT prep platform, designed to help students in the
              Middle East and beyond master the SAT with confidence.
            </p>
            <div>
              {/* use useNavigate() hook to make it change route */}
              <button className="rounded-full p-1 bg-white text-pp flex items-center">
                <span className="px-5 font-medium">Get started</span>
                <span>
                  <FaArrowRight
                    enableBackground={"true"}
                    className="text-white p-2.5 bg-pp rounded-full"
                    size={40}
                  />
                </span>
              </button>
            </div>

            <div className="flex items-center -space-x-3 max-w-2xs absolute bottom-0">
              <div className="flex gap-0">
                <MdAccountCircle
                  className="border broder-pp rounded-full bg-white text-pp "
                  size={40}
                />
                <MdAccountCircle
                  className="border broder-pp rounded-full bg-white text-pp -translate-x-3"
                  size={40}
                />
                <MdAccountCircle
                  className="border broder-pp rounded-full bg-white text-pp -translate-x-6"
                  size={40}
                />
              </div>

              <p>40,000+ Join us & access our benifits</p>
            </div>

            {/* socials */}

            <ScatterLabel
              className={"right-36 top-14"}
              color={"bg-[#4F46F4]"}
              rotate={"-rotate-[24deg]"}
              label={"Question"}
            />
            <ScatterLabel
              className={"left-2/3 bottom-20 lg:bottom-10"}
              color={"bg-[#7E08EE]"}
              rotate={"rotate-[24deg]"}
              label={"SAT 1"}
            />
          </header>

          <div className="bg-[#D3B5FF] rounded-2xl shadow-xl shadow-pp/20 float-right my-auto h-full h-lvw/2"></div>
        </div>
        <div className="flex gap-2 items-center absolute right-10 bottom-10">
          <button>
            <FaInstagram
              className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
              enableBackground={"true"}
              size={32}
            />
          </button>
          <button>
            <FaTiktok
              className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
              enableBackground={"true"}
              size={32}
            />
          </button>
          <button>
            <FaYoutube
              className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
              enableBackground={"true"}
              size={32}
            />
          </button>
          <button>
            <FaXTwitter
              className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
              enableBackground={"true"}
              size={32}
            />
          </button>
          <button>
            <FaFacebookF
              className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
              enableBackground={"true"}
              size={32}
            />
          </button>
        </div>
      </div>

      <div className="bg-[#F7E8F5] text-center p-10 md:p-20 lg:p-40 rounded-2xl my-20">
        <p>Our Mission</p>
        <p className="font-semibold text-4xl w-auto md:w-1/2 mx-auto">
          To empower students with{" "}
          <span className="text-midgray">AI-driven,</span> personalized SAT
          preparation that helps them achieve their highest potential through
          smart learning, instant feedback, and expert guidance.
        </p>
      </div>
      <div className="bg-[#2B0324] text-center p-30 rounded-2xl">
        <div className="w-min text-white mx-auto">
          <h2 className="font-semibold w-xl mx-auto">Why Choose Mubhir?</h2>
          <p className="text-center">
            SAT 01 is designed for students preparing for the Scholastic
            Assessment Test (SAT), specifically covering:
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-20">
          <div className="grid grid-cols-2 gap-3">
            <BoxCard
              title={"Thousands of Realistics Mock Exams"}
              desc={"Designed to match the actual SAT difficulty"}
            />
            <BoxCard
              title={"Personalized Practice"}
              desc={"Choose difficulty levels, topics & timing."}
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <BoxCard
              title={"AI-Powered Performance Tracking"}
              desc={"Identify strengths & weaknesses instantly."}
            />
            <BoxCard
              title={"Video Solutions for Every Answer"}
              desc={"Learn with expert explanations."}
            />
            <BoxCard
              title={"Flexible Learning"}
              desc={"Train at your own pace, anytime, anywhere."}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 p-30">
        <div className="bg-light-pp/30 rounded-2xl flex justify-center items-center text-4xl text-pp font-bold">Image Here</div>
        <div>
          <h2>Trusted by Students Across the Middle East</h2>
          <p>
            Mubhir is built for students like you—tailored to the needs of
            test-takers in the Middle East. Our platform is designed to ensure
            maximum results with minimum stress.
          </p>

          {/* use useNavigate() hook to make it change route */}
          <button className="rounded-full p-1 text-white bg-pp flex items-center">
            <span className="px-5 text-lg font-medium">Invite now</span>
            <span>
              <FaArrowRight
                enableBackground={"true"}
                className="text-pp p-2.5 bg-white rounded-full"
                size={40}
              />
            </span>
          </button>
        </div>
      </div>

      <FAQ />
    </div>
  );
}

const BoxCard = ({ title, desc }) => {
  return (
    <div className="rounded-xl bg-white/20 w-auto h-fit p-10 flex flex-col justify-between">
      <div className="mb-14">
        <HiOutlineBookOpen
          className="text-black bg-white rounded-full p-2"
          enableBackground={"true"}
          size={32}
        />
      </div>
      <div>
        <p className="text-left font-semibold text-2xl text-white">{title}</p>
        <p className="text-left font-medium text-base text-white">{desc}</p>
      </div>
    </div>
  );
};

export default About;
