import React from "react";
import contactbg from "/images/contactbg.png";

// contact icons
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

// social icons
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="p-28 max-w-360 mx-auto flex">
      {/* left content */}
      <div className="w-auto rounded-xl p-8 space-y-6">
        <p className="text-5xl font-bold">Contact Information</p>
        <p className="font-normal text-xl text-midgray">
          Our team is here to answer your questions and assist you.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 my-6 w-full">
          <div className="flex gap-2 items-start space-y-5">
            {/* icon */}
            <div className="gap-2 w-fit p-4 bg-heroBg rounded-md">
              <FiPhone color="#3927CE" />
            </div>
            <section>
              <p className="font-normal text-sm opacity-80">Number</p>
              <p className="font-bold text-sm">(603) 555-0123</p>
            </section>
          </div>
          <div className="flex gap-2 items-start space-y-5">
            {/* icon */}
            <div className="gap-2 w-fit p-4 bg-heroBg rounded-md">
              <MdOutlineMailOutline color="#3927CE" />
            </div>
            <section>
              <p className="font-normal text-sm opacity-80">Email</p>
              <p className="font-bold text-sm">info@yourmail</p>
            </section>
          </div>
          <div className="flex gap-2 items-start space-y-5">
            {/* icon */}
            <div className="gap-2 w-fit p-4 bg-heroBg rounded-md">
              <GoLocation color="#3927CE" />
            </div>
            <section>
              <p className="font-normal text-sm opacity-80">Address</p>
              <p className="font-bold text-sm">Riyadh, Saudi Arabia</p>
            </section>
          </div>
        </div>

        <div>
          {/* 4 links */}
          <div className="flex gap-3">
            <a href="#">
              <FaFacebook
                size={20}
                className="hover:text-[#3927ce] text-[#4a4f5a]"
              />
            </a>
            <a href="#">
              <FaTwitter
                size={20}
                className="hover:text-[#3927ce] text-[#4a4f5a]"
              />
            </a>
            <a href="#">
              <FaLinkedinIn
                size={20}
                className="hover:text-[#3927ce] text-[#4a4f5a]"
              />
            </a>
            <a href="#">
              <FaInstagram
                size={20}
                className="hover:text-[#3927ce] text-[#4a4f5a]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 rounded-2xl overflow-hidden flex justify-center items-center relative w-auto flex-auto p-20">
        {/* background image */}
        <img
          src={contactbg}
          alt=""
          className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl -z-10"
        />

        {/* form */}
        <form
          className="text-text-primary bg-white w-[390px] h-auto space-y-6 rounded-lg p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3>Get In Touch</h3>

          <section className="grid gap-2">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-border-secondary rounded-lg h-12 p-2 shadow-sm shadow-[#101828]/5 focus:border-tBlue focus-within:outline-0 outline-0"
              type="email"
              required
              placeholder="Your email"
              id="email"
            />
          </section>
          <section className="grid gap-2">
            <label className="font-medium" htmlFor="messages">
              Messages
            </label>
            <textarea
              className="border-2 border-border-secondary rounded-lg h-28 p-2 shadow-sm shadow-[#101828]/5 focus:border-tBlue focus-within:outline-0 outline-0 resize-none"
              required
              placeholder="Input Text"
              id="messages"
              minLength={5}
            />
          </section>
          <button className="btn_default w-full" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
