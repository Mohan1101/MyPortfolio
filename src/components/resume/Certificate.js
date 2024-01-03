import React from "react";
import { motion } from "framer-motion"
import CertificateCard from "./CertificateCard";

const Certificate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internships</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8">
        <CertificateCard
            title="Data Analyst"
            subTitle="Defence Research and Development Organisation (DRDO) - (2023 - 2024)"
            download="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FInternship-DRDO.jpg?alt=media&token=6b73a2aa-8e7a-47d4-81fe-2d8555afba27"
            des="The Defence Research and Development Organisation is the premier agency under the Department of Defence Research and Development in Ministry of Defence of the Government of India, charged with the military's research."
          />
          <CertificateCard
            title="Web Developer"
            subTitle="Vzeal - (2022 - Present)"
            download="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FLOR-VZEAL.pdf?alt=media&token=a5dd038e-37ba-40ab-92d7-d4e3e723ee05"
            des="Vzeal is a A tech startup currently working on Virtual Reality and providing web/app services."
          />
          <CertificateCard
            title="Web Developer"
            subTitle="Jp Morgan and Chase - (2021-2022)"
            download="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FJP%20morgan%26%20Chase.jpg_page-0001.jpg?alt=media&token=27eda4c2-6e3c-4f82-b9b2-8caf1481a836"
            des="JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company headquartered in New York City."
          />
          <CertificateCard
            title="Front-end Developer"
            subTitle="Immensphere - (2020 - 2021)"
            download="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FCertificate%20of%20Completion%20Immensphere.pdf?alt=media&token=d4e01afa-2444-493d-a8d7-b580be9e4b2a"
            des="Immensphere is a pioneer in understanding the precise needs of companies and provide bespoken Cost Effective Solutions. Innovative Client Centrical processes with proactive methods is the motive of our services in Immense Sphere of Indian business communities."
          />
        </div>
        <a href="https://drive.google.com/drive/folders/1d-PIAbnb2maD6ueZ8LC50s9_h_9n3IOu?usp=sharing"  alt="download" download="download" target="_blank" rel="noreferrer"  title="Click to view the certificates" className="text-designColor ">
        <div className="mt-32 ml-0 md:mt-8 hover:bg-black duration-300 shadow-shadowOne lgl:w-[50%] bg-black bg-opacity-20 rounded-lg mt-8 p-4 ml-40 flex justify-center">
          
            Click for More
        
        </div>
        </a>
      </div>
      {/* part Two */}

      <div className="mt-4 md:mt-0 lg:mt-0">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>

        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <CertificateCard
            title="Full Stack Web Developement"
            subTitle="Devtown (2022 - 2023)"
            download="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FDEVTOWN%20FULL-STACK%20CERTIFICATE.pdf?alt=media&token=cea421d3-c6c4-4310-b36e-8de37726f092"

            des="Full stack web development is the practice of developing both front-end and back-end of a website. It is a combination of programming languages and frameworks used to achieve a particular result."
          />
          <CertificateCard
            title="Python for Data Science"
            subTitle="PanTech (2022 - 2023)"
            download="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FPANTECH-PYTHON.pdf?alt=media&token=e3808eae-ddb9-4a57-bb14-932d8936815f"
            des="Python is a general-purpose coding language—which means that, unlike HTML, CSS, and JavaScript, it can be used for other types of programming and software development besides web development."
          />
          <CertificateCard
            title="Pygame for Game Developement"
            subTitle="GUVI (2022 - 2023)"
            download="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FCertificate%20of%20Completion%20on%20pygame-%20Guvi.pdf?alt=media&token=dfc34f76-f1a9-4319-bafe-5bdc58758548"
            des="Pygame is a cross-platform set of Python modules designed for writing video games. It includes computer graphics and sound libraries designed to be used with the Python programming language."
          />

        </div>
        <a href="https://drive.google.com/drive/folders/1d-PIAbnb2maD6ueZ8LC50s9_h_9n3IOu?usp=sharing"  alt="download" download="download" target="_blank" rel="noreferrer"  title="Click to view the certificates" className="text-designColor ">
        <div className="mt-32 ml-0 md:mt-8 hover:bg-black duration-300 shadow-shadowOne lgl:w-[50%] bg-black bg-opacity-20 rounded-lg mt-8 p-4 ml-40 flex justify-center">
          
            Click for More
        
        </div>
        </a>
      </div>

    </motion.div>
  );
};



export default Certificate;



