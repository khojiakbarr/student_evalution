import React from "react";
import SideBarLeft from "../components/SideBarLeft";
import NavbarTop from "../components/NavbarTop";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex">
      <SideBarLeft />
      <div className="w-full dark:bg-gray-700 ">
        <NavbarTop />
        <div className="p-[10px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
