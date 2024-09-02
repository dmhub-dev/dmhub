import React from "react";

interface LandscapeLayoutProps {
  className?: string;
  style?: React.CSSProperties;
}

const LandscapeLayout: React.FC<LandscapeLayoutProps> = (props) => {
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
        d="M18 3a3 3 0 00-3-3H3a3 3 0 00-3 3v2a3 3 0 003 3h12a3 3 0 003-3V3zm-3-1a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h12zm3 11a3 3 0 00-3-3H3a3 3 0 00-3 3v2a3 3 0 003 3h12a3 3 0 003-3v-2zm-3-1a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 011-1h12z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export default LandscapeLayout;
