"use client";
/* eslint-disable @next/next/no-head-element */

import "../styles/globals.css";
import "../styles/tailwind.css";
import { Poppins } from "@next/font/google";
import Button from "./Button";
import Tab from "./Tab";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className}>
      <head>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
      </head>
      <body>
        <div className="mx-auto">
          {" "}
          <div>
            <div className="relative z-10 flex h-screen w-full items-center justify-start bg-[#332396]">
              <div className="flex h-full w-80 flex-col items-center bg-[#100B2E] ">
                <div className="p-8">
                  <Image src="/logo.png" alt="logo" width={200} height={200} />
                </div>
                <div className="mt-8 flex w-full flex-col space-y-8">
                  <Tab tab="dashboard" />
                  <Tab tab="modules" />
                  <Tab tab="commands" />
                  <Tab tab="admin" />
                  <Tab tab="contact" />
                </div>
                <div className="flex h-full w-full flex-col  items-start justify-end pb-8">
                  <Tab tab="premium" />
                </div>
              </div>
              <div className="flex h-full w-full flex-col items-start p-8">
                <div className="mb-16 flex w-full items-center justify-between">
                  <p className="text-white">
                    Ancient Warriors Empire{" "}
                    <span className="text-white/50">| Shield Dashboard</span>
                  </p>
                  <div className="h-8 w-8 rounded-full bg-white" />
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
