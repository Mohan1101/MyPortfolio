import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from '../projects/ProjectsCard';

const Achievement = () => {
  return (
    <section
      id="projects"
      className="py-6 lgl:w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="lgl:flex justify-center items-center text-center">
        <Title
          title=""
          des="Extracurriculars"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="Intern at Defence Research and Development Organisation (DRDO)"
          des="During my transformative DRDO DGRE internship, I collaborated with Sh. Vivek Saxena, leveraging QGIS, ArcGIS, and Cesium. I built a high-accuracy landslide prediction model using artificial neural networks. Grateful for the mentorship, this experience significantly enhanced my data science skills. I am ready to apply these insights in future endeavors."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FInternship-DRDO.jpg?alt=media&token=6b73a2aa-8e7a-47d4-81fe-2d8555afba27"
          gitlink= "https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FInternship-DRDO.jpg?alt=media&token=6b73a2aa-8e7a-47d4-81fe-2d8555afba27"
        />
        <ProjectsCard
          title="intel unnati" 
          des=" Received specialized training from Intel in machine learning, delving into key concepts. Collaborated with a team of three to develop a high-accuracy fake news detection model using Random Forest and Gradient Boosting techniques, achieving a 97% accuracy rate. Recognized with a certificate for successful completion of the program."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FINTEL%20UNNATI_page-0001.jpg?alt=media&token=7ecac6e0-3e17-4189-92ab-dd17a05434d0"
          gitlink="https://github.com/Mohan1101/DisneyHotstarClone/tree/master"
        />
        <ProjectsCard
          title="AFS Intercultural Programs"
          des="Selected among 2000 applicants in India, I excelled in the AFS intercultural exchange program, experiencing a transformative year in the US. Dedicated studies led to enriched knowledge and advanced tech skills, shaping my journey and personal growth."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FAFS%20COMPLETION%20CERTIFICATE.jpg?alt=media&token=7d08e8b9-1431-4fd4-9381-ba9b5f83329a"
          gitlink= "https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FAFS%20COMPLETION%20CERTIFICATE.jpg?alt=media&token=7d08e8b9-1431-4fd4-9381-ba9b5f83329a"
        />
        <ProjectsCard
          title="Community Service"
          des="
          Dedicated 100+ hours to impactful US volunteering, spanning Halloween Pumpkin Show, concert backend support, farmers market aid, beach clean-up, and road-clearing. Gained valuable insights into volunteerism while actively enriching diverse community events."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FAFS%20VOLUNTEER%20CERTIFICATE.jpg?alt=media&token=52962664-276e-4ccb-9703-dd2f01143a78"
          gitlink="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2Fcertificates%2FAFS%20VOLUNTEER%20CERTIFICATE.jpg?alt=media&token=52962664-276e-4ccb-9703-dd2f01143a78"

        />
        <ProjectsCard
          title="handball"
          des="Experienced district-level handball player with over 7 years of dedicated play. Consistently recognized for exceptional shooting abilities, earning multiple trophies. Thrived in intense zonal matches, showcasing physical prowess and unwavering focus. A testament to the blend of skill, dedication, and concentration that defines handball's dynamic challenge."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FHandball.jpg?alt=media&token=7fc3acc5-af01-4bf5-b07a-fe8d16fbd4fa"
          gitlink="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FHandball.jpg?alt=media&token=7fc3acc5-af01-4bf5-b07a-fe8d16fbd4fa"

        />
        <ProjectsCard
          title="Student council"
          des="
          Served two terms in the student council, ascending to the role of School Pupil Leader. Nurtured leadership skills, adept at team collaboration and management. Embraced challenges, honed discipline, and practiced effective leadership. A journey that embodies the art of leadership, fostering teamwork, and personal growth."
          src="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FStudent%20council.jpg?alt=media&token=669f4a84-d9de-446a-90d7-0a031ebf5e8a"
          gitlink="https://firebasestorage.googleapis.com/v0/b/my-profolio-4161.appspot.com/o/images%2FStudent%20council.jpg?alt=media&token=669f4a84-d9de-446a-90d7-0a031ebf5e8a"
        />
      </div>
    </section>
  );
}

export default Achievement;