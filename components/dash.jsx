"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import Rsidebar from "./rsidebar";
import Content from "./dashcontent";
import Dashheader from "./dashheader";

const Dash = () => {
  return (
    <div className="flex">
      <section className="flex-grow ">
        <Navbar />
        <div className="flex flex-col p-9 gap-11">
          <Dashheader />
          <Content />
        </div>
      </section>
      <aside className=" hidden lg:flex">
        <Rsidebar />
      </aside>
    </div>
  );
};

export default Dash;
