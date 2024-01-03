import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="pt-12 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.E in Computer Science and Engineering"
            subTitle="Rajalakshmi Institue Of Technology (2021 - 2025)"
            
            des="In my college journey, I have acquired substantial expertise and knowledge in AI and other areas of computer science. It also help me prepare to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Exchange year high school"
            subTitle="Sitka High School (2018 - 2019)"
            
            des="During my exchange year, I cultivated cultural understanding, built friendships, discovered upscaling technologies, demonstrated leadership and money management skills."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Anita Methodist School (2008 - 2021)"
            
            des="I graduated from secondary education with academic excellence in Computer Science, English, and Mathematics."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience (as an Intern)</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Data Analyst"
            subTitle="Defence Research and Development Organisation (DRDO) - (2023 - 2024)"
            
            des="The Defence Research and Development Organisation is the premier agency under the Department of Defence Research and Development in Ministry of Defence of the Government of India, charged with the military's research."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Vzeal - (2022 - 2023)"
            
            des="Vzeal is a A tech startup currently working on Virtual Reality and providing web/app services."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Jp Morgan and Chase - (2021-2022)"
            
            des="JPMorgan Chase & Co. is an American multinational investment bank and financial services holding company headquartered in New York City."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Immensphere - (2020 - 2021)"
            
            des="Immensphere is a pioneer in understanding the precise needs of companies and provide bespoken Cost Effective Solutions. Innovative Client Centrical processes with proactive methods is the motive of our services in Immense Sphere of Indian business communities."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education