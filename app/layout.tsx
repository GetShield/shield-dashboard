"use client";
/* eslint-disable @next/next/no-head-element */

import "../styles/globals.css";
import "../styles/tailwind.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.className}>
      <head>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>
      </head>
      <body>
        <div className="mx-auto">{children}</div>
      </body>
    </html>
  );
}
