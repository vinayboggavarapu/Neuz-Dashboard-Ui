import Image from "next/image";
import React from "react";
import styled from "styled-components";
import css from "styled-jsx/css";

const Badge = styled.p`
  background-color: ${(props) => props.$background};
  color: ${(props) => props.$text};
`;

const Card = ({
  heading,
  badges,
  checkImg,
  fileImg,
  textImg,
  badgeTextColor,
  badgeColor,
  profiles,
}) => {
  const profileTruncate = profiles?.slice(0, 2);
  const profilesleft = profiles?.length - profileTruncate?.length;
  return (
    <div className="bg-white rounded-[8px] p-5 flex flex-col gap-3">
      {/* top */}
      <div className="flex justify-between">
        <h2 className="text-[12px] w-3/4 font-[600] text-gray-800">
          {heading}
        </h2>
        {checkImg && (
          <div className="w-[35px] flex justify-between items-center">
            <Image
              src={checkImg}
              className="w-[20px] h-[20px]"
              width={400}
              quality={100}
              height={400}
              alt="icon"
            />
            <p className="text-[#17A5E6]  text-[10px] font-[800]">4</p>
          </div>
        )}
      </div>
      {/* allbadges */}

      <div className="flex gap-2">
        {badges?.map((badge, index) => {
          return (
            <Badge
              $text={badgeTextColor[index]}
              $background={badgeColor[index]}
              key={index}
              className={`px-2 rounded-2xl ${
                badgeTextColor[index] === "#606C80" ? "border" : ""
              } py-1 text-[8px] font-[800]`}
            >
              {badge}
            </Badge>
          );
        })}
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex relative  [&>*:first-child]:ml-0 items-center">
            {profileTruncate?.map((profile, index) => {
              return (
                <Image
                  src={"/" + profile}
                  key={index}
                  className="w-[32px] -ml-2 border-[2px] border-white rounded-full h-[32px]"
                  width={400}
                  quality={100}
                  height={400}
                  alt="icon"
                />
              );
            })}
          </div>
          {profilesleft > 0 && (
            <p className="w-[32px] h-[32px] -ml-4 bg-[#F2F4F7] rounded-full justify-center flex items-center z-10 text-[#606C80] text-[10px] font-[800]">
              +{profilesleft}
            </p>
          )}
          <div>
            {profiles?.length > 0 && (
              <Image
                src="/addbtn.svg"
                className="w-[32px] h-[32px]"
                width={400}
                quality={100}
                height={400}
                alt="icon"
              />
            )}
          </div>
        </div>
        <div className="flex gap-[9.67px]">
          {fileImg && (
            <div className="w-[35px] flex justify-between items-center">
              <Image
                src={fileImg}
                className="w-[20px] h-[20px]"
                width={400}
                quality={100}
                height={400}
                alt="icon"
              />
              {fileImg.includes("black") ? (
                <p className="text-gray-400  text-[10px] font-[800]">2</p>
              ) : (
                <p className="text-[#9333EA]  text-[10px] font-[800]">2</p>
              )}
            </div>
          )}
          {textImg && (
            <div className="w-[35px] flex justify-between items-center">
              <Image
                src={textImg}
                className="w-[20px] h-[20px]"
                width={400}
                quality={100}
                height={400}
                alt="icon"
              />
              {textImg.includes("black") ? (
                <p className="text-gray-400  text-[10px] font-[800]">2</p>
              ) : (
                <p className="text-[#D97706]  text-[10px] font-[800]">2</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
