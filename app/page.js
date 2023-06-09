"use client";
import Dash from "@/components/dash";

import Sidebar from "../components/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);
  return (
    <main className="flex flex-col bg-[#F7F8FA] min-h-screen ">
      <div className={`flex flex-col lg:flex-row inter`}>
        <div className=" hidden lg:relative lg:overflow-y-scroll lg:flex lg:min-w-[302px]">
          <Sidebar />
        </div>
        <div className="lg:hidden">
          <section className=" py-[30px] border-b flex items-center justify-between w-full px-[32px] mx-auto">
            <p className="text-[20px] font-[600]">Dashboard</p>
            <Image
              src="/dash.png"
              onClick={() => setClick(!click)}
              className="w-[17.59px] h-[12px] "
              width={500}
              height={500}
              alt="icon"
            />
          </section>
          <div
            className={`absolute z-20 transition-all ease-in-out ${
              click ? "left-0" : "-left-[9999px]"
            } bg-white w-screen`}
          >
            <Sidebar />
          </div>
        </div>

        {!click && (
          <div className="flex-grow">
            <Dash />
          </div>
        )}
      </div>
    </main>
  );
}
