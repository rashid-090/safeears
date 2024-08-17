import React, { useState } from 'react';
import {earandface,earaids,safewht,safeamz,safeflp} from '../assets'
import { Link } from 'react-router-dom';

const HomePage = () => {


  return (
    <div className='ml-5 md:ml-10 lg:ml-24 xl:ml-32 xl:-mt-10'>

    <section className='flex flex-col-reverse justify-center md:flex-row gap-x-10 overflow-hidden py-10 md:py-0'>
        <div className='xl:basis-2/6 pt-10 xl:pt-40 mr-5 md:mr-0'>
            <div className='flex flex-col gap-3 text-center  border-2 rounded-[2.5rem] w-full md:w-fit p-5'>
            <h1 className='-mt-12 font-semibold'>Unit of GRAND VF PVT. LTD.</h1>
                <h3 className='text-3xl uppercase font-semibold'>shop now</h3>
                <a href="#" target='_blank'><img className='object-cover h-24 md:h-20 w-full md:w-fit px-10 bg-white hover:bg-gray-200 hover:shadow-xl duration-200 rounded-2xl' src={safewht} alt="" /></a>
                <a href="#" target='_blank'><img className='object-cover h-24 md:h-20 w-full md:w-fit px-10 bg-white hover:bg-gray-200 hover:shadow-xl duration-200 rounded-2xl' src={safeamz} alt="" /></a>
                <a href="#" target='_blank'><img className='object-cover h-24 md:h-20 w-full md:w-fit px-10 bg-white hover:bg-gray-200 hover:shadow-xl duration-200 rounded-2xl' src={safeflp} alt="" /></a>
            </div>
        </div>
        <div className='xl:basis-4/6 flex gap-5 xl:gap-10 justify-end'>
            <div className='h-full flex items-center'>
              <img className='h-[180px] sm:h-[200px] object-cover xl:h-[500px]' src={earaids} alt="" />
            </div>
            <div className='flex items-end'>
              <img className='h-[200px] sm:h-[250px] object-cover md:h-[300px] xl:h-[600px]' src={earandface} alt="" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default HomePage

// https://wa.me/+971569251238