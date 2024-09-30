/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Welkom, ProfilePublish } from "@/components/dashboard/Welkom";
import  ProfileSection from "@/components/dashboard/Profile";
import RecentRequests from "@/components/dashboard/Recents";
import PremiumSection from "@/components/dashboard/Premium";
import StatisticsSection from "@/components/dashboard/Statistics";



// Main Dashboard Component
export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center px-10 py-5">
      {/* Main Grid Container */}
      <div className="container flex flex-col gap-7 mx-[120px]">
        {/* Row 1 */}
        <div className="flex justify-between gap-5">
          <Welkom />
          <ProfilePublish />
        </div>

        {/* Row 2 */}
        <div className="flex justify-between gap-5">
          <div className="w-[350px]">
            <h2 className="text-[#2b998a] text-[15px] font-bold h-[30px]">Uw profiel</h2>
            <ProfileSection />
          </div>
          <div className="w-[533px]">
            <div className="h-[30px] flex flex-grow justify-between w-[530px]">
              <h2 className="text-[#2b998a] text-[15px] font-bold">Recente contact aanvragen</h2>
              <a className="underline text-[15px]" href="#">
                Bekijk alles
              </a>
            </div>
            <RecentRequests />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-between gap-5">
          <div className="w-[350px]">
            <div className="h-[30px] flex flex-grow justify-between w-[350px] mb-2">
              <h2 className="text-red-600 text-[15px] font-bold ">Premium</h2>
              <button className="bg-red-200 text-white ml-10 mx-auto h-[30px] px-2 text-center w-[100px] rounded w-full" disabled>
              Niet actief
              </button>
            </div>
            <PremiumSection />
          </div>
          <div className="w-[530px]">
            <div className="h-[30px] flex flex-grow justify-between w-[530px] h-[30px] mb-2">
              <h2 className="text-[#2b998a] text-[15px] font-bold">Statistieken</h2>
              <select className="px-4 rounded h-[30px] text-[15px] bg-gray-100">
                <option>juli 2024</option>
              </select>
            </div>
            <StatisticsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
