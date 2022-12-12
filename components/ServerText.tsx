"use client";

import React from "react";
import useGuildConfig from "../lib/hooks/useGuildConfig";

const ServerText = () => {
  const { data } = useGuildConfig({
    guildId: "894636042773229588",
  });

  return (
    <p className="text-white">
      {data?.name ?? ""}{" "}
      <span className="text-white/50">| Shield Dashboard</span>
    </p>
  );
};

export default ServerText;