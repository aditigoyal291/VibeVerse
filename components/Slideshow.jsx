"use client";

import React from "react";
import { Carousel } from "@mantine/carousel";
import images from "@/data/image";
import Image from "next/image";
const Slideshow = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center border-white/20 border-[1px] rounded-md p-2 w-full md:w-[50%] mt-[2%]">
          <Carousel withIndicators className="text-white " loop>
            {images.map((items, i) => (
              <Carousel.Slide className="" key={i}>
                <Image
                  src={items.image}
                  height={600}
                  width={400}
                  alt="Slideshow images"
                  className="z-20 object-cover rounded-md w-full h-full"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
