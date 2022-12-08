// "use client";

import Link from "next/link";
import Button from "../Button";
import ContentWrapper from "../ContentWrapper";
import ConfigureButton from "./ConfigureButton";

export default function Home() {
  return (
    <ContentWrapper
      title="Shield Security Modules"
      description="Configure your server security settings for maximum protection."
    >
      <div className="mt-8 w-full">
        <div className="w-full">
          <div className="mt-8 grid h-full grid-cols-3 grid-rows-2 gap-8">
            <div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Simulation Commands
              </p>
              <p className="text-white">
                Contract scans are{" "}
                <span className="text-green-400">active</span>
              </p>
              <p className="mb-8 text-white">
                Link scans are <span className="text-red-400">disabled</span>
              </p>
              <div className="flex h-full flex-col justify-end">
                {/* <ConfigureButton /> */}
              </div>
            </div>
            <div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Phishing Detection
              </p>
              <p className="text-white">
                Phishing detection is{" "}
                <span className="text-green-400">active</span>
              </p>
              <p className="text-white">Routing alerts to 2 admins</p>
              <div className="flex h-full flex-col justify-end">
                <Button intent={"secondary"} title={"Configure"} />
              </div>
            </div>
            <div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">Scam Alerts</p>
              <p className="text-white">
                Daily scam alerts are{" "}
                <span className="text-green-400">active</span>
              </p>
              <p className="text-white">
                Routing to <span className="text-sky-400">#scam-alerts</span>{" "}
                channel
              </p>
              <div className="flex h-full flex-col justify-end">
                <Button intent={"secondary"} title={"Configure"} />
              </div>
            </div>
            <div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Bot User Detection
              </p>
              <h1 className="text-4xl text-white">1,145</h1>
              <p className="text-white">user bots banned last week</p>
            </div>
            <div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">
                Blacklist & Restricted Users
              </p>
              <h1 className="text-4xl text-white">32</h1>
              <p className="mb-4 text-white">users blacklisted</p>
              <h1 className="text-4xl text-white">6</h1>
              <p className="text-white">users with chat restrictions</p>
              <div className="flex h-full flex-col justify-end">
                <Button intent={"secondary"} title={"Configure"} />
              </div>
            </div>
            <div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
              <p className="mb-6 text-lg font-medium text-white">Safe</p>
              <p className="text-white">
                Daily safe mints are{" "}
                <span className="text-green-400">active</span>
              </p>
              <p className="text-white">
                Routing to <span className="text-sky-400">#alpha</span> channel
              </p>
              <div className="flex h-full flex-col justify-end">
                <Button intent={"secondary"} title={"Configure"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
