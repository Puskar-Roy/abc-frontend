"use client";
import { useState } from "react";
import Image from "next/image";
import Down from "@/assets/svg/reviceIcons/down.svg";
import Up from "@/assets/svg/reviceIcons/up.svg";
import Link from "next/link";
const DropDownCard = () => {
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <div
      onClick={() => setDrop(!drop)}
      className="py-4  cursor-pointer px-4 text-[#374051] flex gap-1 rounded-xl shadow-sm border mb-2 justify-between flex-col font-[400] bg-white "
    >
      <div className="flex justify-between">
        <h1 className="text-[21px] leading-[21px] font-[500] flex justify-center items-center gap-2">
          <span>1.</span>Quantitative Analysis
        </h1>
        <div className="flex text-[18px] leading-[21.6px] font-[500] text-[#527dff]  gap-2 justify-center items-center cursor-pointer">
          {drop ? <h1>Select All</h1> : <h1>Completed</h1>}

          {drop ? (
            <Image
              onClick={() => setDrop(!drop)}
              src={Up}
              alt="Down"
              height={15}
              width={15}
            />
          ) : (
            <Image
              onClick={() => setDrop(!drop)}
              src={Down}
              alt="Down"
              height={15}
              width={15}
            />
          )}
        </div>
      </div>
      {drop && (
        <div
          onClick={(e) => e.stopPropagation()}
          className=" p-4 m-3 flex justify-center flex-col items-center  bg-[#f0f8ff] rounded-lg gap-[14px]"
        >
          <div className="flex justify-between w-full">
            <div className="text-[18px] leading-[18px]  font-[400] flex justify-center items-center gap-2">
              <span>1.1</span>Simplification
            </div>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between w-full">
            <div className="text-[18px] leading-[18px]  font-[400] flex justify-center items-center gap-2">
              <span>1.2</span>Simplification
            </div>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between w-full">
            <div className="text-[18px] leading-[18px]  font-[400] flex justify-center items-center gap-2">
              <span>1.3</span>Simplification
            </div>
            <input type="checkbox" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownCard;
