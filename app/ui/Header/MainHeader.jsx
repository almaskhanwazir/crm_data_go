"use client";

import React from "react";
import {
  Link,
  Input,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { SearchIcon } from "./SearchIcon.jsx";

export default function App() {
  return (
    <div className="bg-white flex justify-between w-full p-4">
      <div className="bbb">
        <Link href="/">
          <div className=" cursor-pointer">
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">ACME</p>
          </div>
        </Link>
      </div>
      <div className="">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[45rem] h-10 border rounded-xl",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
      </div>
      <div className="flex">
        <button className="bg-blue-500 text-white px-4 py-2">Button A</button>
        <button className="bg-green-500 text-white px-4 py-2">Button B</button>
        <button className="bg-red-500 text-white px-4 py-2">Button C</button>
      </div>
    </div>
  );
}
