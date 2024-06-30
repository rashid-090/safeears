import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-4 border-main py-5 xl:py-8 flex items-center">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <div className="text-base flex flex-col items-center lg:items-start gap-y-5 lg:flex-row justify-between">
          <p>
            Customer Support : <a href="tel:+919207166699">+91 92071 66699</a>
          </p>

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

          <div className="divide-x-2 divide-main flex gap-3 capitalize">
            <Link to={'/privacy-policy'} className="hover:underline">privacy policy</Link>
            <Link to={'/terms-and-conditions'} className="pl-3 hover:underline">terms and conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
