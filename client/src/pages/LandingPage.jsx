import React, { useState } from "react";
import logo from "/icons/logo.svg";
// contact icons
import { MdAccountCircle } from "react-icons/md";

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

function LandingPage() {
  return (
    <div className="bg-gradient-to-br px-24 py-20 from-[#1e2841] to-[#434F7F] h-auto w-full rounded-2xl overflow-x-hidden relative mb-10 text-white">
      <div className="flex items-center w-fit justify-center gap-2 mb-20">
        <img
          src={logo}
          className="bg-white rounded-full"
          width={35}
          height={35}
        />
        <span className="text-xl">Mubhir</span>
      </div>

      <div>
        <header>
          <h2>Your AI SAT</h2>
          <h1>
            <i>Coming Soon</i>
          </h1>

          <p>
            Can't wait to help you elevate your scores with intelligent
            practice, personalized feedback, and strategic prep techniques!
          </p>
        </header>

        <div className="my-6 space-y-5">
          <h4>Register now to get early access</h4>
          <form action="">
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              <section className="grid gap-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  className="p-3 outline-none border border-slate-400/50 bg-gray-600/30 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
                  required
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                />
              </section>
              <section className="grid gap-2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  className="p-3 outline-none border border-slate-400/50 bg-gray-600/30 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
                  required
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                />
              </section>
              <section className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  className="p-3 outline-none border border-slate-400/50 bg-gray-600/30 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </section>
              <section className="grid gap-2">
                <label htmlFor="Phone">Phone</label>
                <input
                  className="p-3 outline-none border border-slate-400/50 bg-gray-600/30 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
                  required
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+44 123 456 7890"
                />
              </section>
            </div>

            <button className="rounded-full p-1 bg-[#BBAAFF] text-black flex items-center my-6">
              <span className="px-5 font-medium">Register now</span>
              <span>
                <FaArrowRight
                  enableBackground={"true"}
                  className="text-pp p-2.5 bg-white rounded-full"
                  size={40}
                />
              </span>
            </button>
          </form>

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
            className={"right-1/4 top-14"}
            color={"bg-[#4F46F4]"}
            rotate={"-rotate-[24deg]"}
            label={"Coming"}
          />
          <ScatterLabel
            className={"right-10 bottom-1/2"}
            color={"bg-[#7E08EE]"}
            rotate={"rotate-[24deg]"}
            label={"Early"}
          />
          <ScatterLabel
            className={"right-1/2 bottom-20"}
            color={"bg-[#0E957F]"}
            rotate={"rotate-[24deg]"}
            label={"Beta"}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center absolute right-10 bottom-10">
        <button>
          <FaInstagram
            className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
            enableBackground={true}
            size={32}
          />
        </button>
        <button>
          <FaTiktok
            className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
            enableBackground={true}
            size={32}
          />
        </button>
        <button>
          <FaYoutube
            className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
            enableBackground={true}
            size={32}
          />
        </button>
        <button>
          <FaXTwitter
            className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
            enableBackground={true}
            size={32}
          />
        </button>
        <button>
          <FaFacebookF
            className="text-pp p-2 bg-white hover:bg-light-pp hover:text-white transition-colors cursor-pointer rounded-full"
            enableBackground={true}
            size={32}
          />
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
