import React from "react";
import Signin from "../components/account/Signin";
import Navbar from "../components/home/Navbar";

function SigninPage() {
  return (
    <div className="w-full">
      <Navbar />
      <Signin />
    </div>
  );
}

export default SigninPage;
