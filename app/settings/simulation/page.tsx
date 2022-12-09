import ChannelSelect from "../ChannelSelect";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import CommandToggle from "./CommandToggle";

export default function Home() {
  return (
    <div>
      <h1 className="mb-2 text-2xl text-white">Simulation Commands</h1>
      <p className="mb-8 text-white/50">
        Drive new engagement in your community with Shield’s NFT mint simulation
        and contract scans.
      </p>
      <div className="grid w-full grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <p className="text-white">Scan Results Channel</p>
          <ChannelSelect />
        </div>
        <div className="flex flex-col">
          <p className="text-6xl font-medium text-primary">24</p>
          <p className="text-white">Shield scans performed all-time</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-white">Simulation Commands</p>
          <CommandToggle
            command="!scan"
            description="Scans address for balance/transactions or domain name for phishing
"
          />
          <CommandToggle
            command="!simulatemint"
            description="Simulate minting NFTs from any given contract

"
          />
        </div>
        <div className="relative flex flex-col space-y-4">
          {/* <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-black/50">
            <p className="text-white">Coming Soon</p>
          </div> */}
          <p className="text-white">Advanced Settings</p>

          <CommandToggle command="Smart contract scanning" />
          <CommandToggle command="Domain link" />
          <CommandToggle command="Rate limit" />
        </div>
      </div>
    </div>
  );
}
