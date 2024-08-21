"use client";
import React, { useState } from "react";
import {
  Bell,
  Calendar,
  ChartNoAxesColumn,
  ChartNoAxesGanttIcon,
  LayoutGrid,
  Settings,
  SidebarOpen,
  Ticket,
} from "lucide-react";
import Image from "next/image";
import { ThemeSwitch } from "./ui/ThemeSwitch";

const Menu = [
  {
    icon: LayoutGrid,
    title: "Dashboard",
    key: "dashboard",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Upload",
    key: "upload",
  },
  {
    icon: Ticket,
    title: "Invoice",
    key: "invoice",
  },
  {
    icon: ChartNoAxesGanttIcon,
    title: "Schedule",
    key: "schedule",
  },
  {
    icon: Calendar,
    title: "Calendar",
    key: "calendar",
  },
  {
    icon: Bell,
    title: "Notification",
    key: "notification",
  },
  {
    icon: Settings,
    title: "Settings",
    key: "settings",
  },
];

type SidebarProps = {
  activeItem: string;
};

const Sidebar = ({ activeItem }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`pt-14 text-[#6E6E6E] min-h-screen relative transition-all duration-300 ${
        collapsed ? "w-40" : "w-64"
      }`}
    >
      <div className="flex justify-between items-center pl-8 pr-6">
        <div className="flex gap-3">
          <Image src="/images/logo.png" alt="Logo" width={36} height={36} />
          {!collapsed && (
            <h1 className="font-montserrat font-bold text-2xl text-white">
              Base
            </h1>
          )}
        </div>
        <SidebarOpen
          onClick={toggleCollapse}
          className={`cursor-pointer ${collapsed ? "rotate-180" : ""}`}
        />
      </div>
      <div className="mt-12 flex flex-col gap-4">
        {Menu.map((item) => (
          <div
            key={item.key}
            className={`flex items-center gap-3 h-12 px-4 ${
              item.key === activeItem
                ? "bg-gradient-to-r from-[rgba(172,169,255,0.2)] to-[rgba(172,169,255,0)] text-[#605BFF]"
                : ""
            } ${
              collapsed
                ? "justify-start ml-4"
                : "hover:bg-gradient-to-r hover:from-[rgba(172,169,255,0.2)] hover:to-[rgba(172,169,255,0)] hover:bg-opacity-20"
            }`}
          >
            <item.icon size={24} />
            {!collapsed && (
              <h2 className="text-base font-nunito">{item.title}</h2>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-10">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Sidebar;
