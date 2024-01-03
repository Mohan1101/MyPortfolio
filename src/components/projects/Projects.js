import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Stu-Notes"
          des="I poured my heart into building StuNotes, the ultimate weapon against textbook woes! Imagine AI guiding your note-taking, PDFs melting into text, and instant answers to your academic woes. It's your smart sidekick for learning faster, smarter, and, dare I say, a little magically."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fstu-notes.png?alt=media&token=a9e15691-b27c-4f66-9f3d-72361d52c083"
          gitlink="https://stu-notes-5a4d3.web.app/"
        />
        <ProjectsCard
          title="Madras Defence Academy"
          des="I designed and developed a captivating landing page for Madras Defence Academy. By combining creativity and technical expertise, I created an engaging user experience that effectively showcases the academy's offerings and captures visitor attention."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FprojectOne.jpg?alt=media&token=67e5e3bf-a224-4595-aa3a-d4bb605e0c53"
          gitlink="https://madrasdefenceacademy.in/"
        />
        <ProjectsCard
          title="E-Learning Website"
          des="I successfully developed an interactive e-learning website, providing a user-friendly platform for online education. Through intuitive design and seamless functionality, I created an engaging experience that facilitates effective learning and knowledge sharing for students and instructors alike."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FprojectTwo.jpg?alt=media&token=2f13fdf6-ff8f-4643-84d7-ff2c53e422bd"
          gitlink="https://github.com/Mohan1101/MAJOR-PROJECT"
        />
        <ProjectsCard
          title="Fake News Detection"
          des="I conducted research and implemented a working system for fake news detection. By combining data analysis and machine learning techniques, I developed an effective solution to identify and combat the spread of misinformation, contributing to the field of information integrity."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FprojectThree.jpg?alt=media&token=ccbe9d59-18df-40f5-8be7-dddc7c20b7e9"
          gitlink="https://github.com/Mohan1101/IntelUnnati_CodeX"

        />
        <ProjectsCard
          title="Jp Morgan & Chase"
          des="I developed a comprehensive stock market trading visualization tool for JP Morgan and Chase. By leveraging data analysis and visualization techniques, I created an interactive solution that aids in understanding market trends and making informed investment decisions."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FprojectFour.jpg?alt=media&token=e4dc58f7-79f6-402c-9188-563280e5ce9f"
          gitlink="https://github.com/Mohan1101/JP_MORGAN_tasks"
        />
        <ProjectsCard
          title="Disney Hotstar Clone"
          des=" I successfully created a website that emulates the functionalities and design of Disney Plus Hotstar. This clone project showcases my ability to develop engaging streaming platforms with user-friendly interfaces and captivating content delivery."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FprojectFive.jpg?alt=media&token=418550cf-6177-48e1-904c-cf288f9e49fb"
          gitlink="https://github.com/Mohan1101/DisneyHotstarClone/tree/master"
        />
        <ProjectsCard
          title="Voice Recognition System"
          des="
          I developed a voice recognition code implementation to extract information from an Excel spreadsheet. By integrating speech recognition technology, I created a hands-free solution for efficiently extracting data, enhancing productivity and user experience."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FprojectSix.jpg?alt=media&token=daeb5b6d-1381-4268-9297-4843c8232197"
          gitlink="https://github.com/Mohan1101/Speechrecognition"
        />
      </div>
    </section>
  );
}

export default Projects