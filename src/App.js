import React from "react";
import { Link, Route, Routes} from 'react-router-dom';
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import ResponseDisplay from './components/responses/Response.js'


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />

      <div className="max-w-screen-xl mx-auto overflow-x-hidden">
      <Link to="/responses"></Link>


        <Routes>
          <Route path="/responses" element={<ResponseDisplay />} />
          
        </Routes>


        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <FooterBottom />

      </div>
    </div>
  );
}

export default App;




