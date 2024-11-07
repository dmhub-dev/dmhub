/* eslint-disable @next/next/no-img-element */

import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { RiDownloadFill } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

interface FixedRightProps {
  verzorger: any;
  dummyData: any;
  openContactModal: () => void; 
  openModalWithLayout: (layoutType: string) => void
}

export const FixedRight: React.FC<FixedRightProps> = ({
  verzorger,
  dummyData,
  openContactModal, 
  openModalWithLayout
}) => {
  return (
    <div className="w-1/2 lg:w-1/2 h-screen sticky top-1/2 pt-[20vh] transform -translate-y-1/2 mr-6">
      <div className="text-white shadow-lg rounded-md">
        <div className="bg-[#48a38b] px-4 py-2">
          <h3 className="text-[22px] font-bold mb-2">
            Kom in contact met {verzorger.company || dummyData.company}
          </h3>
          <p className="text-[12px] mb-2">
            Wij staan u graag persoonlijk te woord, hiervoor kunt u zelf
            contact met ons opnemen, daarnaast kunnen wij u ook terugbellen
            mochten wij niet bereikbaar zijn. Indien gewenst kunt u eerst onze
            brochure downloaden.
          </p>
        </div>

        <div className="bg-white text-gray-900 w-full p-4">
          <div className="flex items-center mb-4">
            <div className="flex flex-col flex-wrap">
              <img
                src={verzorger.contact?.logo || "/img/test.png"}
                alt="Company Logo"
                className="w-2/3 h-auto object-cover mr-3"
              />
              <p className="text-[14px]">
                {verzorger.company || dummyData.company}
              </p>
              <p className="text-[14px] w-2/3 pr-[2px] flex-wrap">
                {verzorger.contact?.address || dummyData.contact.address}
              </p>
            </div>

            <div>
              <button
                className="w-full bg-white border-2 border-[#48a38b] text-[#48a38b] py-2 px-5 text-[14px] rounded-lg font-semibold mt-8 focus:bg-[#48a38b] focus:text-white focus:bg-opacity-40"
                onClick={() => openModalWithLayout('layout1')}
              >
                Kom met ons in contact
              </button>
              <p className="text-[12px] italic text-center text-gray-500 mb-1">
                Gratis en vrijblijvend
              </p>
            </div>
          </div>
          <div className="space-y-0">
              <div className="flex items-center justify-between text-[14px] py-[4px] cursor-pointer focus:bg-[#48a38b] hover:bg-[#48a38b] hover:bg-opacity-30" onClick={() => openModalWithLayout('layout2')}>
                  <span className="flex"><IoCall className="mr-2 mt-[2px]"/>Bel direct / terugbelverzoek</span>
                  <span className="text-green-600"><IoIosArrowForward/></span>
              </div>
              <hr className=" m-[2px]" />

              <div className="flex items-center justify-between text-[14px] py-[4px] cursor-pointer focus:bg-[#48a38b] hover:bg-[#48a38b] hover:bg-opacity-30" onClick={() => openModalWithLayout('layout3')} >
                  <span className="flex"><BsFillEnvelopeFill className="mr-2 mt-[2px] "/>Stuur een bericht</span>
                  <span className="text-green-600"><IoIosArrowForward/></span>
              </div>
              <hr className=" m-[2px]" />

              <div className="flex items-center justify-between text-[14px]  py-[4px] cursor-pointer focus:bg-[#48a38b] hover:bg-[#48a38b] hover:bg-opacity-30" onClick={() => openModalWithLayout('layout4')}>
                  <span className="flex"><RiDownloadFill className="mr-2 mt-[2px]"/>Download brochure</span>
                  <span className="text-green-600"><IoIosArrowForward/></span>
              </div>
              <hr className=" m-[2px]" />

              <div className="flex items-center justify-between text-[14px]py-[4px] cursor-pointer focus:bg-[#48a38b] hover:bg-[#48a38b] hover:bg-opacity-30" onClick={() => openModalWithLayout('layout5')}>
                  <span className="flex"><AiOutlineGlobal className="mr-2 mt-[2px]"/>Bekijk website</span>
                  <span className="text-green-600"><IoIosArrowForward/></span>
              </div>
              <hr className=" m-[2px]" />
          </div>
        </div>
      </div>
    </div>
  );
};




  