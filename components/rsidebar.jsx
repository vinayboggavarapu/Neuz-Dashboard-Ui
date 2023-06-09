import Image from "next/image";
import React from "react";
import Avatar from "./Avatar";

const Rsidebar = () => {
  return (
    <div className="flex flex-col w-[88px] min-h-screen">
      <section className="px-[32px] py-[32px] border-b border-l">
        <Image
          src="/close.svg"
          className="w-[24px] h-[24px] "
          width={500}
          height={500}
          alt="icon"
        />
      </section>
      <div className="flex flex-col items-center justify-center h-full border-l">
        <section className="flex gap-[16px] flex-col ">
          <Image
            src="/avatar3.jpg"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Avatar
            img={"/avatar3.jpg"}
            active={true}
            notify={"12"}
            current={false}
          />
          <Image
            src="/avatar4.jpg"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Image
            src="/avatar5.jpg"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Image
            src="/avatar3.jpg"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Avatar
            img={"/avatar4.jpg"}
            active={false}
            notify={"1"}
            current={true}
          />
          <Image
            src="/Avatar1.png"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Avatar
            img={"/avatar4.jpg"}
            active={false}
            notify={"3"}
            current={true}
          />
          <Image
            src="/avatar6.png"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Image
            src="/avatar7.png"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Image
            src="/avatar8.png"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
          <Image
            src="/avatar4.jpg"
            className="w-[32px] h-[32px] rounded-full mx-auto "
            width={500}
            height={500}
            alt="avatar"
          />
        </section>
      </div>
      <section className="px-[32px] py-[32px] border-t border-l">
        <Image
          src="/arrowforward.png"
          className="w-[24px] h-[24px] rounded-full mx-auto "
          width={500}
          height={500}
          alt="avatar"
        />
      </section>
    </div>
  );
};

export default Rsidebar;
