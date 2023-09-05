"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export default function Example() {
  return (
    <div className=" text-right">
      <Menu as="div" className="flex justify-center">
        <div>
          <div>
            <Menu.Button className="justify-center rounded-md  bg-opacity-20  text-sm font-medium text-white ">
              <AiOutlineDown className="flex lg:hidden" />
            </Menu.Button>
            <Menu.Button className="justify-center rounded-md  bg-opacity-20  text-sm font-medium text-white">
              <AiOutlineMenu className=" flex md:hidden" />
            </Menu.Button>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-2 mt-8 w-[13rem] origin-top-right divide-y divide-gray-100 rounded-md text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white bg-[#0a0a0a]" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Podcasts
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " text-white bg-[#0a0a0a]" : "text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Contact Us
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
