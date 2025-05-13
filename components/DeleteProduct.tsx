'use client';

import { useState } from 'react';
import {Props} from '@/types/products';


export default function DeleteProduct({ productId, onDeleted , rowNumber}: Props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      await onDeleted(productId);
      setShowConfirm(false);
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowConfirm(true)}
        className="bg-[#FF4040]/30 p-2 ml-2 w-[42px] h-[38px] cursor-pointer rounded-md flex items-center justify-center"
      >
              <svg width="24" height="24" fill="none">
                  <use href="/icons.svg#delete" />
              </svg>
      </button>

      {showConfirm && (
        <div className="absolute z-10 left-0 w-[225px] bg-white border-t-4 border-[#FF4040]  shadow rounded p-2 top-full mt-2">
          <p className="text-sm mb-2 font-bold">?Are you sure</p>
          <p className="text-sm mb-2">Confirm to delete row {rowNumber}</p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setShowConfirm(false)}
              className="text-gray-600 cursor-pointer px-2 py-1 hover:underline text-sm"
              disabled={loading}
            >
              No
            </button>
            <button
              onClick={handleConfirmDelete}
              className="bg-[#FF4040] cursor-pointer text-white px-2 py-1 rounded text-sm hover:bg-[#FF4040]"
              disabled={loading}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
}