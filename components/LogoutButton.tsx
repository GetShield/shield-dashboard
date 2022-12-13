"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import Button from "./Button";

const LogoutButton = () => {
  return (
    <>
      <Button intent={"primary"} onConfirm={() => signOut()} title="Sign Out" />
    </>
  );
};

export default LogoutButton;
