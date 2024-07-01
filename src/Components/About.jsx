import React from 'react';
import { assets } from '../assets/assets';
import '../Responsive.css';

const About = () => {
  const handleDownloadResume = () => {
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = assets.Sahel_Latest_Resume; // Make sure this is the correct path to your resume file
      link.download = 'Sahel Latest Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  return (
    <div className='bg-white pt-20' id='about_main'>
      <div className='flex flex-row justify-center items-center' id='about_container'>
        <div className='w-1/2 flex flex-col'>
          <img src={assets.sahelabout} id='about_img' alt=""  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"/>
        </div>
        <div className='w-1/2 flex flex-col' id='about_para_div'>
          <h1 className='text-black font-outfit text-[45px] font-bold leading-[1]' id='about_heading' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
            About <span className='text-[#f8d08d]'>Me</span>
          </h1>
          <div className='w-1/12 bg-[#f8d08d] h-[4px] mt-1 -mb-1 rounded-lg' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
          <p className='text-black text-[16px] font-poppins font-medium leading-[25px] pr-20 mt-4' id='about_para' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
            I am a dedicated Full Stack Web Developer passionate about designing and building compelling websites and web applications. With a solid foundation from my Bachelor's degree in Information Technology from Amity University in Mumbai, I bring expertise in creating responsive, user-friendly interfaces and robust backend solutions. Currently freelancing, I am eager to transition into a full-time role where I can contribute my skills and creativity to impactful projects.
          </p>
          <p className='text-black text-[16px] font-poppins font-medium leading-[25px] pr-20 mt-4' id='about_para' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
            I combine technical proficiency with a keen eye for design, ensuring every project I undertake meets high standards of functionality and aesthetics. If you're looking for a developer who can deliver seamless digital experiences, let's connect.
          </p>
          <div className='pt-6'>
            <div className="container" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
              <label className="label" onClick={handleDownloadResume}>
                <input className="input" type="checkbox" />
                <span className="circle">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="icon">
                    <path
                      d="M12 19V5m0 14-4-4m4 4 4-4"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      stroke="currentColor"
                    ></path>
                  </svg>
                  <div className="square"></div>
                </span>
                <p className="title">My Resume</p>
                <p className="title">Thank You</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
