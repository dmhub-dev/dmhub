import React from "react";

// Recent Requests Section
const RecentRequests = () => (
    <div className="bg-white shadow-md rounded-lg p-6 h-[300px] flex flex-col w-[533px]">
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="text-gray-600 font-medium border-b border-gray-300 text-[15px]">
            <th>Naam</th>
            <th>Telefoonnummer</th>
            <th>E-mailadres</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} className="text-gray-600 py-5 text-[15px]">
              Momenteel kunt u nog <strong>geen</strong> contact aanvragen ontvangen.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-gray-500 flex-grow py-2 text-[15px]">
        Vul uw profiel en overige gegevens volledig in, daarna kunt u uw profiel activeren en
        bent u zichtbaar. Vervolgens kunt u contact aanvragen ontvangen. <br />
        <br />
        Via <span className="text-red-600">Premium</span> kunt u gebruikmaken van aanvullende diensten.
      </p>
    </div>
  );

export default RecentRequests;