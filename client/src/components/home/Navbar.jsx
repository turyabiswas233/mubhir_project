import React from "react";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const nevigate = useNavigate();
  return (
    <nav className="flex items-center justify-between my-2 ring-2 ring-pp w-full gap-10 bg-white text-xs md:text-sm xl:text-base rounded-full">
      <div className="flex items-center justify-center w-fit gap-2">
        <img
          className="min-w-12 object-cover"
          src={logo}
          alt="logo"
          width={48}
          height={48}
        />{" "}
        <p className="font-semibold text-2xl">Mubhir</p>
      </div>

      <ul className="flex items-center justify-center gap-10 w-auto flex-auto ">
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
            About us
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/pricing"
          >
            Subscriptions
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/sat-preparation"
          >
            Latest exams
          </a>
        </li>
        <li>
          <a
            className="text-navLink_button hover:text-black transition-colors ease-out"
            href="/testimonials"
          >
            Free refund
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
      </ul>
      <div className="ml-auto flex items-center gap-3">
        <button
          className="ring-2 ring-pp rounded-full text-pp font-medium px-6 py-3"
          onClick={() => nevigate("/account/signup")}
        >
          Registration
        </button>
        <button
          className="ring-2 ring-pp rounded-full text-white bg-pp font-medium px-6 py-3"
          onClick={() => nevigate("/account/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
