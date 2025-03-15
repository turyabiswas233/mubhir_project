import React from "react";
import Navbar from "./home/Navbar";
// contact icons
import {
  MdAccountCircle,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";

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
const CardIcon = ({ icon, title, content }) => {
  return (
    <div className="rounded-2xl p-8 bg-card-pp aspect-video">
      <div>
        <span className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full p-2.5">
          {/* <MdOutlineEmail
            className="text-white"
            enableBackground={false}
            size={32}
          /> */}
          {icon}
        </span>
      </div>

      <div className="mt-10">
        <p className="font-semibold">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};
function ContactUs() {
  return (
    <div>
      <div className="bg-gradient-to-b p-3 from-[#6f0767] to-[#2a056d] h-auto w-full rounded-2xl overflow-x-hidden">
        <Navbar />
        <div className="grid grid-cols-2 py-10">
          <header className="text-white py-32 px-40 space-y-6 relative">
            <h1 className="text-white">Contact Us</h1>
            <p className="font-normal text-[#E1C1DC]">
              Have questions? We're here to help! Whether you need assistance
              with your SAT prep, have inquiries about our AI-driven platform,
              or just want to say hello—we'd love to hear from you.
            </p>
            <div>
              {/* use useNavigate() hook to make it change route */}
              <button className="rounded-full p-1 bg-white text-pp flex items-center">
                <span className="px-5 font-medium">Get started</span>
                <span>
                  <FaArrowRight
                    enableBackground={true}
                    className="text-white p-2.5 bg-pp rounded-full"
                    size={40}
                  />
                </span>
              </button>
            </div>

            <div className="flex items-center -space-x-3 max-w-2xs">
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
            <div className="flex gap-2 items-center">
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

            <ScatterLabel
              className={"right-36 top-14"}
              color={"bg-[#4F46F4]"}
              rotate={"-rotate-[24deg]"}
              label={"Help"}
            />
            <ScatterLabel
              className={"left-2 top-5/7"}
              color={"bg-[#7E08EE]"}
              rotate={"rotate-[24deg]"}
              label={"Support"}
            />
          </header>

          <div className="bg-white/20 rounded-2xl shadow-xl shadow-pp/20 float-right my-auto h-full relative translate-x-10 h-lvw/2"></div>
        </div>
      </div>
      {/* contact short card grid view */}
      <div className="w-fit grid grid-cols-3 gap-5 mx-auto text-white z-20 -translate-y-16">
        <CardIcon
          icon={
            <FaXTwitter
              className="text-white"
              enableBackground={false}
              size={32}
            />
          }
          title={"Twitter"}
          content={"Tweet me"}
        />
        <CardIcon
          icon={
            <MdOutlineEmail
              className="text-white"
              enableBackground={false}
              size={32}
            />
          }
          title={"Email"}
          content={"support@mubhir.com"}
        />
        <CardIcon
          icon={
            <MdOutlinePhone
              className="text-white"
              enableBackground={false}
              size={32}
            />
          }
          title={"Phone"}
          content={"+123 456 7890"}
        />
      </div>

      {/* contact form */}
      <div className="overflow-hidden relative w-auto flex-auto p-12 max-w-2xl mx-auto">
        {/* form */}
        <header>
          <h2>Contact Form</h2>
          <p>Our friendly team would love to hear from you!</p>
        </header>
        <form
          className="text-text-primary bg-white w-full h-auto space-y-6 rounded-lg p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <section className="grid gap-2">
            <label className="font-medium" htmlFor="fullname">
              Full Name*
            </label>
            <input
              className="border border-border-secondary rounded-lg h-12 p-2 shadow-sm shadow-[#101828]/5 focus:border-tBlue focus-within:outline-0 outline-0"
              type="text"
              required
              placeholder="First Name"
              id="fullname"
            />
          </section>
          <section className="grid gap-2">
            <label className="font-medium" htmlFor="email">
              Email*
            </label>
            <input
              className="border border-border-secondary rounded-lg h-12 p-2 shadow-sm shadow-[#101828]/5 focus:border-tBlue focus-within:outline-0 outline-0"
              type="email"
              required
              placeholder="Your email"
              id="email"
            />
          </section>
          <section className="grid gap-2">
            <label className="font-medium" htmlFor="phone">
              Phone*
            </label>
            <input
              className="border border-border-secondary rounded-lg h-12 p-2 shadow-sm shadow-[#101828]/5 focus:border-tBlue focus-within:outline-0 outline-0"
              type="phone"
              required
              placeholder="Your Phone"
              id="phone"
            />

            {/* <input
              className="border border-border-secondary rounded-lg h-12 p-2 shadow-sm shadow-[#101828]/5 focus:border-tBlue focus-within:outline-0 outline-0"
              type="email"
              required
              placeholder="Your email"
              id="email"
            /> */}
          </section>
          <section className="grid gap-2">
            <label className="font-medium" htmlFor="messages">
              Messages
            </label>
            <textarea
              className="border border-border-secondary rounded-lg h-28 p-2 shadow-sm shadow-[#101828]/5 focus:border-tBlue focus-within:outline-0 outline-0 resize-none"
              required
              placeholder="Input Text"
              id="messages"
              minLength={5}
            />
          </section>
          <button
            className="w-full bg-pp text-white flex justify-between items-center p-1 rounded-full"
            type="submit"
          >
            <span className="px-5">Contact us</span>
            <span>
              <FaArrowRight
                enableBackground={true}
                className="text-pp p-2.5 bg-white rounded-full"
                size={40}
              />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
