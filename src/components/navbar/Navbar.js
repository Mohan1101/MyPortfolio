import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className='flex items-center gap-6'>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <img src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FbannerImg3%20(1).png?alt=media&token=106d2125-542d-4408-a0d9-0d3ce8861416" alt="logo" className="w-20 h-20 bg-white rounded-full border border-solid" />
        </Link>
        <h1 className="text-md lg:text-2xl font-bold text-gray-400">Welcome</h1>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="rounded-md w-[100%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32 rounded-full border border-solid" src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Flogo.png?alt=media&token=02b0806f-2bc5-48a4-a93a-708da0043540" alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  Full Stack Developer | Competitive Programmer | Problem Solver | Leader
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar