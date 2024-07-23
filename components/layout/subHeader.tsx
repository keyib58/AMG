// components/SubHeader.jsx
import React from 'react';

const SubHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#111111] rounded-xl py-8 flex justify-center items-center">
      <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD868] to-[#FFFFFF] text-4xl Montserrat font-semibold uppercase">
        {title}
      </h3>
    </div>
  );
};

export default SubHeader;
