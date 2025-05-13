import React from 'react';
import {FilterProps} from '@/types/products';

const Filter: React.FC<FilterProps> = ({ categories, categoryFilter, setCategoryFilter, applyFilter, clearFilter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-4 gap-4">
      <div className="relative w-full md:w-auto">
        <span className="absolute -top-2 right-3 bg-white text-sm text-gray-700 px-1">Category</span>
        <select
          className="cursor-pointer w-full md:w-[221px] h-14 p-4 border border-[#eeeeee] rounded-md text-md"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">دسته‌بندی</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <button
          onClick={applyFilter}
          className="py-2 px-6 w-full md:w-[252px] bg-[#FF7B2D] h-14 cursor-pointer text-white rounded-md text-md"
        >
          اعمال فیلترها
        </button>
        <button
          onClick={clearFilter}
          className="px-4 py-2 w-full md:w-[82px] bg-[#FF4040] h-14 cursor-pointer text-white rounded-md text-md"
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default Filter;