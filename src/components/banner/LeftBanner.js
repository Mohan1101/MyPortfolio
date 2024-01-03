import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Data Analyst."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Mohan Raj </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a highly motivated and enthusiastic computer science & engineering graduate with 3 years of experience in web development. My expertise lies in HTML, CSS, JavaScript, React, Node.js, MongoDB, MySQL, and DevOps. With a strong background in data structures, data analytics and worked extensively with various Python libraries and packages.

          
        </p>
     
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner