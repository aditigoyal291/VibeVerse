import React from "react";
import Image from "next/image";
import { options1, options2 } from "@/data/options";
import Options from "./Options";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <>
      <div className="h-16 w-full bg-dark-100 p-2">
        {" "}
        {/* navbar creation */}
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center gap-5">
            <Image
              src="/images/logo.jpg"
              width={48}
              height={48}
              alt="logo"
              className="rounded-full"
            />
            <h1 className="hidden md:flex text-lg font-semibold items-center justify-center  text-white">
              VibeVerse
            </h1>
          </div>
          <form className="flex items-center">
            <input
              type="search"
              className="bg-backgroud rounded-lg h-[2rem] outline-none border-[1px] border-slate-400 text-white p-4 pr-10 w-[12rem] md:h-[2.5rem] "
            />
            <Image
              src="/images/search.png"
              width={20}
              height={20}
              alt="search"
              className="-translate-x-8"
            />
          </form>
          <div className="md:hidden">
            <Menu />
          </div>
          <div className="hidden md:flex gap-5 justify-center items-center">
            <>
              {options1.map((items) => (
                <span
                  key={items.id}
                  className="flex justify-between text-white text-xs"
                >
                  {items.option}
                </span>
              ))}
              <Options />
            </>
            {options2.map((items) => (
              <span
                key={items.id}
                className="justify-between text-white text-xs hidden lg:flex"
              >
                {items.option}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
