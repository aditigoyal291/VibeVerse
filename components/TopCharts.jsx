"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
const TopCharts = () => {
  return (
    <>
      <div className="flex ml-[4%]">
        <h1 className="text-white/80 my-[5%] text-2xl font-semibold">
          Top Charts
        </h1>
      </div>
      <div className="flex justify-center items-center rounded-lg">
        <Carousel
          withIndicators
          height={200}
          slideSize="20%"
          slideGap="md"
          loop
          align="start"
          className="flex justify-center items-center mx-[5%] "
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "50%" },
          ]}
        >
          {newrelease.map((items, i) => (
            <Carousel.Slide key={i}>
              <Image
                src={items.image}
                height={200}
                width={200}
                alt="new1"
                className="rounded-lg"
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TopCharts;

export const newrelease = [
  {
    id: 1,
    image: "/images/new1.webp",
  },
  {
    id: 2,
    image: "/images/new2.webp",
  },
  {
    id: 3,
    image: "/images/new3.webp",
  },
  {
    id: 4,
    image: "/images/new4.webp",
  },
  {
    id: 5,
    image: "/images/new5.webp",
  },
  {
    id: 6,
    image: "/images/new6.webp",
  },
  {
    id: 7,
    image: "/images/new7.webp",
  },
  {
    id: 8,
    image: "/images/new8.webp",
  },
];
