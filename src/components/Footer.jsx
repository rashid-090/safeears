import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-4 border-main py-5 xl:py-8 flex items-center">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="text-lg flex flex-col items-center md:items-start gap-y-2 md:flex-row justify-between">
          <p>
            Customer Support : <a href="tel:+919207166699">+91 92071 66699</a>
          </p>
          <div className="flex gap-5">
            <p>Connect us</p>
            <div className="flex gap-3 text-2xl">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
