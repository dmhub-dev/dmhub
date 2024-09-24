/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center p-6">
      {/* Main Grid Container */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 col-span-1">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 h">
            <div className="flex items-center space-x-4">
              <img
                src="img/s.webp"
                alt="Profile"
                className="rounded-full h-20 w-20 object-cover"
              />
              <h3 className="text-xl font-semibold">Sepp Uitvaartzorg</h3>
            </div>
            <div className="w-full mt-2 text-center">
              <p className="text-gray-600">
                Uw profiel is voor <span className="font-bold">50%</span> compleet
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-red-500 rounded-full h-4 mb-4 relative">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: '50%' }} // Adjust the percentage dynamically
            ></div>
          </div>

          <p className="text-gray-600 mb-4">
            Werk uw profiel bij om gepubliceerd te worden en zichtbaar te zijn.
          </p>

          <button className="bg-green-600 text-white py-2 px-4 rounded w-full">
            Profiel bijwerken
          </button>
        </div>

        {/* Right Section (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Requests Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <table className="w-full text-left table-auto">
              <thead>
                <tr className="text-gray-600 font-medium">
                  <th>Naam</th>
                  <th>Telefoonnummer</th>
                  <th>E-mailadres</th>
                  <th>Datum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="text-gray-600 p-2">
                    Momenteel kunt u nog <strong>geen</strong> contact aanvragen ontvangen.
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-4 text-sm text-gray-500">
              Vul uw profiel volledig in om contactaanvragen te ontvangen. Via <span className="text-red-600">Premium</span> kunt u gebruikmaken van aanvullende diensten.
            </p>
          </div>

          {/* Statistics Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-green-700">Statistieken</h2>
              <select className="border border-gray-300 rounded py-2 px-4">
                <option>juli 2024</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                <span className="text-xl">0</span>
                <p className="text-gray-600">Telefonische aanvragen</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                <span className="text-xl">0</span>
                <p className="text-gray-600">E-mail aanvragen</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                <span className="text-xl">0</span>
                <p className="text-gray-600">Brochure downloads</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                <span className="text-xl">0</span>
                <p className="text-gray-600">Website bezoeken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
