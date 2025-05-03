import React from "react";

import { useLocation } from "react-router-dom";
import logo from "/icons/logo.svg";

// social icons
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  const { pathname } = useLocation();

  if (pathname.includes("/landing") || pathname.includes("/rtl/landing"))
    return <div></div>;
  else
    return (
      <div className="p-5 min-lg:px-20 min-lg:pt-20 bg-lightgray text-[#344054] rounded-xl ">
        <div className="max-w-310 w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="grid grid-cols-1 gap-10">
            <div className="grid gap-5">
              <span className="flex items-center justify-center w-fit gap-2 text-2xl font-semibold">
                <img className="bg-white rounded-full" src={logo} /> Mubhir
              </span>
              <p className="text-base font-medium">
                A platform offering mock tests and resources for the General
                Aptitude Test.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-5">
                <p className="font-semibold text-pp">
                  Subscribe for SAT tips and updates
                </p>
                <section className="w-full min-md:w-fit bg-white flex justify-between items-center p-1 rounded-full border border-gray-300">
                  <input
                    className="px-2 min-lg:px-5 outline-none border-none focus-within:outline-0 focus:border-none w-fit"
                    placeholder="Enter your mail"
                    type="email"
                    required
                  />
                  <span>
                    <button className="bg-pp text-white rounded-full px-4 py-2">
                      Subscribe
                    </button>
                  </span>
                </section>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg text-pp">Quick Links</p>

            <ul className="space-y-2 font-medium text-[#344054] ">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Who We Are</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-pp">Contact Us</p>

            <div className="grid gap-2 font-normal space-y-1 my-5">
              <p className="font-semibold flex items-center gap-3">
                <span>
                  <FiPhone className="text-pp" size={20} />
                </span>
                <a className="font-light" href="mailto:support@mubhir.sa">
                  +1 234 5678 90
                </a>
              </p>
              <p className="font-semibold flex items-center gap-3">
                <span>
                  <MdOutlineMail className="text-pp" size={20} />
                </span>
                <a className="font-light" href="mailto:support@mubhir.sa">
                  support@mubhir.sa
                </a>
              </p>
              <p className="font-semibold flex items-center gap-3">
                <span>
                  <HiOutlineLocationMarker className="text-pp" size={20} />
                </span>
                <span className="font-light">Riyadh, Saudi Arabia.</span>
              </p>
            </div>

            <div className="flex gap-2 items-center my-14">
              <button>
                <FaInstagram
                  className="text-pp p-2 bg-white hover:bg-pp hover:text-white transition-colors cursor-pointer rounded-full"
                  enableBackground={true}
                  size={32}
                />
              </button>
              <button>
                <FaTiktok
                  className="text-pp p-2 bg-white hover:bg-pp hover:text-white transition-colors cursor-pointer rounded-full"
                  enableBackground={true}
                  size={32}
                />
              </button>
              <button>
                <FaYoutube
                  className="text-pp p-2 bg-white hover:bg-pp hover:text-white transition-colors cursor-pointer rounded-full"
                  enableBackground={true}
                  size={32}
                />
              </button>
              <button>
                <FaXTwitter
                  className="text-pp p-2 bg-white hover:bg-pp hover:text-white transition-colors cursor-pointer rounded-full"
                  enableBackground={true}
                  size={32}
                />
              </button>
              <button>
                <FaFacebookF
                  className="text-pp p-2 bg-white hover:bg-pp hover:text-white transition-colors cursor-pointer rounded-full"
                  enableBackground={true}
                  size={32}
                />
              </button>
            </div>
          </div>
          {/* bottom */}
          <div className="flex lg:col-span-3 items-center justify-between border-t border-t-white h-fit mt-5 text-sm">
            <p className="text-left font-normal py-3.5">
              All rights reserved to (Mubarak) Company for the year 2025
            </p>
            <ul className="grid grid-cols-2">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer;
