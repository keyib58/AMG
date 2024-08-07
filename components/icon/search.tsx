import React from "react";
import clsx from 'clsx';

interface SearchIconProps {
  className?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("w-10 h-10", className)}
  >
    <g opacity="1">
      <circle cx="11" cy="11" r="7" stroke="black" strokeWidth="2" />
      <path d="M20 20L17 17" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

export default SearchIcon;
