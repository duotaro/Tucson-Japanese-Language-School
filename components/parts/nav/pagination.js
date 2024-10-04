// components/Pagination.js

import Link from 'next/link';

const Pagination = ({ currentPage, totalPages, onTouchedPage, onTouchedPrev, onTouchedNext }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);
  const firstPage = currentPage == 1
  const lastPage = currentPage >= totalPages

  return (
    <div className="border-t border-gray-200 bg-white px-4 py-3 sm:px-6  ">
      <div className="">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md " aria-label="Pagination">
            {firstPage && (
              <span  className="disabled text-gray-400 relative inline-flex items-center px-2 py-2 ">
                  <span className="sr-only">Previous</span>
                  {/* Previous Arrow Icon */}
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                  </svg>
              </span>
            )}
            {!firstPage && (
              <button onClick={onTouchedPrev} className="relative inline-flex items-center px-2 py-2 hover:text-blue-500">
                  <span className="sr-only">Previous</span>
                  {/* Previous Arrow Icon */}
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                  </svg>
              </button>
            )}
            {pageNumbers.map((number) => (
              <button key={number} onClick={() => {onTouchedPage(number)}} className={`shadow-sm relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage == number ? 'bg-blue-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}`}>
                  {number}
              </button>
            ))}
            {lastPage && (
              <span  className="disabled text-gray-400 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ">
                  <span className="sr-only">Next</span>
                  {/* Next Arrow Icon */}
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
              </span>
            )}
            {!lastPage && (
              <button onClick={onTouchedNext} className="relative inline-flex items-center px-2 py-2 hover:text-blue-500">
                  <span className="sr-only">Next</span>
                  {/* Next Arrow Icon */}
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;