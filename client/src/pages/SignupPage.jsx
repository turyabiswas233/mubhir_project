import React from "react";
import SignUp from "../components/account/Signup";
import Navbar from "../components/home/Navbar";

function SignupPage() {
  return (
    <div className="w-full">
      <Navbar />
      <SignUp />
    </div>
  );
}

export default SignupPage;
