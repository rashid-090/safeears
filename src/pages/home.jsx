import React, { useState } from 'react';
import {earandface,earaids,safewht,safeamz,safeflp} from '../assets'
import { Link } from 'react-router-dom';


const HomePage = () => {


  return (
    <div className='ml-5 md:ml-10 lg:ml-24 xl:ml-32 xl:-mt-10'>

    <section className='flex flex-col-reverse justify-center md:flex-row gap-x-10 overflow-hidden py-10 md:py-0'>
        <div className='lg:basis-2/6 pt-10 xl:pt-40 mr-5 md:mr-0'>
            <div className='flex flex-col gap-3 text-center  border-2 rounded-[2.5rem] w-full md:w-fit p-5'>
            <h1 className='-mt-12 font-semibold'>Unit of GRAND VF PVT. LTD.</h1>
                <h3 className='text-3xl uppercase font-semibold'>shop now</h3>
                <a href='https://wa.me/919207066699' target='_blank'><img className='h-20 object-contain rounded-2xl py-1 bg-white w-full' src={safewht} alt="" /></a>
                <a href='https://amzn.in/d/bEjLF1S' target='_blank'><img className='h-20 object-contain rounded-2xl py-1 bg-white w-full' src={safeamz} alt="" /></a>
                {/* <Link to={'/under-construction'}><img className='h-20 object-contain rounded-2xl py-1 bg-white w-full' src={safeflp} alt="" /></Link> */}
            </div>
        </div>
        <div className='lg:basis-4/6 flex gap-5 xl:gap-10 justify-end'>
            <div className='h-full flex items-center'>
              <img className='h-[180px] sm:h-[200px] object-cover md:h-[300px] xl:h-[400px] 2xl:h-[500px]' src={earaids} alt="" />
            </div>
            <div className='flex items-end'>
              <img className='h-[200px] sm:h-[250px] object-cover md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]' src={earandface} alt="" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomePage

// https://wa.me/+971569251238