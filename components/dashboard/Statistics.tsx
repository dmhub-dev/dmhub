import React from "react";


// Statistics Section
const StatisticsSection = () => {
    const statisticsData = [
      { title: "Telefonische aanvragen", icon: "phone" },
      { title: "Brochure downloads", icon: "download" },
      { title: "E-mail aanvragen", icon: "email" },
      { title: "Website bezoeken", icon: "website" },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-lg p-6 h-[200px] w-[530px]">
        <div className="grid grid-cols-2 gap-6">
          {statisticsData.map((item, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-600"
                >
                  {item.icon === "phone" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  )}
                  {item.icon === "download" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16v-8m0 0L9.5 9.5M12 8l2.5 1.5M4 18h16"
                    />
                  )}
                  {item.icon === "email" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                    />
                  )}
                  {item.icon === "website" && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m0-16C6.477 4 2 8.477 2 14s4.477 10 10 10 10-4.477 10-10S17.523 4 12 4zm0 16c-2.21 0-4-1.79-4-4m8 4c2.21 0 4-1.79 4-4"
                    />
                  )}
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">{item.title}</span>
                <span className="text-sm font-bold">0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default StatisticsSection;