import React from 'react'

const HomePage = () => {
  return (
    <section className='w-11/12 lg:w-10/12 mx-auto'>
      <div className='flex flex-col gap-8'>
        <h1 className='font-riche text-6xl'>Enhance your<br className='hidden lg:block'/>Ear safety</h1>
        <button className='font-riche bg-main text-black hover:text-white duration-300 text-3xl w-fit px-8 py-2 rounded-full'>shop now</button>
        <div className='text-xl flex gap-3'>
          <a className='hover:underline' href="#">TRACK ORDER</a>
          <span>•</span>
          <a className='hover:underline' href="#">VIDEOS</a>
        </div>
      </div>
      <h1 className='absolute top-0 right-0'>sdad</h1>
    </section>
  )
}

export default HomePage