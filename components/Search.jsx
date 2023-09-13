"use client";

import React, { useState } from "react";

import Image from "next/image";
const Search = () => {
  const [searchData, setsearchData] = useState("");
  return (
    <form className="flex items-center">
      <input
        type="search"
        className="bg-backgroud rounded-lg h-[2rem] outline-none border-[1px] border-slate-400 text-white p-4 pr-10 w-[12rem] md:h-[2.5rem] md:w-[20rem] md:rounded-xl "
        onChange={(event) => {
          setsearchData(event.target.value);
        }}
      />
      {search
        .filter((val) => {
          if (searchData == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchData.toLowerCase())
          ) {
            return val;
          }
        })
        .map((items, i) => (
          <p key={i} className="hidden">
            {items.name}
          </p>
        ))}
      <Image
        src="/images/search.png"
        width={20}
        height={20}
        alt="search"
        className="-translate-x-8"
      />
    </form>
  );
};

export default Search;

export const search = [
  {
    name: "Aditi",
    age: 20,
    gemder: "Female",
  },
  {
    name: "Sarang",
    age: 21,
    gemder: "male",
  },
  {
    name: "Nistha",
    age: 20,
    gemder: "Female",
  },
  {
    name: "Pratyush",
    age: 20,
    gemder: "male",
  },
  {
    name: "Pragya",
    age: 19,
    gemder: "Female",
  },
  {
    name: "Aditya",
    age: 18,
    gemder: "male",
  },
  {
    name: "Shreya",
    age: 21,
    gemder: "Female",
  },
];
