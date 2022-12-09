"use client";

import { unstable_getServerSession } from "next-auth";
import React from "react";

const NextAuthProvider = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) => {
  return <div>NextAuthProvider</div>;
};

export default NextAuthProvider;
