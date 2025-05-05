import React, { useState, useEffect } from "react";
// contact icons
import { MdAccountCircle } from "react-icons/md";
// social icons
import { FaArrowRight, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
// images
import saudiStd from "/images/saudi_std.png";
import landingArt from "/icons/landing_art.svg";
import logo from "/icons/logo.svg";

//api config
import { CONFIG } from "../api/config";

const ScatterLabel = ({ label, color, rotate, className }) => {
  return (
    <div
      className={`absolute font-normal text-xl rounded-full px-3 py-0 tracking-tight ${className} ${color} ${rotate}`}
    >
      #{label}
    </div>
  );
};
const NiceStatusMessageBox = ({ message, errorStatus }) => {
  return (
    <div>
      <p className="text-lg font-semibold">
        {errorStatus ? "Error:" : "Success:"}
      </p>
      <p className="text-sm">{message}</p>
    </div>
  );
};

function LandingPage() {
  const [load, setLoad] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const element = e.currentTarget.getElementsByTagName("input");
    // get firstName, fullName, phone, email from this submit form
    const firstName = element[0].value;
    const fullName = element[1].value;
    const email = element[2].value;
    const phone = element[3].value;
    const formData = new FormData();

    formData.append("first_name", firstName);
    formData.append("full_name", fullName);
    formData.append("phone", phone);
    formData.append("email", email);

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      setLoad(true);
      const response = await fetch(`${CONFIG.API}/registrations`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.status === 201 && data?.status === true) {
        setMessage(data?.message);
        setError(false);
        // reset the form
        [0, 1, 2, 3].forEach((ele) => {
          element[ele].value = "";
        });
      } else {
        setMessage("Failed to create an account");
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setMessage("Failed to create an account");
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="max-lg:bg-[#242F4B] min-lg:bg-[url(/images/landing_earth.png)] bg-cover h-auto w-full p-0 lg:px-20 lg:pt-20 rounded-2xl overflow-x-hidden relative mb-10 text-white min-h-fit overflow-y-hidden">
      {message && (
        <div
          className={`p-5 z-50 fixed top-10 left-1/2 -translate-x-1/2 bg-white w-[50vw] min-w-fit rounded-lg shadow-lg ${
            error
              ? "border-red-700 text-red-500"
              : "border-green-700 text-green-500"
          } border-2`}
        >
          <NiceStatusMessageBox message={message} errorStatus={error} />
        </div>
      )}
      <div className="max-lg:hidden flex items-center w-fit justify-center gap-2 mb-20 mx-auto">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            className="bg-white rounded-full"
            width={35}
            height={35}
          />
          <span className="text-xl">Mubhir</span>
        </div>

        <ul className="flex items-center gap-3 text-sm">
          <li className="hover:bg-gray-200/20 rounded-md px-2">
            <a href="/landing">English</a>
          </li>
          <li className="hover:bg-gray-200/20 rounded-md px-2">
            <a href="/rtl/landing">العربية</a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 min-lg:grid-cols-2">
        <div>
          <div className="max-lg:px-4 max-lg:pt-8 max-lg:bg-[url(/images/landing_earth.png)] bg-cover bg-right">
            <div className="mx-auto min-lg:hidden flex items-center justify-center gap-10 w-full mb-10">
              <div className="flex items-center gap-2">
                <img
                  src={logo}
                  className="bg-white rounded-full"
                  width={35}
                  height={35}
                />
                <span className="text-xl">Mubhir</span>
              </div>

              <ul className="flex items-center gap-3 text-sm">
                <li className="hover:bg-gray-200/20 rounded-md px-2">
                  <a href="/landing">English</a>
                </li>
                <li className="hover:bg-gray-200/20 rounded-md px-2">
                  <a href="/rtl/landing">العربية</a>
                </li>
              </ul>
            </div>
            <header>
              <p>
                <span className="text-4xl min-2xl:text-7xl inline-flex items-center gap-3">
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
              </p>
              <p>
                <i className="font-extrabold text-5xl min-lg:text-7xl min-2xl:text-8xl">
                  Coming Soon
                </i>
              </p>

              <p className="my-4 text-base">
                Can't wait to help you elevate your scores with intelligent
                practice, personalized feedback, and strategic prep techniques!
              </p>

              <div className="w-full min-lg:hidden relative bg-right my-4">
                {/* if on mobile, show the div below */}
                <img
                  className="w-full max-w-[1000px]"
                  src={saudiStd}
                  width={"100%"}
                  height={"100%"}
                />
                {/* socials */}
                <ScatterLabel
                  className={"left-2 bottom-14 w-fit h-fit"}
                  color={"bg-[#4F46F4]"}
                  rotate={"-rotate-[24deg]"}
                  label={"Coming"}
                />
                <ScatterLabel
                  className={"right-2 bottom-1/3 w-fit h-fit"}
                  color={"bg-[#7E08EE]"}
                  rotate={"rotate-[24deg]"}
                  label={"Early"}
                />
                <ScatterLabel
                  className={"left-2 top-20 w-fit h-fit"}
                  color={"bg-[#0E957F]"}
                  rotate={"rotate-[24deg]"}
                  label={"Beta"}
                />
              </div>
            </header>
          </div>
          <br />

          <div className="grid max-lg:p-5">
            <h4 className="my-5">Register now to get early access</h4>
            <form
              onSubmit={handleSubmit}
              onChange={(e) => {
                setMessage("");
                setError(false);
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-auto lg:w-fit">
                <section className="grid gap-2">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    className="p-3 outline-none border border-white/20 bg-white/4 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
                    required
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First name"
                  />
                </section>
                <section className="grid gap-2">
                  <label htmlFor="full_name">Full Name</label>
                  <input
                    className="p-3 outline-none border border-white/20 bg-white/4 rounded-md focus:border-slate-400 focus-within:border-2 transition-all"
                    required
                    type="text"
                    name="full_name"
                    id="full_name"
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

              <button
                className="max-lg:w-full rounded-full p-1 bg-[#BBAAFF] text-black flex items-center justify-between my-6 cursor-pointer disabled:pointer-events-none"
                disabled={load}
              >
                <span className="px-5 font-medium">Register now</span>
                <span>
                  {load ? (
                    <LuLoader
                      enableBackground={"true"}
                      className="text-pp p-2.5 bg-white rounded-full animate-spin"
                      size={40}
                    />
                  ) : (
                    <FaArrowRight
                      enableBackground={"true"}
                      className="text-pp p-2.5 bg-white rounded-full"
                      size={40}
                    />
                  )}
                </span>
              </button>
            </form>
          </div>
          <div className="flex items-start p-5 lg:px-0 lg:pb-20 flex-col gap-5">
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

        <div className="relative w-full max-lg:hidden">
          <img
            className="w-full max-w-[1000px] absolute bottom-0"
            src={saudiStd}
            width={"100%"}
            height={"100%"}
          />
          {/* socials */}
          <ScatterLabel
            className={"min-lg:left-1/3 min-lg:top-14 w-fit h-fit"}
            color={"bg-[#4F46F4]"}
            rotate={"-rotate-[24deg]"}
            label={"Coming"}
          />
          <ScatterLabel
            className={"right-10 bottom-1/3 w-fit h-fit"}
            color={"bg-[#7E08EE]"}
            rotate={"rotate-[24deg]"}
            label={"Early"}
          />
          <ScatterLabel
            className={"left-10 bottom-20 w-fit h-fit"}
            color={"bg-[#0E957F]"}
            rotate={"rotate-[24deg]"}
            label={"Beta"}
          />
        </div>
      </div>
      <div className="lg:absolute lg:right-10 p-5 -bottom-5 flex gap-2 mb-10 lg:mb-14">
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
  );
}

export default LandingPage;
