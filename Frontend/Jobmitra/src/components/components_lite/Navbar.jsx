import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-white border-b-2">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold text-[#4682B4]">
            Job
            <span className="text-[#FF8C00]">Mitra</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Browse</li>
            <li className="cursor-pointer">Jobs</li>
          </ul>
          <div className="">
            <Button className="bg-[#4682B4]">Login</Button>
            <Button className="bg-[#4682B4] ms-2">Signup</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
