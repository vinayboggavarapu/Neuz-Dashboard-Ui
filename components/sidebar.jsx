import Image from "next/image";
import React from "react";
import Sidebaritem from "./sidebaritem";

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col ">
      {/* Head */}
      <section className="hidden md:flex py-[30px] border-b items-center justify-between w-full px-[32px] mx-auto">
        <p className="text-[20px] font-[600]">Dashboard</p>
        <Image
          src="/dash.png"
          className="w-[17.59px] h-[12px] "
          width={500}
          height={500}
          alt="icon"
        />
      </section>
      {/* Content */}
      <section className="flex flex-col h-full gap-8 px-8">
        <div className=" flex items-center mt-8 justify-between   w-full">
          <div className="  relative flex gap-3 items-center justify-center ">
            <div className="flex items-center justify-center">
              <div className="absolute">
                <Image
                  src="/avatar.webp"
                  className="w-[32px] h-[32px] rounded-full"
                  width={500}
                  height={500}
                  alt="avatars"
                />
              </div>
              <div className="w-[38px] border-[2px] rounded-full border-[#3B82F6] h-[38px]" />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <p className="font-[700] text-[12px] text-[#1F2633]">
                  Nancy Martino
                </p>
                <p className="font-[700] text-[11px] text-[#B8BFCC]">
                  Designer
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/Arrows.png"
            className="w-[8.3px] h-[17.18px] rounded-full"
            width={300}
            height={300}
            alt="icon"
          />
        </div>
        <hr className="border" />
        {/* Dashboards */}
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-[#98A2B2] text-[12px] font-[700]">
              DASHBOARDS
            </h2>
            <Image
              src="/sidebar/keyup.png"
              className="w-[20px] h-[20px] rounded-full"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          <div className="flex gap-4 flex-col">
            <Sidebaritem
              img={"/sidebar/inbox.png"}
              name={"Inbox"}
              count={"4"}
            />
            <Sidebaritem
              img={"/sidebar/drive_folder_upload.png"}
              name={"Drive Files"}
              count={"435"}
            />
            <Sidebaritem
              img={"/sidebar/dashboard_customize.png"}
              name={"Boards"}
              count={"5"}
            />
            <Sidebaritem
              img={"/sidebar/access_time.png"}
              name={"Updates"}
              count={""}
            />
            <Sidebaritem
              img={"/sidebar/data_usage.png"}
              name={"Analytics"}
              count={"2"}
            />
            <Sidebaritem
              img={"/sidebar/spacedashboard.png"}
              name={"CRM Dashboard"}
              count={"2"}
            />
            <Sidebaritem
              img={"/sidebar/sell.png"}
              name={"ECommerce"}
              count={""}
            />
            <Sidebaritem
              img={"/sidebar/payment.png"}
              name={"Cryptocurrency"}
              count={""}
            />
            <Sidebaritem
              img={"/sidebar/lockclock.png"}
              name={"Projects"}
              count={""}
            />
            <Sidebaritem
              img={"/sidebar/imgsearch.png"}
              name={"NFT Marketplace"}
              count={""}
            />
            <Sidebaritem
              img={"/sidebar/tune.png"}
              name={"Settings"}
              count={"2"}
            />
          </div>
        </div>
        <hr className="border" />
        {/* Projects */}
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-[#98A2B2] text-[12px] font-[700]">PROJECTS</h2>
            <Image
              src="/sidebar/keyup.png"
              className="w-[20px] h-[20px] rounded-full"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          <div className="flex gap-4 flex-col">
            <Sidebaritem
              img={"/sidebar/tag.png"}
              name={"Additional Calendar"}
              count={"2"}
            />
            <Sidebaritem
              img={"/sidebar/tag.png"}
              name={"Branch Logo Design"}
              count={"2"}
            />
            <Sidebaritem
              img={"/sidebar/tag.png"}
              name={"User Research"}
              count={""}
            />
            <Sidebaritem
              img={"/sidebar/tag.png"}
              name={"Marketing Sales"}
              count={"23"}
            />
            <Sidebaritem
              img={"/sidebar/tag.png"}
              name={"New Project Template"}
              count={"2"}
            />
            <Sidebaritem
              img={"/sidebar/tag.png"}
              name={"Add New Project"}
              count={""}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
