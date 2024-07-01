import React, { useState } from 'react';
import { assets } from '../assets/assets';
import '../Responsive.css'

const Skills = () => {
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <div className='bg-white py-14 h-auto' id='skill_main'>
            <div className='flex flex-col items-center justify-center gap-10'>
                <div className='flex flex-col items-start'>
                    <h1 className='text-black font-outfit font-bold text-[45px] leading-[1]' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">My <span className='text-[#f8d08d]'>Skills</span></h1>
                    <div className='w-9/12 bg-[#f8d08d] h-[4px] mx-auto rounded-lg mt-1' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
                </div>

                <div id='skills_grid' className={`grid grid-cols-3 gap-24 ${showAll ? 'show-all' : 'hide-partial'}`}>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.react} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>React Js</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.next} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>Node Js</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Intermediate</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.js} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>JavaScript</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.node} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>Node Js</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.linux} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>Ubuntu</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Intermediate</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.aws} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>AWS</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Intermediate</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.git} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>Git Source Control</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.tailwind} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>Tailwind</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
                        </div>
                    </div>
                    <div className="card cursor-pointer shadow-lg" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                        <div className="image"><img src={assets.wordpress} alt="" /></div>
                        <div className="card-info">
                            <span className='font-outfit'>WordPress</span>
                            <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden flex flex-col items-center">
                    {!showAll ? (
                        <button 
                            className="bg-[#f8d08d] text-white font-poppins py-2 px-4 rounded-md"
                            onClick={handleShowMore}
                        >
                            Show More
                        </button>
                    ) : (
                        <button 
                            className="bg-[#f8d08d] text-white font-poppins py-2 px-4 rounded-md"
                            onClick={handleShowLess}
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Skills;
