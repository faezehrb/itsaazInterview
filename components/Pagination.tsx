import React from 'react';
import {PaginationProps} from '@/types/products';


const Pagination: React.FC<PaginationProps> = ({ page, total, setPage, limit }) => {
  const totalPages = Math.ceil(total / limit);

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', page - 1, page, page + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const handleClick = (p: number | string) => {
    if (typeof p === 'number' && p !== page) {
      setPage(p);
    }
  };

  return (
    <div className="flex justify-center md:justify-end  items-center gap-2 my-12  flex-wrap text-sm">
      <button
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        disabled={page === 1}
        className="p-1 md:p-3 bg-[#F7F7F8] cursor-pointer rounded disabled:opacity-50 disabled:cursor-default "
      >
            <svg width="24" height="24" fill="none">
                <use href="/icons.svg#arrow" />
            </svg>
      </button>

      {getPageNumbers().map((p, i) => (
        <button
          key={i}
          disabled={p === '...'}
          onClick={() => handleClick(p)}
          className={`p-1 md:p-3 w-[32px] h-[32px] md:w-[48px] md:h-[48px] rounded cursor-pointer ${
            p === page
              ? 'bg-[#3C3D45] text-white cursor-default'
              : p === '...'
              ? 'cursor-default'
              : 'bg-[#F7F7F8] hover:bg-gray-200'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
        disabled={page === totalPages}
        className="p-1 md:p-3 bg-[#F7F7F8] cursor-pointer rounded disabled:opacity-50 disabled:cursor-default "
      >
           <svg className='rotate-180' width="24" height="24" fill="none">
                <use href="/icons.svg#arrow" />
            </svg>
      </button>
    </div>
  );
};

export default Pagination;