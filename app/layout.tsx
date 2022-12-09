import "../styles/globals.css";
import "../styles/tailwind.css";
import { Poppins } from "@next/font/google";
import Button from "../components/Button";
import Tab from "./Tab";
import Image from "next/image";
import { useRouter } from "next/router";
import { Tabs, useUserStore } from "../state/user/useUserStore";
import { useEffect } from "react";
import { IoNotificationsSharp } from "react-icons/io5";
import AuthButton from "../components/AuthButton";
import { getCurrentUser } from "../lib/session";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  console.log(user);

  return (
    <html className={poppins.className}>
      <head />
      <body>
        <div className="mx-auto">
          {" "}
          <div>
            <div className="relative z-10 flex h-screen w-full items-center justify-start">
              <div className="flex h-full w-80 flex-col items-center bg-secondary ">
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
                  <div className="flex items-center space-x-8">
                    <IoNotificationsSharp className="fill-white/50" />

                    {user ? (
                      <div className="relative h-10 w-10">
                        <Image
                          src={user.user?.image || "/azuki.png"}
                          alt="avatar"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    ) : (
                      <AuthButton />
                    )}
                  </div>
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
