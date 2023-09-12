import React from "react";
import Image from "next/image";
import { BiShuffle } from "react-icons/bi";
import { AiFillStepBackward } from "react-icons/ai";
import { AiFillStepForward } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { RxLoop } from "react-icons/rx";
const MUsicPlayer = () => {
  return (
    <>
      <div className="bg-red-500 h-[0.25rem] w-full mt-[3%]">
        <input type="range" className="w-[98%] h-1 rounded-full bg-red-700" />
      </div>
      <div className="h-20 w-full bg-[#0a0a0a]  flex items-center p-[2%]">
        <div className="">
          <Image
            src="/images/musiclogo_musicplayer.png"
            height={50}
            width={50}
            alt="musicplayer"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default MUsicPlayer;
