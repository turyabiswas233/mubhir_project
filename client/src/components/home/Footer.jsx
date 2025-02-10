import React from "react";
import logo from "/icons/logo_light.svg";
import fb from "/icons/social/facebook.svg";
import twitter from "/icons/social/twitter.svg";
import linkedin from "/icons/social/linkedin.svg";
import instagram from "/icons/social/instagram.svg";

function Footer() {
  return (
    <div className="px-20 pt-20 bg-supergray text-white ">
      <div className="max-w-310 w-full mx-auto flex gap-10 items-start justify-evenly">
        <div className="grid grid-cols-1 gap-10 max-w-52">
          <div className="grid gap-5">
            <img src={logo} />
            <p className="text-[#E2E2E2] text-[20px] font-normal">
              A platform offering mock tests and resources for the General
              Aptitude Test.
            </p>
          </div>

          <div className="flex gap-3">
            <a href="#">
              <img src={fb} width={20} height={20} />
            </a>
            <a href="#">
              <img src={twitter} width={20} height={20} />
            </a>
            <a href="#">
              <img src={linkedin} width={20} height={20} />
            </a>
            <a href="#">
              <img src={instagram} width={20} height={20} />
            </a>
          </div>
        </div>

        <div className="grid gap-3">
          <p className="font-semibold text-xl">Quick Links</p>

          <div>
            <ul className="grid gap-3 font-light opacity-80">
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
        </div>

        <div>
          <p className="font-semibold text-xl">Contact Info</p>

          <div className="grid gap-2 font-normal opacity-80">
            <p className="font-semibold">
              Email: <a className="font-light" href="mailto:support@mubhir.sa">support@mubhir.sa</a>{" "}
            </p>
            <p className="font-semibold">
              Address: <span className="font-light">Riyadh, Saudi Arabia</span>
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-xl">Newsletter Signup:</p>

          <div className="grid grid-cols-1 gap-5">
            <p className="font-light opacity-80">Subscribe for SAT tips and platform updates.</p>
            <input
              className="outline-0 focus-within:outline-0 rounded-lg bg-transparent text-white p-3 focus:border-tBlue border-2 border-white transition-colors ease-linear duration-100"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your mail..."
            />
            <button className="btn_default" type="button">Join Now</button>
          </div>
        </div>
      </div>
      <p className="text-center font-normal text-lg text-[#E2E2E2]/90 pt-10 pb-20 border-t border-lightgray/10 mt-10">
        All rights reserved to (Mubarak) Company for the year 2025
      </p>
    </div>
  );
}

export default Footer;
