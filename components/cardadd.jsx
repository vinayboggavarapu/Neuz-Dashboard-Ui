import Image from "next/image";
import React from "react";

const Cardadd = () => {
  return (
    <div className="bg-white flex items-center rounded-[8px] h-fit py-[6px] flex-col gap-3">
      <Image
        src="/Icon.png"
        className=" w-[20px] h-[20px]"
        width={400}
        quality={100}
        height={400}
        alt="icon"
      />
    </div>
  );
};

export default Cardadd;
