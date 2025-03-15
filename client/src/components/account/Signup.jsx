import React from "react";
import logo from "/icons/logo.svg";
import ac_std from "/images/ac_std.png";
function SignUp() {
  return (
    <div className="flex items-center justify-center overflow-y-auto">
      <img
        className="w-1/3 h-auto object-contain rounded-xl hidden lg:block"
        src={ac_std}
        alt={"student"}
      />

      <div className="p-10 lg:p-28">
        <form className="space-y-6">
          <section>
            <img
              className="rounded-lg"
              src={logo}
              alt={"logo"}
              width={50}
              height={50}
            />
          </section>

          <section>
            <header>
              <h1 className="text-2xl font-bold text-text-primary">
                Create Account
              </h1>
              <p className="font-normal">
                Join us now by creating an account and start your journey with
                our platform.
              </p>
            </header>
          </section>

          <section className="grid gap-2">
            <label className="font-medium text-sm" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border-2 border-border-secondary rounded-lg h-12 p-3 shadow-sm shadow-[#101828]/5 focus:border-pp focus-within:outline-0 outline-0"
              type="tel"
              required
              placeholder="Input Number"
              id="phone"
              name="phoneNumber"
            />
          </section>
          <section className="grid gap-2">
            <label className="font-medium text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 border-border-secondary rounded-lg h-12 p-3 shadow-sm shadow-[#101828]/5 focus:border-pp focus-within:outline-0 outline-0"
              type="email"
              required
              placeholder="Input Number"
              id="email"
              name="email"
            />
          </section>

          <section className="grid gap-2">
            <label className="font-medium text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-border-secondary rounded-lg h-12 p-3 shadow-sm shadow-[#101828]/5 focus:border-pp focus-within:outline-0 outline-0"
              type="password"
              required
              placeholder="Input Your Password"
              id="password"
              name="password"
            />
            {/* tips */}
            <div className="text-sm text-[#475569] font-normal">
              <p>Password must be 8 characters with at least</p>
              <p>1 number, 1 letter and 1 special symbol</p>
            </div>
          </section>
          <section className="grid gap-2">
            <label className="font-medium text-sm" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="border-2 border-border-secondary rounded-lg h-12 p-3 shadow-sm shadow-[#101828]/5 focus:border-pp focus-within:outline-0 outline-0"
              type="password"
              required
              placeholder="confirm Password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </section>

          <button className="rounded-full bg-pp w-full py-3 text-white cursor-pointer" type="submit">
            Create Account
          </button>
        </form>

        <p className="text-center mt-5">
          <a href="/account/login" className="hover:underline">
            I have an account? Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
