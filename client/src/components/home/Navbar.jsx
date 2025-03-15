import React, { useState } from "react";
import logo from "/icons/logo.svg";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between my-2 ring-2 ring-pp w-full gap-10 text-xs md:text-sm xl:text-base rounded-full sticky top-3 z-50">
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

      <ul className="hidden lg:flex items-center justify-center gap-10 w-auto flex-auto">
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
            href="/about"
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
          onClick={() => navigate("/account/signup")}
        >
          Registration
        </button>
        <button
          className="ring-2 ring-pp rounded-full text-white bg-pp font-medium px-6 py-3"
          onClick={() => navigate("/account/login")}
        >
          Login
        </button>
      </div>

      <button
        className="lg:hidden flex items-center px-3 py-2 border rounded text-pp border-pp"
        onClick={toggleMobileMenu}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-supergray/40 bg-opacity-50 backdrop-blur-xs z-40">
          <div className="fixed top-0 right-0 w-64 bg-white h-full z-50 shadow-lg">
            <button
              className="absolute top-4 right-4 text-pp"
              onClick={toggleMobileMenu}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1 1 0 01-1.414 0L10 11.914l-2.934 2.935a1 1 0 01-1.414-1.414l2.935-2.934-2.935-2.934a1 1 0 011.414-1.414L10 9.086l2.934-2.935a1 1 0 011.414 1.414l-2.935 2.934 2.935 2.934a1 1 0 010 1.414z" />
              </svg>
            </button>
            <ul className="flex flex-col items-start gap-4 p-4 mt-20 text-base">
              <li>
                <a
                  className="text-navLink_button hover:text-pp transition-colors ease-out"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-navLink_button hover:text-pp transition-colors ease-out"
                  href="/about"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-navLink_button hover:text-pp transition-colors ease-out"
                  href="/pricing"
                >
                  Subscriptions
                </a>
              </li>
              <li>
                <a
                  className="text-navLink_button hover:text-pp transition-colors ease-out"
                  href="/sat-preparation"
                >
                  Latest exams
                </a>
              </li>
              <li>
                <a
                  className="text-navLink_button hover:text-pp transition-colors ease-out"
                  href="/testimonials"
                >
                  Free refund
                </a>
              </li>
              <li>
                <a
                  className="text-navLink_button hover:text-pp transition-colors ease-out"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
