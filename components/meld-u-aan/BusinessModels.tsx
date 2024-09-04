import React from "react";

const BusinessModels = () => {
  return (
    <div>
      <section className="text-center my-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Nieuwe businessmodellen voor u als uitvaartverzorger
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-100 p-4 border border-gray-300 rounded">
            <p className="text-xl font-semibold text-black">
              Gratis <span className="text-red-600">condoleance</span> kaarten
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-gray-300 rounded">
            <p className="text-xl font-semibold text-black">
              Abonnementen <span className="text-red-600">opzegservice</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-gray-300 rounded">
            <p className="text-xl font-semibold text-black">
              Digitale <span className="text-red-600">sterrenhemel</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-gray-300 rounded">
            <p className="text-xl font-semibold text-black">
              in <span className="text-red-600">Memoriam</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-gray-300 rounded">
            <p className="text-xl font-semibold text-black">
              Uitvaartwensen <span className="text-red-600">Vooralsikga</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 border border-gray-300 rounded">
            <p className="text-xl font-semibold text-black">
              Web <span className="text-red-600">shop</span>
            </p>
          </div>
        </div>
        <p className="text-gray-500 mb-6">En nog heel veel meer ...</p>
      </section>

      <section className="bg-teal-600 py-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Profiteer net als al die andere uitvaartverzorgers!
        </h3>
        <div className="flex justify-center gap-4">
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded transition duration-300 hover:bg-white hover:text-teal-600">
            VEELGESTELDE VRAGEN
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded transition duration-300 hover:bg-white hover:text-teal-600">
            MELD U DIRECT AAN
          </button>
        </div>
      </section>
    </div>
  );
};

export default BusinessModels;
