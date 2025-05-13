import React from 'react';
import {DeleteConfirmationProps} from '@/types/products';

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  confirmDeleteId,
  handleDelete,
  handleCancel,
  productId,
}) => {
  return (
    <>
      {confirmDeleteId === productId && (
        <div className="absolute top-0 z-20 translate-x-0 left-4 py-4 px-10 bg-white shadow-[0_25px_50px_rgba(0,0,0,0.08)] border-t-4 border-[#FF4040] rounded-sm min-w-[225px]">
          <p className='font-bold'>?Are you sure</p>
          <p>Confirm to delete </p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 cursor-pointer rounded"
            >
              No
            </button>
            <button
              onClick={() => handleDelete(productId)}
              className="px-4 py-2 bg-[#FF4040] cursor-pointer text-white rounded"
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmation;