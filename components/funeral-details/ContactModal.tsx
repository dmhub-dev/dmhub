/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import CallbackRequestForm from "./CallbackRequestForm";
import DownloadForm from "./Download";
import CallRequest from "./CallRequest";
const ContactModal: React.FC<{ closeModal: () => void; layout: string; openModalWithLayout: (layoutType: string) => void }> = ({
  closeModal,
  layout,
  openModalWithLayout,
}) => {

  const getModalTitle = (layout: string) => {
    switch (layout) {
      case "layout1":
        return "Hoe wilt u contact opnemen?";
      case "layout2":
        return "Neem direct contact met ons op";
      case "layout3":
        return "Contactformulier";
      case "layout4":
        return "Download onze brochure";
      case "layout5":
        return "U gaat nu door naar de website van";
      case "layout6":
        return "Terugbelverzoek";
      default:
        return "Neem contact op";
    }
  };

  return (
    <>
      <div
        id="select-modal"
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-80 rounded-[10px]"
      >
        {/* Layouts 1 and 2 - Original style */}
        {(layout === "layout1" || layout === "layout2") && (
          <div className="relative px-4 py-0 w-full max-w-md bg-[#f2f2f2] rounded-lg shadow-lg">
            <div className="flex items-center p-4">
              <h3 className="text-[20px] text-center font-semibold text-[#48a38b]">
                {getModalTitle(layout)}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5 ml-auto inline-flex items-center"
              >
                ×
              </button>
            </div>

            {layout === "layout1" && (
              <div className="p-4 text-center">
                <div className="flex justify-between items-center mb-4 px-4 py-2 bg-white">
                  <img
                    src="/img/profile.png"
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <img src="/img/test.png" alt="Company Logo" className="h-10" />
                </div>
                <div className="flex mb-6 bg-white p-4 justify-center">
                  <IoCall className="text-lg mt-1 mr-4" />
                  <p className="text-md">06 - 5744 8048</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center p-4 bg-white hover:bg-gray-200 focus:bg-[#48a38b] focus:bg-opacity-20">
                    <BsFillEnvelopeFill className="text-[22px] mb-3" />
                    <span className="text-sm font-medium">Stuur een bericht</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-white hover:bg-gray-200 focus:bg-[#48a38b] focus:bg-opacity-20">
                    <IoCall className="text-[22px] mb-3" />
                    <span className="text-sm font-medium">Terugbelverzoek</span>
                  </button>
                </div>
              </div>
            )}

            {layout === "layout2" && (
              <div className="p-4 text-center">
                <div className="flex justify-between items-center mb-4 px-4 py-2 bg-white rounded">
                  <img
                    src="/img/profile.png"
                    alt="Profile"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <img src="/img/test.png" alt="Company Logo" className="h-10" />
                </div>
                <div className="flex mb-6 bg-white p-4 justify-center">
                  <IoCall className="text-lg mt-1 mr-4" />
                  <p className="text-md">06 - 5744 8048</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-left p-4">
                    <p className="justify-start text-left">
                      Geen gehoor of gesloten? <span>Plan een terugbel verzoek in</span> {" >>"}
                    </p>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-white hover:bg-gray-200 focus:bg-[#48a38b] focus:bg-opacity-20"
                     onClick={() => openModalWithLayout('layout6')}                    >
                    <IoCall className="text-[22px] mb-3" />
                    <span className="text-sm font-medium">Terugbelverzoek</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Layout 3 - Contact Form */}
        {layout === "layout3" && (
          <div className="relative w-[70vw] bg-[#f2f2f2] rounded-lg shadow-lg flex mt-16 px-4">
            {/* Left Section - Profile and Company Logo */}
            <div className="flex flex-col p-3 w-1/3 bg-[#f2f2f2] rounded-lg ">
              <div className="flex flex-col items-center mb-4 bg-white p-6 ">
                <img
                  src="/img/profile.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <img src="/img/test.png" alt="Company Logo" className="h-12" />
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="relative w-2/3 p-2">
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#48a38b]">
                  {getModalTitle(layout)}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5"
                >
                  ×
                </button>
              </div>

              <CallbackRequestForm />
            </div>
          </div>
        )}

        {/* Layout 4 - Download Brochure */}
        {layout === "layout4" && (
          <div className="relative w-[60vw] bg-[#f2f2f2] rounded-lg shadow-lg flex mt-12">
            {/* Left Section - Profile and Company Logo */}
            <div className="flex flex-col p-6 w-1/3 bg-[#f2f2f2] rounded-lg">
              <div className="flex flex-col items-center mb-4 bg-white p-4">
                <img
                  src="/img/profile.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <img src="/img/test.png" alt="Company Logo" className="h-12" />
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="relative w-2/3 p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#48a38b]">
                  {getModalTitle(layout)}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5"
                >
                  ×
                </button>
              </div>

              <DownloadForm />
            </div>
          </div>
        )}

        {/* Layout 5 - Redirect Notice */}
        {layout === "layout5" && (
          <div className="relative px-6 py-4 w-full max-w-md bg-[#f2f2f2] rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#48a38b]">
                {getModalTitle(layout)}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5"
              >
                ×
              </button>
            </div>
            <a className="flex flex-col p-6 w-full p-6 align-middle  bg-[#f2f2f2] rounded-lg" href="https://www.google.com/" target="_blank">
              <div className="flex flex-col items-center mb-4 bg-white p-4">
                <img
                  src="/img/profile.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <img src="/img/test.png" alt="Company Logo" className="h-12" />
              </div>
            </a>
          </div>
        )}

        {/* Layout 6 - CallRequest Form */}
        {layout === "layout6" && (
          <div className="relative w-[70vw] bg-[#f2f2f2] rounded-lg shadow-lg flex mt-16 px-4">
            {/* Left Section - Profile and Company Logo */}
            <div className="flex flex-col p-3 w-1/3 bg-[#f2f2f2] rounded-lg ">
              <div className="flex flex-col items-center mb-4 bg-white p-6 ">
                <img
                  src="/img/profile.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <img src="/img/test.png" alt="Company Logo" className="h-12" />
              </div>
            </div>

            {/* Right Section - Content */}
            <div className="relative w-2/3 p-2">
              {/* Modal Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#48a38b]">
                  {getModalTitle(layout)}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-700 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl p-1.5"
                >
                  ×
                </button>
              </div>

              <CallRequest />
            </div>
          </div>
        )}


      </div>
    </>
  );
};

export default ContactModal;
