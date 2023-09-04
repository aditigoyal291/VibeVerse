import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <div className="h-16 w-full bg-dark-100 p-2">
        <div className="h-full w-full flex ">
          <div className="flex justify-between gap-5">
            <Image
              src="/images/logo.jpg"
              width={48}
              height={48}
              alt="logo"
              className="rounded-full"
            />
            <h1 className="hidden md:flex text-lg font-semibold items-center justify-center  text-white ">
              VibeVerse
            </h1>
            <form className="flex items-center">
              <input
                type="search"
                className="bg-backgroud rounded-lg h-[2rem] outline-none border-[1px] border-slate-400 text-white p-4 pr-10 w-[10rem] md:h-[2.5rem] md:w-[15rem]"
              />
              <Image
                src="/images/search.png"
                width={20}
                height={20}
                alt="search" className="-translate-x-8"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
