import React from 'react';
import ReactPlayer from 'react-player'

const OurVideosGallery=[
    {
        vidiId:`OVVGknTdgQI`
    },
    {
        vidiId:`cqBg6f9R9dU`
    },
   
]

const OurVideos = () => {
  return (
    <section className="w-11/12 xl:w-10/12 mx-auto py-10 h-full">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {OurVideosGallery?.map((data)=>(
            <div className='w-full h-full'>
                  <iframe className='w-full h-52 xl:h-80' src={`https://www.youtube.com/embed/${data.vidiId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            ))}
        </div>
        
    </section>
  )
}

export default OurVideos