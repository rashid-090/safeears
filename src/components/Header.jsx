import React from 'react';
import {logo} from '../assets';
import { Link } from 'react-router-dom';

const menuItems=[
  {title:`home`,url:`/`},
  {title:`about us`,url:`/about-us`},
  {title:`shop`,url:`/shop`},
  {title:`testimonials`,url:`/testimonials`},
]

const Header = () => {
  return (
    <nav className='w-11/12 lg:w-10/12 mx-auto flex items-center justify-between bg'>
        <Link to={'/'}><img className='w-20 h-20 -ml-2 xl:w-40 xl:h-40 object-cover' src={logo} alt="safeears" /></Link>
        <ul className='hidden lg:flex items-center gap-5'>
          {menuItems?.map((menu,i)=>(
            <>
              <li className='text-xl uppercase text-white' key={i}><Link to={menu.url}>{menu.title}</Link></li>{i < menuItems.length - 1 && <span className="text-gray-300">•</span>}
            </>
          ))}
        </ul>
        <div className='flex items-center gap-3 capitalize divide-x divide-main'>
            <Link className='text-lg'>Account</Link>
            <Link className='text-lg pl-3'>cart</Link>
        </div>
    </nav>
  )
}

export default Header