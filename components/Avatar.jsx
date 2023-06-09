import Image from "next/image";
import React from "react";

const Avatar = ({ img, active, notify, current }) => {
  return (
    <div className="relative">
      <div className="absolute -top-[4px] -right-1 text-[10px] bg-red-500 font-[900] text-white px-[6px] py-[2px] rounded-full max-h-[20px]">
        {notify}
      </div>
      <Image
        src={img}
        className={`w-[32px] ${
          !current ? "border-2 border-blue-500 p-[1px]" : ""
        } h-[32px] rounded-full mx-auto `}
        width={500}
        height={500}
        alt="avatar"
      />
      {!active && notify != "" && (
        <div className="absolute -bottom-[4px] -right-1 w-[16px] h-[16px] bg-red-500 font-[900] text-white  rounded-full max-h-[20px] border-[3px] border-white "></div>
      )}
      {active && notify != "" && (
        <div className="absolute -bottom-[4px] -right-1 w-[16px] h-[16px] bg-green-500 font-[900] text-white  rounded-full max-h-[20px] border-[3px] border-white "></div>
      )}
    </div>
  );
};

export default Avatar;
