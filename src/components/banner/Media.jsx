import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
        <a href="https://www.facebook.com/Mohan7176" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            
              <FaFacebookF />
            
          </span>
          </a>
          <a href="https://twitter.com/MohanArul4161" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            
              <FaTwitter />
            
          </span>
          </a>
          <a href="https://www.linkedin.com/in/mohan-raj-a41a991b2" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            
              <FaLinkedinIn />
           
          </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">

              <FaReact />

            </span>
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">

              <SiNextdotjs />

            </span>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">

              <SiTailwindcss />

            </span>
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">

              <SiFigma />

            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Media