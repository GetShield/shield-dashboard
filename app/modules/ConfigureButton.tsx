"use client";

import Link from "next/link";
import React from "react";
import Button from "../Button";

const ConfigureButton = () => {
  return (
    <Link href="/settings/simulation">
      <Button intent={"secondary"} title={"Configure"} />
    </Link>
  );
};

export default ConfigureButton;
