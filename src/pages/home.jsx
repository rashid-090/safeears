import React from 'react';
import {earandface} from '../assets'

const HomePage = () => {
  return (
    <section className='ml-5 md:ml-10 lg:ml-24 xl:ml-32'>
     <div className='flex gap-y-10 flex-col-reverse md:flex-row justify-between pt-10 pb-10 md:pb-0'>
        {/*  */}
        <div className='flex flex-col gap-8 justify-center'>
          <h1 className='font-riche text-5xl md:text-3xl xl:text-6xl'>Enhance your<br className=''/>Ear safety</h1>
          <button className='font-riche bg-main text-black hover:text-white duration-300 text-2xl xl:text-3xl w-fit px-8 py-2 rounded-full'>shop now</button>
          <div className='text-lg flex gap-3'>
            <a className='hover:underline' href="#">TRACK ORDER</a>
            <span>•</span>
            <a className='hover:underline' href="#">VIDEOS</a>
          </div>
        </div>
        {/*  */}
       <div className='flex justify-end'>
        <img className='h-[300px] object-contain xl:h-[550px]' src={earandface} alt="face" />
       </div>
     </div>
    </section>
  )
}

export default HomePage