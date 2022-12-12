"use client";

import ChannelSelect from "../../../../components/ChannelSelect";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import CommandToggle from "../../../../components/CommandToggle";
import useGuildConfig from "../../../../lib/hooks/useGuildConfig";
import Button from "../../../../components/Button";
import { useUserStore } from "../../../../state/user/useUserStore";
import {
  guildConfigSchema,
  ToggeableConfigOptions,
} from "../../../../lib/types";

export default function Home() {
  const { data, triggerUpdate } = useGuildConfig({
    guildId: "1",
  });

  const [changesSaved, setChangesSaved] = useState(false);

  const setGuildConfig = useUserStore((state) => state.setGuildConfig);
  const guildConfig = useUserStore((state) => state.guildConfig);

  const handleToggle = (value: ToggeableConfigOptions) => {
    if (guildConfig) {
      setGuildConfig({
        ...guildConfig,
        [value]: !guildConfig[value],
      });
    }
  };

  const handleSaveChanges = async () => {
    if (guildConfig) {
      const res = await fetch(`/api/config/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(guildConfig),
      });
      await triggerUpdate();

      setChangesSaved(true);
      setTimeout(() => {
        setChangesSaved(false);
      }, 5000);
    }
  };

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
          <ChannelSelect currentChannel={guildConfig?.routeScansTo ?? ""} />
        </div>
        <div className="flex flex-col">
          <p className="text-6xl font-medium text-primary">
            {guildConfig?.scanCount ?? 0}
          </p>
          <p className="text-white">Shield scans performed all-time</p>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-white">Simulation Commands</p>
          <CommandToggle
            enabled={guildConfig?.scan ?? false}
            onUserToggle={handleToggle}
            toggleName="scan"
            command="!scan"
            description="Scans address for balance/transactions or domain name for phishing
"
          />
          <CommandToggle
            enabled={guildConfig?.simulateMint ?? false}
            onUserToggle={handleToggle}
            toggleName="simulateMint"
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

          <CommandToggle
            onUserToggle={handleToggle}
            command="Smart contract scanning"
          />
          <CommandToggle onUserToggle={handleToggle} command="Domain link" />
          <CommandToggle onUserToggle={handleToggle} command="Rate limit" />
        </div>
        <div className="col-span-2 flex w-full flex-row items-center justify-end">
          {changesSaved && (
            <p className="mr-4 text-xs text-white">Changes saved.</p>
          )}
          <Button
            onConfirm={handleSaveChanges}
            intent={"primary"}
            title={"Save"}
          />
        </div>
      </div>
    </div>
  );
}
