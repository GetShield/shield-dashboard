"use client";

import Link from "next/link";
import React from "react";
import { Tabs, useUserStore } from "../state/user/useUserStore";
import {
  IoAppsSharp,
  IoBrowsersSharp,
  IoChatbubblesSharp,
  IoCodeSharp,
  IoLogoAppleAr,
  IoStatsChart,
  IoStatsChartSharp,
  IoTicketSharp,
} from "react-icons/io5";

const tabsContent = {
  dashboard: {
    title: "Dashboard",
    icon: <IoStatsChartSharp className="mr-4 h-8 w-8 fill-inherit" />,
  },
  modules: {
    title: "Modules",
    icon: <IoAppsSharp className="mr-4 h-8 w-8 fill-inherit" />,
  },
  commands: {
    title: "Commands",
    icon: <IoCodeSharp className="mr-4 h-8 w-8 fill-inherit" />,
  },
  admin: {
    title: "Admin Logs",
    icon: <IoBrowsersSharp className="mr-4 h-8 w-8 fill-inherit" />,
  },
  contact: {
    title: "Contact Us",
    icon: <IoChatbubblesSharp className="mr-4 h-8 w-8 fill-inherit" />,
  },
  premium: {
    title: "Get Premium",
    icon: (
      <IoTicketSharp className="mr-4 h-8 w-8 rotate-45 transform fill-inherit" />
    ),
  },
};

const Tab = ({ tab, disabled = false }: { tab: Tabs; disabled?: boolean }) => {
  const activeTab = useUserStore((state) => state.activeTab);
  const setActiveTab = useUserStore((state) => state.setActiveTab);
  const isActive = activeTab === tab;

  const handleSetActive = () => {
    setActiveTab(tab);
  };

  return (
    <Link
      className={`${disabled && "pointer-events-none opacity-50"}`}
      href={`/${tab}`}
    >
      <button
        onClick={handleSetActive}
        className="flex w-full items-center justify-start pl-8"
      >
        <div
          className={`absolute left-0 h-8 w-1 ${
            isActive ? "bg-[#2287C3]" : "bg-transparent"
          }`}
        ></div>
        <div className={`${isActive ? "fill-primary" : "fill-white/50"}`}>
          {tabsContent[tab].icon}
        </div>
        <p className={`text-lg ${isActive ? "text-white" : "text-white/50"}`}>
          {tabsContent[tab].title}
        </p>
      </button>
    </Link>
  );
};

export default Tab;
