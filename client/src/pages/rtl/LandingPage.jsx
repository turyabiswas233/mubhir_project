import React, { useState, useEffect } from "react";
import logo from "/icons/logo.svg";
// contact icons
import { MdAccountCircle } from "react-icons/md";
import saudiStd from "/images/saudi_std.png";
import landingArt from "/icons/landing_art.svg";
// social icons
import {
  FaArrowLeft,
  FaArrowRight,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const ScatterLabel = ({ label, color, rotate, className }) => {
  return (
    <div
      className={`absolute font-normal text-xl rounded-full px-3 py-0 tracking-tight ${className} ${color} ${rotate}`}
    >
      {label}#
    </div>
  );
};

function LandingPageRTL() {
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
    // here the image url is for pc view
    <div className="max-lg:bg-[#242F4B] min-lg:bg-[url(/images/landing_earth_rtl.png)] bg-cover h-auto w-full p-0 lg:px-20 lg:pt-20 rounded-2xl overflow-x-hidden relative mb-10 text-white min-h-fit overflow-y-hidden">
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
        <div className="relative w-full max-lg:hidden">
          <img
            className="w-full max-w-[1000px] absolute bottom-0"
            src={saudiStd}
            width={"100%"}
            height={"100%"}
          />
          {/* socials */}
          <ScatterLabel
            className={"right-1/6 top-10 w-fit h-fit"}
            color={"bg-[#4F46F4]"} // violet
            rotate={"-rotate-[24deg]"}
            label={"قادمة"}
          />
          <ScatterLabel
            className={"right-10 bottom-1/3 w-fit h-fit"}
            color={"bg-[#7E08EE]"} // purple
            rotate={"rotate-[24deg]"}
            label={"مبكر"}
          />
          <ScatterLabel
            className={"left-10 top-1/4 w-fit h-fit"}
            color={"bg-[#0E957F]"} // green
            rotate={"rotate-[24deg]"}
            label={"بيتا"}
          />
        </div>
        <div>
          {/* here the image url is for mobile view */}
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
              <p className="text-right">
                <span className="text-4xl min-2xl:text-7xl inline-flex items-center gap-3">
                  الذكي
                  <span>
                    <img
                      className="w-[30px] xl:w-[80px]"
                      src={landingArt}
                      alt={"art"}
                      width={"auto"}
                      height={"auto"}
                    />
                  </span>{" "}
                  SAT اختبار
                </span>
              </p>
              <p className="font-extrabold text-5xl min-lg:text-7xl min-2xl:text-8xl text-right">
                الخاص بك قادم قريبًا
              </p>

              <p className="my-4 text-base text-right">
                لا أستطيع الانتظار لمساعدتك في رفع درجاتك من خلال ممارسة ذكية،
                وتعليقات شخصية، وتقنيات تحضير استراتيجية!
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
                  label={"قادمة"}
                />
                <ScatterLabel
                  className={"right-2 bottom-1/3 w-fit h-fit"}
                  color={"bg-[#7E08EE]"}
                  rotate={"rotate-[24deg]"}
                  label={"باكر"}
                />
                <ScatterLabel
                  className={"left-2 top-20 w-fit h-fit"}
                  color={"bg-[#0E957F]"}
                  rotate={"rotate-[24deg]"}
                  label={"بيتا"}
                />
              </div>
            </header>
          </div>
          <br />

          <div className="grid max-lg:p-5 text-right">
            <h4 className="my-5">سجل الآن للحصول على الوصول المبكر</h4>
            <form
              className="landing"
              onSubmit={(e) => {
                e.preventDefault();
                alert("call submit api");
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-auto lg:w-fit min-lg:ml-auto">
                <section className="grid gap-2">
                  <label htmlFor="first_name">اسم العائلة</label>
                  <input
                    className="p-3 outline-none border border-white/20 bg-white/1   0 rounded-md focus:border-slate-400 focus-within:border-2 transition-all text-right"
                    required
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="اسم العائلة"
                  />
                </section>
                <section className="grid gap-2">
                  <label htmlFor="full_name">الاسم الأول</label>
                  <input
                    className="p-3 outline-none border border-white/20 bg-white/1   0 rounded-md focus:border-slate-400 focus-within:border-2 transition-all text-right"
                    required
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="الاسم الأول"
                  />
                </section>
                <section className="grid gap-2">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <input
                    className="p-3 outline-none border border-white/20 bg-white/1   0 rounded-md focus:border-slate-400 focus-within:border-2 transition-all text-right"
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="البريد الإلكتروني"
                  />
                </section>
                <section className="grid gap-2">
                  <label htmlFor="Phone">الهاتف</label>
                  <input
                    className="p-3 outline-none border border-white/20 bg-white/1   0 rounded-md focus:border-slate-400 focus-within:border-2 transition-all text-right"
                    required
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+44 123 456 7890"
                  />
                </section>
              </div>

              <button className="max-lg:w-full rounded-full p-1 bg-[#BBAAFF] text-black font-medium flex flex-row-reverse items-center justify-between my-6 min-lg:float-right">
                <span className="px-5 font-medium">سجل الآن</span>
                <span>
                  {load ? (
                    <LuLoader
                      enableBackground={"true"}
                      className="text-pp p-2.5 bg-white rounded-full animate-spin"
                      size={40}
                    />
                  ) : (
                    <FaArrowLeft
                      enableBackground={"true"}
                      className="text-pp p-2.5 bg-white rounded-full"
                      size={40}
                    />
                  )}
                </span>
              </button>
            </form>
          </div>
          <div className="flex float-right items-end justify-end p-5 lg:px-0 lg:pb-20 flex-col gap-2 text-right">
            <div className="items-center flex">
              <MdAccountCircle
                className="border broder-pp rounded-full bg-white text-pp translate-x-6"
                size={40}
              />
              <MdAccountCircle
                className="border broder-pp rounded-full bg-white text-pp translate-x-3"
                size={40}
              />
              <MdAccountCircle
                className="border broder-pp rounded-full bg-white text-pp translate-x-0"
                size={40}
              />
            </div>
            <section>
              <p className="font-semibold text-lg">أكثر من 40,000 طالب</p>
              <p className="font-normal">انضم إلينا للوصول إلى مزايانا</p>
            </section>
          </div>
        </div>
      </div>
      <div className="max-lg:float-right float-left min-lg:absolute bottom-0 left-5 px-4 pb-10 space-x-2">
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

export default LandingPageRTL;
