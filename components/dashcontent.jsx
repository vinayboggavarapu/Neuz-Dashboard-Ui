import React from "react";
import Card from "./card";
import Image from "next/image";
import Cardadd from "./cardadd";

const Content = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Block1 */}
        <div className="flex flex-col gap-4">
          {/* header */}
          <div className="flex items-center justify-between  w-full">
            <div className="flex gap-3">
              <p className="text-[14px] font-semibold">Backlog Tasks</p>
              <p className="bg-[#EAB308]/[0.1] rounded-full font-[800] py-[5px] px-[8.5px] text-[#CA8A04] text-[10px]">
                5
              </p>
            </div>
            <Image
              src="/dots.png"
              className="w-[20px] h-[20px] rounded-full"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          <Card
            heading={"Model Answer"}
            badges={["#UI007", "Design", "Backlog"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#3B82F6", "#EAB308"]}
            badgeColor={[
              "rgba(255, 255, 255, 1)",
              "rgba(59, 130, 246, 0.1)",
              "rgba(234, 179, 8, 0.1)",
            ]}
            profiles={["avatar3.jpg", "avatar2.jpg", "avatar3.jpg"]}
          />
          <Card
            heading={"Create calendar, chat and email app pages"}
            badges={["#UI003", "Development", "Backlog"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#DB2777", "#EAB308"]}
            badgeColor={[
              "rgba(255, 255, 255, 1)",
              "rgba(236, 72, 153, 0.1)",
              "rgba(234, 179, 8, 0.1)",
            ]}
            profiles={["avatar3.jpg", "avatar2.jpg", "avatar3.jpg"]}
          />
          <Card
            heading={"Product Design, Figma, Sketch (Software), Prototype"}
            badges={["#BC05", "Project", "Backlog"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#606C80", "#EAB308"]}
            badgeColor={[
              "rgba(255, 255, 255, 1)",
              "rgba(255, 255, 255, 1)",
              "rgba(234, 179, 8, 0.1)",
            ]}
            profiles={["avatar3.jpg"]}
          />
          <Card
            heading={"Change email option process"}
            badges={["#FT07", "Backlog"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#EAB308"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(234, 179, 8, 0.1)"]}
            profiles={["avatar3.jpg", "avatar2.jpg", "avatar3.jpg"]}
          />
          <Card
            heading={"Post launch reminder/ Post list"}
            badges={["#UI007", "Design", "Backlog"]}
            badgeTextColor={["#606C80", "#3B82F6", "#EAB308"]}
            badgeColor={[
              "rgba(255, 255, 255, 1)",
              "rgba(59, 130, 246, 0.1)",
              "rgba(234, 179, 8, 0.1)",
            ]}
            profiles={[]}
          />
          <Cardadd />
        </div>

        {/* Block2 */}
        <div className="flex flex-col gap-4">
          {/* header */}
          <div className="flex items-center justify-between  w-full">
            <div className="flex gap-3">
              <p className="text-[14px] font-semibold">To Do Tasks</p>
              <p className="bg-[#EC4899]/[0.1] rounded-full font-[800] py-[5px] px-[8.5px] text-[#DB2777] text-[10px]">
                5
              </p>
            </div>
            <Image
              src="/dots.png"
              className="w-[20px] h-[20px] rounded-full"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          <Card
            heading={"Model Answer"}
            badges={["#UI005", "To Do"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#DB2777"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(236, 72, 153, 0.1)"]}
            profiles={[
              "avatar3.jpg",
              "avatar2.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
            ]}
          />
          <Card
            heading={"Add authentication pages"}
            badges={["#UI008", "To Do"]}
            checkImg={""}
            fileImg={""}
            textImg={""}
            badgeTextColor={["#606C80", "#DB2777"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(236, 72, 153, 0.1)"]}
            profiles={[]}
          />
          <Card
            heading={"Profile Page Structure"}
            badges={["#UI008", "To Do"]}
            checkImg={""}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#DB2777", "#EAB308"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(236, 72, 153, 0.1)"]}
            profiles={["avatar3.jpg"]}
          />
          <Card
            heading={"Create calendar, chat and email app pages"}
            badges={["#UI003", "Development", "Backlog"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#DB2777", "#EAB308"]}
            badgeColor={[
              "rgba(255, 255, 255, 1)",
              "rgba(236, 72, 153, 0.1)",
              "rgba(234, 179, 8, 0.1)",
            ]}
            profiles={["avatar3.jpg", "avatar2.jpg", "avatar3.jpg"]}
          />
          <Cardadd />
        </div>
        {/* Block3 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between  w-full">
            <div className="flex gap-3">
              <p className="text-[14px] font-semibold">In Progress</p>
              <p className="bg-[#A855F7]/[0.1] rounded-full font-[800] py-[5px] px-[8.5px] text-[#9333EA] text-[10px]">
                5
              </p>
            </div>
            <Image
              src="/dots.png"
              className="w-[20px] h-[20px] rounded-full"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          <Card
            heading={"Model Answer"}
            badges={["#002", "In Process"]}
            checkImg={"/task.png"}
            fileImg={"/fileblack.png"}
            textImg={"/messageblack.png"}
            badgeTextColor={["#606C80", "#9333EA"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(168, 85, 247, 0.1)"]}
            profiles={[
              "avatar3.jpg",
              "avatar2.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
            ]}
          />
          <Card
            heading={"Model Answer"}
            badges={["#002", "In Process"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#9333EA"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(168, 85, 247, 0.1)"]}
            profiles={[
              "avatar3.jpg",
              "avatar2.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
            ]}
          />
          <Cardadd />
        </div>
        {/* Block4 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between  w-full">
            <div className="flex gap-3">
              <p className="text-[14px] font-semibold">Done</p>
              <p className="bg-[#22C55E]/[0.1] rounded-full font-[800] py-[5px] px-[8.5px] text-[#16A34A] text-[10px]">
                5
              </p>
            </div>
            <Image
              src="/dots.png"
              className="w-[20px] h-[20px] rounded-full"
              width={300}
              height={300}
              alt="icon"
            />
          </div>
          <Card
            heading={"Model Answer"}
            badges={["#UI002", "Done"]}
            checkImg={"/task.png"}
            fileImg={"/fileblack.png"}
            textImg={"/messageblack.png"}
            badgeTextColor={["#606C80", "#16A34A"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(34, 197, 94, 0.1)"]}
            profiles={[
              "avatar3.jpg",
              "avatar2.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
              "avatar3.jpg",
            ]}
          />
          <Card
            heading={"Create calendar, chat and email app pages"}
            badges={["#UI002", "Done"]}
            checkImg={""}
            fileImg={""}
            textImg={""}
            badgeTextColor={["#606C80", "#16A34A"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(34, 197, 94, 0.1)"]}
            profiles={[]}
          />
          <Card
            heading={"Product Design, Figma, Sketch (Software), Prototype"}
            badges={["#UI002", "Done"]}
            checkImg={"/task.png"}
            fileImg={"/fileblack.png"}
            textImg={"/messageblack.png"}
            badgeTextColor={["#606C80", "#16A34A"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(34, 197, 94, 0.1)"]}
            profiles={["avatar2.jpg"]}
          />
          <Card
            heading={"Model Answer"}
            badges={["#UI002", "To Verifty"]}
            checkImg={"/task.png"}
            fileImg={"/file_present.png"}
            textImg={"/message.png"}
            badgeTextColor={["#606C80", "#9333EA"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(168, 85, 247, 0.1)"]}
            profiles={["avatar4.jpg", "avatar5.jpg"]}
          />
          <Card
            heading={"Create calendar, chat and email app pages"}
            badges={["#UI002", "Done"]}
            checkImg={""}
            fileImg={""}
            textImg={""}
            badgeTextColor={["#606C80", "#16A34A"]}
            badgeColor={["rgba(255, 255, 255, 1)", "rgba(34, 197, 94, 0.1)"]}
            profiles={[]}
          />
          <Cardadd />
        </div>
      </div>
    </section>
  );
};

export default Content;
