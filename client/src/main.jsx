import { StrictMode } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./styles/App.css";
import "./styles/index.css";

import App from "./App.jsx";
import HomePage from "./pages/Home.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import SigninPage from "./pages/SigninPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="w-screen h-screen flex items-center justify-center flex-col gap-5">
        <p className="text-5xl font-bold underline decoration-rose-600">
          <span className="text-rose-600">404</span> Not Found
        </p>
        <p className="text-lg">
          Return to{" "}
          <a className=" px-5 py-2 rounded-full bg-tBlue text-white" href="/">
            Home Page
          </a>{" "}
        </p>
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/account",
        children: [
          {
            path: "login",
            element: <SigninPage />,
          },
          {
            path: "signup",
            element: <SignupPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
