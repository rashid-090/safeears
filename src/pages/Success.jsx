import React from 'react';
import { useNavigate } from 'react-router-dom';

let done = 'https://www.sfu.ca/siat/student_projects/iat339_2022_summer/enoc/P2_thunderousCats/public_html/img/confirmationPage/checkMark.png'

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
    <div className='w-fit grid place-items-center gap-5'>
          <img className='h-20 xl:h-32 object-fill animate-pulse' src={done} alt="success image" />
         <h3 className='text-2xl font-bold'>Order Completed</h3>
         <button onClick={() => navigate('/')} className='bg-main hover:bg-yellow-600 transition-all duration-300 px-10 py-2'>Go to Home</button>
    </div>
 </div>
  )
}

export default Success