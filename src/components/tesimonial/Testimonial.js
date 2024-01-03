import React, { useState } from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { FiDownload } from "react-icons/fi";




function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      title="Click to Next"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      title="Click to Prev"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-12 border-b-[1px] border-b-black"
    >
      <div className="mt-0 flex justify-center items-center text-center md:mt-0 lgl:mt-0">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2Fdrdo-logo.webp?alt=media&token=f95f2af0-5714-4a96-b2d7-1e4bd083e513"
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    CHANDIGARH
                  </p>
                  <h3 className="text-2xl font-bold">Defence Research and Development Organisation</h3>
                  <p className="text-base tracking-wide text-gray-500">

                  </p>
                </div>
                <div>

                  <a href="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FDRDO%20INTERNSHIP%20LOR.jpg?alt=media&token=42aeb731-55a7-4b9b-9c19-e1215cbc5c38" alt="download" download="download" target="_blank" rel="noreferrer" title="Click to Download LOR">
                    <p className="text-center text-xs uppercase text-designColor tracking-wide m-2 ml-0">
                      (Letter of recommendation)
                    </p>
                    <p className="px-2 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium hover:bg-black duration-300 shadow-shadowOne">

                      <FiDownload className="m-2 text-designColor text-xl" />


                    </p>

                  </a>

                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fquote.png?alt=media&token=28449750-5165-4e8d-a74c-beb6d68524db" alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Various Artificial Neural Network (ANN) Architectures Evaluation for Mass Movement Susceptibility
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Jul 17, 2023 - Nov 14, 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Mohan Raj's internship at DGRE was a shining example of dedication and technical prowess. He delved into the intricacies of machine learning, optimizing various ANN topologies to build robust landslide susceptibility models. His keen eye for performance optimization ensured peak model accuracy, while his visualization skills transformed complex data into clear, actionable maps. Mohan's unwavering commitment, quick learning abilities, and relentless pursuit of solutions left a lasting impression. I have no doubt that his passion and dedication will propel him to great heights in whatever path he chooses next.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FVZEAL-logo.jpg?alt=media&token=1c0ebc0d-2f8c-494c-9099-28432bf4d472"
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    CHENNAI
                  </p>
                  <h3 className="text-2xl font-bold">VZeal Groups</h3>
                  <p className="text-base tracking-wide text-gray-500">

                  </p>
                </div>
                <div>

                  <a href="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FLOR-VZEAL.pdf?alt=media&token=a5dd038e-37ba-40ab-92d7-d4e3e723ee05" alt="download" download="download" target="_blank" rel="noreferrer" title="Click to Download LOR">
                    <p className="text-center text-xs uppercase text-designColor tracking-wide m-2 ml-0">
                      (Letter of recommendation)
                    </p>
                    <p className="px-2 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium hover:bg-black duration-300 shadow-shadowOne">

                      <FiDownload className="m-2 text-designColor text-xl" />


                    </p>

                  </a>

                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fquote.png?alt=media&token=28449750-5165-4e8d-a74c-beb6d68524db" alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Madras Defence Academy
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Apr 15, 2023 - Jul 30, 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Mohan's remarkable skills were evident in his outstanding work
                    on the madrasdefenceacademy.in website. He played a pivotal
                    role in designing and implementing the front end using ReactJS,
                    delivering a seamless and exceptional user experience.
                    Throughout the project, Mohan showcased his problem-solving
                    abilities and effective collaboration skills. His attention to detail,
                    dedication, and commitment to excellence greatly contributed to
                    the project's success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================ Slider Three ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fimmensphere-logo.png?alt=media&token=ad75d573-2694-4bfb-b339-13cfc11a39dc"
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    BANGALORE
                  </p>
                  <h3 className="text-2xl font-bold">Immensphere</h3>
                  <p className="text-base tracking-wide text-gray-500">

                  </p>
                </div>
                <div>

                  <a href="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FCertificate%20of%20Completion%20Immensphere.pdf?alt=media&token=d4e01afa-2444-493d-a8d7-b580be9e4b2a" alt="download" download="download" target="_blank" rel="noreferrer" title="Click to Download LOR">
                    <p className="text-center text-xs uppercase text-designColor tracking-wide m-2 ml-0">
                      (Letter of recommendation)
                    </p>
                    <p className="px-2 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium hover:bg-black duration-300 shadow-shadowOne">

                      <FiDownload className="m-2 text-designColor text-xl" />


                    </p>

                  </a>

                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fquote.png?alt=media&token=28449750-5165-4e8d-a74c-beb6d68524db" alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Web Development
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - May 15, 2022 - Aug 30, 2022
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Mohan's remarkable skills were evident in his outstanding work
                    on developing intriguing websites. He played a pivotal
                    role in designing and implementing the front end using ReactJS,
                    delivering a seamless and exceptional user experience. He has built 3 website with amazing UI/UX and aware of all the latest technologies. He knows the importance of deadlines and always delivered the work on time.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  );
}

export default Testimonial