// components/SubHeader.jsx
import React from 'react';

const SubHeader = ({ title }: { title: string }) => {
  return (
    <div className="subheader_bg">
      <h3 className="subheader">
        {title}
      </h3>
    </div>
  );
};

export default SubHeader;
