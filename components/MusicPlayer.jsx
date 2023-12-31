import React from "react";
import Image from "next/image";
import { BiShuffle } from "react-icons/bi";
import { AiFillBackward, AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { RxLoop } from "react-icons/rx";
import songs from "@/data/songs";
const MUsicPlayer = () => {
  return (
    <>
      <div className="flex justify-center mt-[2%]">
        <input type="range" className="h-[4px] w-[98%] bg-red-700  " />
      </div>
      <div className="h-20 w-full bg-[#0a0a0a]  flex items-center p-[2%] gap-[20%]">
        <div className="flex justify-between w-[12%] items-center">
          <Image
            src="/images/musiclogo_musicplayer.png"
            height={50}
            width={50}
            alt="musicplayer"
            className="rounded-full"
          />

          <h1 className="text-white text-sm">Shape Of You</h1>
        </div>
        <div className="text-2xl gap-[15%] flex w-full items-center">
          <BiShuffle className="text-slate-400 text-lg justify-center md:text-2xl " />
          <div className="flex gap-[4%] w-[50%] ">
            <AiFillStepBackward className="text-white text-lg md:text-4xl" />

            <BsFillPlayFill className="text-white text-2xl md:text-4xl" />

            <AiFillStepForward className="text-white text-lg md:text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MUsicPlayer;
