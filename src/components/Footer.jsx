import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import {uklgo,indlgo} from '../assets'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-4 border-main py-5 flex items-center">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="text-base flex flex-col items-center lg:items-start gap-y-5 lg:flex-row justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <FaWhatsapp className="text-3xl"/>
            <p>Customer Support :</p>
            <span className="flex items-center divide-x-2">
            <a className="hover:underline px-2" href="https://wa.me/919207066699" target="_blank">+91 92070 66699</a>
            <a className="hover:underline px-2" href="https://wa.me/919207166699" target="_blank">+91 92071 66699</a>
            </span>
          </div>

          
          <div className="flex  text-[10px] md:text-base items-center gap-5">
            <div className="flex gap-2 items-center">
              <img className="h-8 w-8 object-cover" src={uklgo} alt="" />
              <p>Designed in United Kingdom</p>
            </div>
            <div className="flex gap-2 items-center">
              <img className="h-8 w-8 object-cover" src={indlgo} alt="" />
              <p>Made in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
