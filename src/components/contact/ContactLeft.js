import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FcontactImg.png?alt=media&token=f78209ad-5505-4623-8380-f6acc432403b"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mohan Raj</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a MERN Stack Developer with 3+ years of experience in building web applications. I have worked on various projects in different domains like E-commerce, Healthcare, and Education. I have a good understanding of the Software Development Life Cycle (SDLC) and Agile Methodology. I am a quick learner and a team player who can work independently and in a team environment.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 6379609282</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mohanarul1976@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft