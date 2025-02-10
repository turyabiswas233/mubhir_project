import React from "react";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const nevigate = useNavigate();
  return (
    <nav className="flex justify-start  w-auto max-w-310 items-center gap-10 bg-white text-xs md:text-sm xl:text-base mx-auto">
      <div>
        <img
          className="min-w-12 object-cover"
          src={logo}
          alt="logo"
          width={48}
          height={48}
        />
      </div>

      <ul className="flex gap-10 items-center ">
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/"
          >
            Who We Are
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/pricing"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/"
          >
            SAT Preparation
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/testimonials"
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/contact"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/"
          >
            Blog
          </a>
        </li>
      </ul>
      <div className="ml-auto">
        <button className="btn_default" onClick={()=> nevigate("/account/signin")}>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
