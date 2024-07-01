import React from 'react';
import { assets } from '../assets/assets';

const Education = () => {
    return (
        <div className='h-auto w-full bg-[#efefef] py-20' id='education_main'>
            <h1 className='text-black font-outfit font-bold text-[45px] text-center leading-[1]' id='education_heading' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                My <span className='text-[#f8d08d]' id='education_heading'>Education</span>
            </h1>
            {/* Separator line */}
            <div className='w-1/12 bg-[#f8d08d] h-[4px] mx-auto rounded-lg mt-1' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
            <div id='education_main2'>
            <div className="flex flex-row items-start justify-start max-w-screen-2xl mt-20  bg-[#efefef]" >
                {/* Left side */}
                <div className='flex flex-col items-start ' data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <h2 className="text-[25px] font-outfit font-bold text-[#0d0d0d]" id='left_heading'>Under Graduation</h2>
                    <p className="text-[25px] font-outfit font-bold text-[#0d0d0d]" id='left_heading'>2021-2024</p>
                </div>
                {/* Middle timeline */}
                <div className="relative ml-20 mt-6 flex-shrink-0" id='middle_main1' data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <div className="relative h-14 w-14 rounded-full bg-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " id='middle_div1'>
                        <img src={assets.education} className='w-28 ml-[1px]' alt="Education Pin" />
                    </div>
                    <div className="relative h-[70vh] w-[3px] -top-10 bg-[#f8d08d] left-1/2" id='middle_line1'></div>
                </div>
                {/* Right side */}
                <div className="ml-20 flex-1" id='right_full' data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <div className="" id='right_div'>
                        <h3 className="font-bold text-[25px] text-[#0d0d0d] font-outfit" id='right_heading'>Amity University Mumbai</h3>
                        <h3 className="font-bold text-[20px] text-[#0d0d0d] font-outfit mb-2" id='right_subheading'>Bachelor Of Science Information Technology</h3>
                        <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4" id='education_para'>I pursued a Bachelor of Science in Information Technology (BSc IT) at Amity University, a comprehensive 3-year undergraduate program. Throughout my studies, I delved deep into programming languages and frameworks, gaining valuable insights and practical experience.</p>
                        <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4" id='education_para'>My coursework not only equipped me with foundational knowledge but also sparked a passion for web development. This led me to explore technologies like React, MongoDB, and Node.js, aiming to master the skills necessary for full-stack development.</p>
                        <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4" id='education_para'>I actively applied my learning through various projects, solidifying my understanding and honing my abilities in creating dynamic and innovative web solutions.</p>
                    </div>
                </div>
            </div>




            <div className="flex flex-row items-start justify-start max-w-screen-2xl -mt-10  bg-[#efefef]">
                {/* Left side */}
                <div className='flex flex-col items-start '  data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <h2 className="text-[25px] font-outfit font-bold text-[#0d0d0d]" id='left_heading'>Senior Secondary </h2>
                    <p className="text-[25px] font-outfit font-bold text-[#0d0d0d]" id='left_heading'>2019-2021</p>
                </div>
                {/* Middle timeline */}
                <div className="relative ml-[5.5rem] mt-6 flex-shrink-0" id='middle_main2'  data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <div className="relative h-14 w-14 rounded-full bg-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " id='middle_div2'>
                        <img src={assets.education} className='w-28 ml-[1px]' alt="Education Pin" />
                    </div>
                    <div className="relative h-[60vh] w-[3px] -top-10 bg-[#f8d08d] left-1/2" id='middle_line2'></div>
                </div>
                {/* Right side */}
                <div className="ml-20 flex-1" id='right_full'  data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <div className="">
                        <h3 className="font-bold text-[25px] text-[#0d0d0d] font-outfit" id='right_heading'>ST Wilfred School</h3>
                        <h3 className="font-bold text-[20px] text-[#0d0d0d] font-outfit mb-2" id='right_subheading'>XII <sup>th</sup> Grade </h3>
                        <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4" id='education_para'>I completed my senior secondary education at St. Wilfred School, achieving 68% in the CBSE Board exams for 12th grade. This accomplishment marked a significant milestone in my academic journey, reflecting my dedication and commitment to my studies.</p>
                        <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4" id='education_para'>During my time at St. Wilfred School, I actively participated in various extracurricular activities, which helped me develop essential soft skills such as teamwork, leadership, and time management. These experiences were instrumental in shaping my holistic development, preparing me to handle the demands of higher education and future professional endeavors.</p>
                        {/* <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4">I actively applied my learning through various projects, solidifying my understanding and honing my abilities in creating dynamic and innovative web solutions.</p> */}
                    </div>
                </div>
            </div>


            <div className="flex flex-row items-start justify-start max-w-screen-2xl -mt-10  bg-[#efefef]">
                {/* Left side */}
                <div className='flex flex-col items-start '  data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <h2 className="text-[25px] font-outfit font-bold text-[#0d0d0d]" id='left_heading'>Secondary</h2>
                    <p className="text-[25px] font-outfit font-bold text-[#0d0d0d]" id='left_heading' >2019-2021</p>
                </div>
                

                {/* Middle timeline */}
                <div className="relative ml-[10.5rem] mt-6 flex-shrink-0" id='middle_main3'  data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <div className="relative h-14 w-14 rounded-full bg-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 " id='middle_div3'>
                        <img src={assets.education} className='w-28 ml-[1px]' alt="Education Pin" />
                    </div>
                    <div className="relative h-[60vh] w-[3px] -top-10 bg-[#f8d08d] left-1/2" id='middle_line3'></div>
                    <div className="relative h-7 w-7 ml-[1px] -mt-10 rounded-full bg-[#f8d08d] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
                        {/* <img src={assets.education} className='w-28 ml-[1px]' alt="Education Pin" /> */}
                    </div>
                </div>
                {/* Right side */}
                <div className="ml-20 flex-1" id='right_full'  data-aos='fade-right' data-aos-duration="1000" data-aos-once="true">
                    <div className="">
                        <h3 className="font-bold text-[25px] text-[#0d0d0d] font-outfit" id='right_heading'>Dav Public School</h3>
                        <h3 className="font-bold text-[20px] text-[#0d0d0d] font-outfit mb-2" id='right_subheading'>X <sup>th</sup> Grade </h3>
                        <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4" id='education_para'>I completed my education at Dav Public School, starting from nursery through to my senior secondary education. In the CBSE Board exams for 10th grade, I achieved 76%, marking a significant achievement in my academic journey. Throughout my time at Dav Public School, I was actively involved in various extracurricular activities, which played a crucial role in developing essential soft skills such as teamwork, leadership, and time management.</p>
                        <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4" id='education_para'>These experiences at Dav Public School not only contributed to my academic success but also prepared me comprehensively for higher education and future professional endeavors.</p>
                        {/* <p className="text-gray-600 font-poppins font-medium text-[14px] mb-4">I actively applied my learning through various projects, solidifying my understanding and honing my abilities in creating dynamic and innovative web solutions.</p> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Education;
