import React from 'react';
import { BsArrowUpCircle } from 'react-icons/bs';
import '../../index.css';

const Footer = () => {
  return (
    <footer className="relative bg-bodyColor text-white py-10">
      <div className="container mx-auto text-center relative">
        <div className="">
          <p className=" animate-gradient animate-gradient-slow  text-sm text-gray-300 my-2 animate-fade-in-paragraph transition-all duration-5000">
            "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill
          </p>
          <p className="animate-fade-in">&copy; 2023. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32  from-transparent via-transparent to-bodyColor animate-gradient transition-all duration-8000"></div>

      
      <div className="absolute bottom-0 right-0 p-4 hover:text-designColor transition duration-100">
        <a href="#top">
          <BsArrowUpCircle className="w-6 h-6 lg:w-8 lg:h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

