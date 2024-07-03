import React from 'react';

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-75" onClick={handleBackgroundClick}></div>
      <div className="bg-white p-5 xl:p-10 rounded-3xl text-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[85%] xl:w-fit">
            <div className='grid grid-cols-1 md:grid-cols-2 xl:gap-x-20'>
                    <div className='flex flex-col items-center md:items-start justify-center'>
                        <img className='h-80 w-60 xl:h-[400px] xl:w-[300px] object-cover' src={product.prodimage} alt="" />
                    </div>
                    <div className='flex flex-col gap-3 justify-center'>
                        <h1 className='text-xl font-semibold'>{product.name}</h1>
                        <h3 className='text-base'>quantity</h3>
                        <h3 className='text-base'>color</h3>
                        <button className='bg-main text-white py-3 w-full capitalize rounded-xl'>add to cart</button>
                    </div>
            </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;


{/* <button
className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
onClick={onClose}
>
Close
</button> */}