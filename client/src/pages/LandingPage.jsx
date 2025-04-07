import React, { useState } from "react";
import logo from "/icons/logo.svg";
// contact icons
import { MdAccountCircle } from "react-icons/md";
import saudiStd from "/images/saudi_std.png";
import landingArt from "/icons/landing_art.svg";
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
    // tempbg-gradient-to-br from-[#1e2841] to-[#434F7F]
    <div className="bg-[url(/images/landing_earth.png)] bg-cover h-auto w-full px-14 pt-10 lg:px-24 lg:pt-20 rounded-2xl overflow-x-hidden relative mb-10 text-white min-h-fit">
      <div className="flex items-center w-fit justify-center gap-2 mb-20">
        <img
          src={logo}
          className="bg-white rounded-full"
          width={35}
          height={35}
        />
        <span className="text-xl">Mubhir</span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div>
          <header>
            <h2>
              <span className="text-4xl xl:text-7xl inline-flex items-center gap-3">
                Your AI
                <span>
                  <img
                    className="w-[40px] xl:w-[80px]"
                    src={landingArt}
                    alt={"art"}
                    width={"auto"}
                    height={"auto"}
                  />
                </span>{" "}
                SAT
              </span>
            </h2>
            <h1>
              <i className="font-extrabold text-6xl lg:text-8xl">Coming Soon</i>
            </h1>

            <p>
              Can't wait to help you elevate your scores with intelligent <br />{" "}
              practice, personalized feedback, and strategic prep techniques!
            </p>
          </header>
          <br />

          <div className="grid">
            <h4 className="my-5">Register now to get early access</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("call submit api");
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-auto lg:w-fit">
                <section className="grid gap-2">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="p-3 outline-none border border-white/20 bg-white/4 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
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
                    className="p-3 outline-none border border-white/20 bg-white/4 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
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
                    className="p-3 outline-none border border-white/20 bg-white/4 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
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
                    className="p-3 outline-none border border-white/20 bg-white/4 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
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
          </div>
          <div className="flex items-start pb-20">
            <div className="items-center flex">
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

            <span>
              40,000+ Join us & access <br /> our benifits
            </span>
          </div>
        </div>

        <div>
          <img
            // className="w-auto absolute bottom-0 left-1/2 aspect-auto z-0"
            className="absolute w-1/2 right-0 bottom-0 max-w-[1000px]"
            src={saudiStd}
            height={"100%"}
          />
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
          className={"right-1/2 bottom-20 opacity-0 md:opacity-100"}
          color={"bg-[#0E957F]"}
          rotate={"rotate-[24deg]"}
          label={"Beta"}
        />
      </div>
      <div className="flex gap-2 items-center absolute bottom-10 right-5">
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
