import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
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
              <a href="https://www.facebook.com/profile.php?id=61560658988420" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@safeears" target="_blank">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/safe.ears.india/" target="_blank">
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
