"use client";

import React from "react";
import useGuildConfig from "../lib/hooks/useGuildConfig";

const ServerText = () => {
  const { data } = useGuildConfig({
    guildId: "1",
  });

  return (
    <p className="text-white">
      {data?.discordGuildName ?? ""}{" "}
      <span className="text-white/50">| Shield Dashboard</span>
    </p>
  );
};

export default ServerText;
