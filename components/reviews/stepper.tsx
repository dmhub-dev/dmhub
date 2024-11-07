import React from "react";

interface StyledClickableStepperProps {
  activeStep: number; 
  onStepChange: (index: number) => void;
}

const Stepper: React.FC<StyledClickableStepperProps> = ({
  activeStep,
  onStepChange,
}) => {
  const steps = 10;

  const handleStepClick = (index: number): void => {
    onStepChange(index + 1); 
  };

  return (
    <div className="flex items-center px-2 py-5 mr-2">
      <div className="relative w-80">
        <div className="absolute inset-0 h-1 bg-gray-300 rounded-full"></div>
                <div
          className="absolute h-1 bg-[#3995c0] rounded-full transition-all duration-300"
          style={{ width: `${((activeStep - 1) / (steps - 1)) * 100}%` }}
        ></div>

        {/* Step Circles */}
        <div className="flex justify-between relative">
          {[...Array(steps)].map((_, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 z-10 ${
                index + 1 <= activeStep ? "bg-[#3995c0]" : "bg-gray-300"
              }`}
              style={{
                position: "absolute",
                left: `${(index / (steps - 1)) * 100}%`,
                transform: "translateX(-50%)",
                top: "-5px",
              }}
              onClick={() => handleStepClick(index)}
            >
              {index + 1 === activeStep && (
                <>
                  <div className="absolute -bottom-8 w-6 h-6 bg-[#3995c0] text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                    <span className="relative z-10">{index + 1}</span>
                  </div>
                  <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 translate-y-full w-3 h-3 bg-[#3995c0] rotate-45"></span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
