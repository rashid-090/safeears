import React from 'react';

const CartModal = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          {/* Modal */}
          <div className="bg-white text-black rounded-lg p-8 max-w-sm w-full mx-4">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                close
              </button>
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              {/* Add your cart items or any content here */}
            </div>
            <button className='bg-main text-white py-3 w-full rounded-xl text-base capitalize'>check out</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
