import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[45px] flex justify-between px-10 items-center">
      <div className="flex gap-x-4 items-center">
        <button className="text-sm font-semibold">Benefits</button>

        <button className="text-sm font-semibold">How it works?</button>
      </div>

      <div className="w-[50%] flex justify-center">
        <span className="text-2xl font-bold text-violet-500 ">
          cv.
          <span className=" text-emerald-400 font-bold">io</span>
        </span>
      </div>

      <div className="flex gap-x-4 items-center">
        <button className="text-sm font-semibold">Register</button>

        <button className="text-sm font-semibold">Login</button>
      </div>
    </header>
  );
};

export default Header;
