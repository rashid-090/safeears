import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div>
        <Navbar/>
        {/*  */}
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-20'>
                <div className='bg-main rounded-sm p-10 flex flex-col gap-3'>
                    <h1 className='text-2xl xl:text-4xl'>Products</h1>
                    <p>10 product</p>
                    <button className='bg-white hover:bg-gray-200 duration-200 text-sm uppercase tracking-wider text-black w-fit h-10 px-10 rounded-md'>View</button>
                </div>
                <div className='bg-main rounded-sm p-10 flex flex-col gap-3'>
                    <h1 className='text-2xl xl:text-4xl'>Orders</h1>
                    <p>100 orders</p>
                    <button className='bg-white hover:bg-gray-200 duration-200 text-sm uppercase tracking-wider text-black w-fit h-10 px-10 rounded-md'>View</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard