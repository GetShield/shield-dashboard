"use client";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";

const CommandToggle = ({
  enabled,
  command,
  description,
}: {
  enabled?: boolean;
  command: string;
  description?: string;
}) => {
  return (
    <div className="flex items-center justify-between rounded-md border border-white/50 bg-black p-8">
      <div className="flex flex-col justify-center">
        <p className="text-white">{command}</p>
        {description && <p className="text-sm text-white/50">{description}</p>}
      </div>
      <Switch
        checked={enabled}
        // onChange={setEnabled}
        className={`${
          enabled ? "bg-primary" : "border border-white/50"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </div>
  );
};

export default CommandToggle;
