import React from "react";

const BusinessModels = () => {
  return (
    <>
      <section className="container w-full my-8">
        <h2 className="text-3xl font-bold text-darktext mb-6">
          Nieuwe businessmodellen voor u als uitvaartverzorger
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          <div className="bg-gray-100 p-4 md:p-6 border border-gray-300 text-center">
            <p className="text-xl font-semibold text-black">
              Gratis <span className="text-red-600">condoleance</span> kaarten
            </p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 border border-gray-300 text-center">
            <p className="text-xl font-semibold text-black">
              Abonnementen <span className="text-red-600">opzegservice</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 border border-gray-300 text-center">
            <p className="text-xl font-semibold text-black">
              Digitale <span className="text-red-600">sterrenhemel</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 border border-gray-300 text-center">
            <p className="text-xl font-semibold text-black">
              in <span className="text-red-600">Memoriam</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 border border-gray-300 text-center">
            <p className="text-xl font-semibold text-black">
              Uitvaartwensen <span className="text-red-600">Vooralsikga</span>
            </p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 border border-gray-300 text-center">
            <p className="text-xl font-semibold text-black">
              Web <span className="text-red-600">shop</span>
            </p>
          </div>
        </div>
        <p className="mb-6">En nog heel veel meer...</p>
      </section>
    </>
  );
};

export default BusinessModels;
