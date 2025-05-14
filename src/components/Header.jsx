import React from "react";
import { FaTasks } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center  gap-x-2">
          <a href="/" className="px-2">
            <FaTasks className="bg-red-500 size-8 text-black " />
          </a>
          <span className="text-white">
            Task <br /> manager
          </span>
        </div>
      </nav>
    </>
  );
}
