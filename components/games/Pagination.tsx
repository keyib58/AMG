'use client';

import React from 'react';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'bg-neutral-600 cursor-not-allowed' : 'bg-neutral-700 hover:bg-neutral-800'} text-white rounded-md`}
            >
                Previous
            </button>
            <span className="px-4 py-2 mx-1 text-neutral-200">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'bg-neutral-600 cursor-not-allowed' : 'bg-neutral-700 hover:bg-neutral-800'} text-white rounded-md`}
            >
                Next
            </button>
        </div>
    );
}
