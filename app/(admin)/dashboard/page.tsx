/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {/* Main Grid Container */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Section */}
        <div className=" p-6 h-[100px] flex flex-col">
          <h2 className="text-xl font-bold mb-4">Welkom</h2>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 h-[150px] flex flex-col text-center w-[400px]">
          <h2 className="text-xl mb-4">Uw profiel is nog <a href="#" className="underline">niet</a> gepubliceerd</h2>
          <button className="bg-red-200 text-white mx-auto py-2 px-4 w-[200px] rounded w-full">
          Publiceer
          </button>
        </div>
        <div className="h-[10px]">
          <h2 className="text-[#2b998a] text-[22px] font-bold">Uw profiel</h2>
        </div>
        <div className="h-[10px]  flex flex-grow justify-between w-[550px]">
          <h2 className="text-[#2b998a] text-[22px] font-bold">Recente contact aanvragen</h2>
          <a className="underline">Bekijk alles</a>
        </div>
        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col h-[350px] w-[550px]">
          <div className="flex flex-col items-left ">
          <div className="flex space-x-2 h-35 text-center">
            <img
              src="img/s.webp"
              alt="Profile"
              className="rounded-full h-32 w-32 object-cover"  
            />
            <div className="flex flex-col justify-center align-middle h-32 ">
              <h3 className="text-xl font-semibold text-[29px] text-center justify-center align-middle">
                Sepp Uitvaartzorg
              </h3>
            </div>
          </div>

          <div className="w-full  ">
              <p className="text-gray-600">
                Uw profiel is voor <span className="font-bold">50%</span> compleet
              </p>
          </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-red-600 rounded-full h-4 mb-4 relative">
            <div
              className="bg-[#2b998a] h-4 rounded-full"
              style={{ width: '50%' }} 
            ></div>
          </div>

          <p className="text-gray-600 mb-4 flex-grow">
            Werk uw profiel bij om gepubliceerd te worden en zichtbaar te zijn.
          </p>

          <button className="bg-[#2b998a] text-white py-2 px-4 rounded w-[200px]">
            Profiel bijwerken
          </button>
        </div>

        {/* Recent Requests Section */}
        <div className="bg-white shadow-md rounded-lg p-6 h-[350px] flex flex-col">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="text-gray-600 font-medium border-b border-gray-300">
                <th>Naam</th>
                <th>Telefoonnummer</th>
                <th>E-mailadres</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4} className="text-gray-600 py-5">
                  Momenteel kunt u nog <strong>geen</strong> contact aanvragen ontvangen.
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 flex-grow py-2">
            Vul uw profiel en overige gegevens volledig in, daarna kunt u uw profiel activeren en
            bent u zichtbaar. Vervolgens kunt u contact aanvragen ontvangen. <br/><br/>
            Via <span className="text-red-600">Premium</span> kunt u gebruikmaken van aanvullende diensten.
          </p>
        </div>
        <div className="h-[10px] flex flex-grow justify-between w-[300px]">
          <h2 className="text-red-600 text-[22px] font-bold ">Premium</h2>
          <button className="bg-red-200 text-white mx-auto h-[30px] px-5 text-center w-[150px] rounded w-full" disabled>
          Niet actief
          </button>
        </div>
        <div className="h-[10px]  flex flex-grow justify-between w-[550px]">
          <h2 className="text-[#2b998a] text-[22px] font-bold">Statistieken</h2>
          <select className="px-4 rounded h-[30px] bg-gray-100">
              <option>juli 2024</option>
          </select>        
        </div>
        {/* Premium Section */}
        <div className="bg-white shadow-md rounded-lg p-6 h-[320px] flex flex-col justify-between">
          <div className="flex items-center mb-4">
            <div className="rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2b998a" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="ml-3 text-gray-700">Spotlight - uitgelicht (week/maand)</span>
          </div>
          <div className="flex items-center mb-4">
           <div className="rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2b998a" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="ml-3 text-gray-700">Direct in contact met consumenten</span>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2b998a" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="ml-3 text-gray-700">Uitgebreid profiel</span>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2b998a" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="ml-3 text-gray-700">Reviews ontvangen</span>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2b998a" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="ml-3 text-gray-700">Verzorgingsgebied bepalen</span>
          </div>
          <div className="flex items-center">
            <div className="rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2b998a" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="ml-3 text-gray-700">Uitgebreide promotiemogelijkheden</span>
          </div>
        </div>

        {/* Statistics Section (With Icon Background) */}
        <div className="bg-white shadow-md rounded-lg p-6 h-[320px] flex flex-col">
          <div className="grid grid-cols-2 gap-6 flex-grow">
            <div className="py-5 rounded-lg  flex ">
              <div className=" rounded-md mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <p className="text-gray-600 px-5 w-full">Telefonische aanvragen <br/><span className="text-3xl font-bold">0</span></p>
            
            </div>
            <div className="py-5 rounded-lg  flex ">
              <div className=" rounded-md mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <p className="text-gray-600 px-5 w-full">Telefonische aanvragen <br/><span className="text-3xl font-bold">0</span></p>
            </div>
            <div className="py-5 rounded-lg  flex ">
              <div className=" rounded-md mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <p className="text-gray-600 px-5 w-full">Telefonische aanvragen <br/><span className="text-3xl font-bold">0</span></p>
            
            </div>
            <div className="py-5 rounded-lg  flex ">
              <div className="border rounded-md mb-2 px-4 py-2 h-10  shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <p className="text-gray-600 px-5 w-full">Telefonische aanvragen <br/><span className=" font-bold">0</span></p>
            </div>
          </div>
        </div>


        {/* Add more sections here and they will be placed in alternating columns */}
      </div>
    </div>
  );
}
