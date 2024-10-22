import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPage, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      {/* Previous Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50 menu-btn-font"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Display */}
      <span className="text-white">
        {currentPage} of {totalPage}
      </span>

      {/* Next Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50 menu-btn-font"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
