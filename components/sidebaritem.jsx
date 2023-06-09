import Image from "next/image";
import React from "react";

const Sidebaritem = ({ img, name, count }) => {
  return (
    <div className="flex justify-between">
      <div className="flex text-[12px] gap-4 text-[#1F2633] font-semibold justify-between items-center">
        <Image
          src={img}
          className="w-[20px] h-[20px] rounded-full"
          width={300}
          height={300}
          alt="icon"
        />
        {name}
      </div>
      {count ? (
        <div className="rounded-full flex items-center justify-center px-[8.5px] my-auto py-[5px] max-h-6 bg-blue-100">
          <p className="text-[#2563EB] text-[10px] font-[800]">{count}</p>
        </div>
      ) : (
        <div className="rounded-full flex items-center justify-center w-[24px] h-[24px] "></div>
      )}
    </div>
  );
};

export default Sidebaritem;
