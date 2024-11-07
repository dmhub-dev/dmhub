import React from "react";

interface ChevronDownProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 31"
      height={props.height}
      width={props.width}
      role="img"
      {...props}
    >
      <path
        d="M15.5 15.5l1.06-1.06 1.061 1.06-1.06 1.06L15.5 15.5zM3.06.94l13.5 13.5-2.12 2.12L.94 3.06 3.06.94zm13.5 15.62l-13.5 13.5-2.12-2.12 13.5-13.5 2.12 2.12z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default ChevronDown;
