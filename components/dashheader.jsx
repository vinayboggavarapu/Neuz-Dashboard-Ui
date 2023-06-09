import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Center = styled.div``;
const Right = styled.div``;
const Li = styled.li`
  font-family: var(--Inter);
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Dashheader = () => {
  const [active, setactive] = useState("Timeline");
  const profiles = ["avatar3.jpg", "avatar2.jpg", "avatar3.jpg", "avatar3.jpg"];
  const text = "text-[#3B82F6] underline underline-offset-8 decoration-1";
  const notActive = "text-[#98A2B3;]";
  const profileTruncate = profiles?.slice(0, 2);
  const profilesleft = profiles?.length - profileTruncate?.length;
  return (
    <div className="flex flex-col gap-6 ">
      {/* Top */}

      <Left className="flex flex-col lg:flex-row">
        <div className="  flex lg:flex-row justify-between items-center w-[228px]">
          <h2 className="text-[30px] font-[700] text-[#1F2633;]">
            Task Boards
          </h2>
          <Image
            src={"/dashhead/edit.png"}
            className="w-[18px] h-[18px]"
            width={400}
            height={400}
            alt="icon"
          />
        </div>
        <div className="nodecoration hidden lg:flex lg:flex-row gap-6">
          <Li
            onClick={() => setactive("Timeline")}
            className={` ${active === "Timeline" ? text : notActive}`}
          >
            TimeLine
          </Li>
          <Li
            onClick={() => setactive("Calendar")}
            className={`${active === "Calendar" ? text : notActive}`}
          >
            Calendar
          </Li>
          <Li
            onClick={() => setactive("Dashboard")}
            className={`${active === "Dashboard" ? text : notActive}`}
          >
            Dashboard
          </Li>
          <Li
            onClick={() => setactive("Progress")}
            className={`${active === "Progress" ? text : notActive}`}
          >
            Progress
          </Li>
          <Li
            onClick={() => setactive("Forms")}
            className={`${active === "Forms" ? text : notActive}`}
          >
            Forms
          </Li>
          <Li
            onClick={() => setactive("More")}
            className={`${active === "More" ? text : notActive}`}
          >
            More
          </Li>
        </div>
        <div className="flex gap-2">
          <div className="flex relative  [&>*:first-child]:ml-0 items-center">
            {profileTruncate?.map((profile, index) => {
              return (
                <Image
                  src={"/" + profile}
                  key={index}
                  className="w-[40px] -ml-4 border-[2px] border-white rounded-full h-[40px]"
                  width={400}
                  quality={100}
                  height={400}
                  alt="icon"
                />
              );
            })}
          </div>
          {profilesleft > 0 && (
            <p className="w-[40px] h-[40px] -ml-6 bg-[#F2F4F7] rounded-full justify-center flex items-center z-10 text-[#606C80] text-[10px] font-[800]">
              +{profilesleft}
            </p>
          )}
          <div>
            {profiles?.length > 0 && (
              <Image
                src="/addbtn.svg"
                className="w-[40px] h-[40px]"
                width={400}
                quality={100}
                height={400}
                alt="icon"
              />
            )}
          </div>
        </div>
      </Left>
      {/* Bottom */}
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 lg:items-center justify-between w-full">
        {/* Left */}
        <div
          className="flex flex-col lg:flex-row
        
        
        
        
        
        
         lg:items-center gap-4"
        >
          {/* InnerLeft */}
          <div className="flex  items-center rounded-[8px]  h-10 overflow-hidden">
            <div className="flex items-center gap-2  bg-[#FAFBFC] border-[#EBEEF2] border-[1px] py-[15px] px-[16px]">
              <Image
                src="/dashhead/grid.png"
                className="w-[18px] h-[18px]"
                width={300}
                height={300}
                alt="icon"
              />
              <p className="text-[#606C80] text-[12px]">Board View</p>
            </div>
            <div className="flex items-center gap-2 border-[#EBEEF2] border-[1px] bg-white py-[15px] px-[16px]">
              <Image
                src="/dashhead/hammenu.png"
                className="w-[18px] h-[18px]"
                width={300}
                height={300}
                alt="icon"
              />
              <p className="text-[#606C80] text-[12px]">List View</p>
            </div>
          </div>
          {/* InnerCenter */}
          {/* Lock */}
          <div className="flex h-6 border-l border-r items-center gap-2  py-[15px] px-[16px]">
            <Image
              src="/dashhead/lock.png"
              className="w-[18px] h-[18px]"
              width={300}
              height={300}
              alt="icon"
            />
            <p className="text-[#98A2B2] text-[11px] font-[700]">
              Limited Access
            </p>
            <Image
              src="/dashhead/arrowDown.png"
              className="w-[18px] h-[18px]"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          {/* Owner */}
          <div className="flex items-center gap-2">
            <p className="text-[#98A2B2] text-[11px] font-[700]">Owners</p>
            <Image
              src="/dashhead/twitter.png"
              className="w-[24px] h-[24px]"
              width={300}
              height={300}
              alt="icon"
            />
            <p className="text-[#606C80] text-[11px] font-[700]">
              Twitter Team
            </p>
          </div>
          {/* InterRight */}
        </div>
        {/* Search */}
        <div className="flex bg-white h-[40px] w-[176px] items-center rounded-[8px] px-3">
          <div className="flex items-center gap-2">
            <Image
              src="/search.svg"
              className="w-[20px] h-[18px]"
              width={300}
              height={300}
              alt="icon"
            />
            <input
              placeholder="Search Tasks"
              className="bg-transparent w-fit focus:outline-none  placeholder:text-[12px] font-[700]"
            />
          </div>
        </div>
        {/* Right Icons Group */}
        <div className="flex">
          <Image
            src="/dashhead/filebtn.png"
            className="w-[40px] h-[40px]"
            width={300}
            height={300}
            alt="icon"
          />
          <Image
            src="/dashhead/list.png"
            className="w-[40px] h-[40px]"
            width={300}
            height={300}
            alt="icon"
          />
          <Image
            src="/dashhead/listcenter.png"
            className="w-[40px] h-[40px]"
            width={300}
            height={300}
            alt="icon"
          />
          <Image
            src="/dashhead/circlebtn.png"
            className="w-[40px] h-[40px]"
            width={300}
            height={300}
            alt="icon"
          />
          <Image
            src="/dashhead/gridbtn.png"
            className="w-[40px] h-[40px]"
            width={300}
            height={300}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashheader;
