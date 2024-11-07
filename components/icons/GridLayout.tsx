import React from "react";

interface GridLayoutProps {
  className?: string;
  style?: React.CSSProperties;
}

const GridLayout: React.FC<GridLayoutProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 18"
      height="1em"
      width="1em"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 0a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3V3a3 3 0 00-3-3H3zM2 3a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 7a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3v-2a3 3 0 00-3-3H3zm-1 3a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2zm8 0a3 3 0 013-3h2a3 3 0 013 3v2a3 3 0 01-3 3h-2a3 3 0 01-3-3v-2zm3-1a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2zm0-12a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3V3a3 3 0 00-3-3h-2zm-1 3a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V3z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default GridLayout;
