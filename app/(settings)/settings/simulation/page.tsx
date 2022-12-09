"use client";

import ChannelSelect from "../../../../components/ChannelSelect";
import { Switch } from "@headlessui/react";
import { useState } from "react";
import CommandToggle from "../../../../components/CommandToggle";
import useGuildConfig from "../../../../lib/hooks/useGuildConfig";

export default function Home() {
  const { data } = useGuildConfig({
    guildId: "894636042773229588",
  });

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
          <ChannelSelect currentChannel={data?.routeScansTo ?? ""} />
        </div>
        <div className="flex flex-col">
          <p className="text-6xl font-medium text-primary">
            {data?.scanCount ?? 0}
          </p>
          <p className="text-white">Shield scans performed all-time</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-white">Simulation Commands</p>
          <CommandToggle
            enabled={data?.scan ?? false}
            command="!scan"
            description="Scans address for balance/transactions or domain name for phishing
"
          />
          <CommandToggle
            enabled={data?.simulateMint ?? false}
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
