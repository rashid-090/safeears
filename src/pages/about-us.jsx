import React from 'react';
import {earaids} from '../assets'

const AboutUs = () => {
  return (
    <section className='w-11/12 xl:w-10/12 mx-auto h-full py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 xl:pt-20'>
            <div className='xl:col-span-2 grid place-items-center'>
                <img className='h-[300px] w-[300px] xl:h-[400px] xl:w-[400px] object-cover' src={earaids} loading='lazy' alt="safeears" />
            </div>
            <div className='xl:col-span-3 flex items-center'>
                <p className='text-lg'>At Safe Ears, we understand the profound impact that hear infections
                can have on your daily life. That's why we're dedicated to providing
                top-quality hearing aids designed to enhance your hearing experi-
                ence and improve your quality of life. Our brand, Safe Ears, stands for
                reliability, innovation, and exceptional customer care.
                We have experienced doctors and audiologist in our panel board to
                analyse the product.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs