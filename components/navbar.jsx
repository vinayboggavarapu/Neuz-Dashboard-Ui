"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Li = styled.li`
  width: 51px;
  height: 16px;
  font-family: var(--Inter);
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  color: #7a8699;
`;
const Navbar = () => {
  return (
    <div className="headerstyle hidden lg:flex">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-[37.06px]">
          <div className="flex bg-white gap-[97px]  rounded-[8px] border shadow-sm h-[48px] items-center px-[16px]">
            <div className="flex items-center w-[113px] gap-[13.23px]">
              <Image
                src="/search.svg"
                className="w-[20px] h-[18px]"
                width={300}
                height={300}
                alt="icon"
              />
              <input
                placeholder="Search Tasks"
                className="bg-transparent focus:outline-none w-fit  placeholder:text-[12px] font-[700]"
              />
            </div>
            <Image
              src="/input.svg"
              className="w-[20px] h-[18px]"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          <Image
            src="/mic.png"
            className="w-[13.88px] h-[19px]"
            width={300}
            height={300}
            alt="icon"
          />
        </div>
        {/* Middle */}
        <div className="nodecoration hidden lg:flex w-[459px] justify-between">
          <Li className="!font-semibold !text-black cursor-pointer">
            Dashboard{" "}
          </Li>
          <Li>My Tasks</Li>
          <Li>Reporting</Li>
          <Li>Portfolios</Li>
          <Li>Goals</Li>
        </div>
        {/* Right */}
        <div className="flex  gap-[22.41px] items-center  justify-between">
          <Image
            src="/folder.png"
            className="w-[20px] h-[16px]"
            width={300}
            height={300}
            alt="icon"
          />
          <Image
            src="/notification.png"
            className="w-[15.17px] h-[19.5px]"
            width={300}
            height={300}
            alt="icon"
          />
          <Avatar img={"/avatar.webp"} notify={"3"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
