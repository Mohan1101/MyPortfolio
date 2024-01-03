import React from 'react'
import "../../index.css"


const RightBanner = () => {
  return (
    <>
      
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          className="w-[300px] h-[400px] lgl:w-[400px] lgl:h-[680px] z-10"
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FbannerImg1.png?alt=media&token=5ac4a1d7-021c-4ed4-9dca-33e8f03c3622"
          alt="bannerImg"
        />
        <div className="absolute bottom-0 mr-10 ml-10 w-[300px] h-[400px] lgl:w-[500px] lgl:h-[700px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </>

  );
}

export default RightBanner