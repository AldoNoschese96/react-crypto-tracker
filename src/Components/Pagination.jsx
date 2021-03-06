import React from "react";

//Icons
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const Pagination = ({ onNext, onBack, maxPages, currentPage, totals }) => {
  return (
    <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200 ">
      <div className="flex-1 flex justify-between sm:hidden">
        <div className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </div>
        <div className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </div>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(currentPage + 1) * 20 - 19}</span>{" "}
            to <span className="font-medium">{20 * (currentPage + 1)}</span> of{" "}
            <span className="font-medium">{totals}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <div
              style={currentPage === 0 ? { pointerEvents: "none" } : {}}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={onBack}
              />
            </div>
            <div
              style={
                currentPage === maxPages - 1 ? { pointerEvents: "none" } : {}
              }
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={onNext}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
