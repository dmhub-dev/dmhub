import React from "react";
import DashboardHeader from "@/components/layout/DashboardHeader";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}
