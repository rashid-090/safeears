import React, { useEffect, useRef, useState } from 'react';
import {logo} from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import CartModal from './CartModal';

const menuItems=[
  {title:`home`,url:`/`},
  {title:`about us`,url:`/about-us`},
  {title:`shop`,url:`/shop`},
  {title:`testimonials`,url:`/testimonials`},
]

const Header = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };


  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  open
  ? (document.body.style.overflow = "hidden")
  : (document.body.style.overflow = "unset");

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.1,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.3,
        duration: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <nav className='w-11/12 lg:w-10/12 mx-auto flex items-center justify-between bg'>
        <Link to={'/'}><img className='w-20 h-20 -ml-2 xl:w-40 xl:h-40 2xl:h-48 2xl:w-48 object-fill' src={logo} alt="safeears" /></Link>
        {/* large screen menu */}
        <ul className='hidden lg:flex items-center gap-5'>
          {menuItems?.map((menu,i)=>(
            <>
              <li className={`text-xl uppercase text-white ${currentPathname === menu.url ? 'border-b border-main' : 'border-b border-transparent' }`} key={i}><Link to={menu.url}>{menu.title}</Link></li>{i < menuItems.length - 1 && <span className="text-gray-300">•</span>}
            </>
          ))}
        </ul>
        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
            ref={menuRef} 
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed lg:hidden left-0 top-0 w-full h-fit pt-20 rounded-b-[2rem] origin-top bg-white text-main p-10 z-[99999]"
            >
              <motion.div
               initial={{ opacity: 0, rotate:90 }}
               animate={{ opacity: 1, rotate:0 }}
               exit={{ opacity: 0, rotate:90 }}
               transition={{ duration: 0.3 }}
              className='absolute right-4 top-6'
              >
                <MdClose
                  onClick={toggleMenu}
                  className="text-3xl"
                />
              </motion.div>
              <motion.div
                    className="w-24 absolute top-5 left-5"
                    initial={{ opacity: 0, translateY: 40 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -40 }}
                    transition={{ duration: 0.3 }}
              >
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -40 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-center  items-center gap-3 md:gap-4 "
              >
               <div className='overflow-hidden flex flex-col gap-2 text-center font-semibold capitalize text-xl'>
               {menuItems?.map((menu,i)=>(
                 <Link onClick={()=> setOpen(false)} className="hover:underline" to={menu.url}>{menu.title}</Link>
               ))}
               </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

       <div className='flex gap-8 items-center'>
            <div className='relative'>
            <span className='absolute -top-3 -right-3 bg-red-500 text-white w-5 h-5 text-xs rounded-full grid place-items-center'>2</span>
            <Link className='text-2xl hover:text-main' onClick={toggleCartModal}><FaCartShopping/></Link>
          </div>
          <HiOutlineMenuAlt1 onClick={toggleMenu} className='text-3xl block lg:hidden '/>
       </div>

        {/*  */}
        <CartModal isOpen={isCartOpen} onClose={toggleCartModal} />
    </nav>
  )
}

export default Header