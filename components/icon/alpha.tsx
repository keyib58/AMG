import React from "react";

const AlphabeticalIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className} // Allow custom class names to control size
        transform="scale(1.2)"
    >
        <path d="M0.929336 10L4.01934 3H5.96934L9.06934 10H7.00934L4.58934 3.97H5.36934L2.94934 10H0.929336ZM2.61934 8.64L3.12934 7.18H6.54934L7.05934 8.64H2.61934Z" fill="black" />
        <path d="M1.58145 21V19.76L5.70145 14.87L5.94145 15.57H1.67145V14H7.70145V15.24L3.58145 20.13L3.34145 19.43H7.85145V21H1.58145Z" fill="black" />
        <path d="M14 18L11.4019 13.5L16.5981 13.5L14 18Z" fill="black" />
        <line x1="14" y1="6" x2="14" y2="14" stroke="black" strokeWidth="2" />
    </svg>
);

export default AlphabeticalIcon;
