import React from 'react';
import clsx from 'clsx';

interface SubHeaderProps {
  title: string;
  className?: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ title, className }) => {
  return (
    <div className={clsx("subheader_bg", className)}>
      <h3 className="subheader">
        {title}
      </h3>
    </div>
  );
};

export default SubHeader;
