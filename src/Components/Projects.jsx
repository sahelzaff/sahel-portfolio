import React from 'react';
import { assets } from '../assets/assets';
import '../Responsive.css'

const Projects = () => {
    return (
        <div className='h-auto py-24' id='project_main'>
            <div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#0d0d0d] font-outfit text-[45px] font-bold leading-[1]' id='project_heading'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">My <span className='text-[#f8d08d]'>Projects</span></h1>
                    <div className='w-1/12 bg-[#f8d08d] h-[4px] mx-auto rounded-lg mt-1 '  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
                </div>
            </div>
            <div className='grid grid-cols-3' id='project_grid'>
                <div className='py-20 px-40 cursor-text' id='project_cards'  data-aos='fade-in' data-aos-duration="1000" data-aos-once="true">
                    <div
                        class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-[#f8d08d] hover:-translate-y-2 hover:shadow-2xl shadow-yellow-800"
                    >
                        <div
                            class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-white "
                            alt="image here"
                        ><img src={assets.voxa} className='w-full h-28 py-6  px-3 rounded-lg' alt="" /></div>

                        <div class="">
                            <h2 class="text-[25px] font-bold mb-2 text-black font-outfit">Voxa</h2>
                            <p class="text-gray-800 text-[15px] font-medium line-clamp-3 font-poppins">
                                A text generative AI powered by Gemini API, creating coherent and contextually relevant text based on user prompts with advanced natural language processing capabilities.
                            </p>
                        </div>
                        <button
                            class="hover:bg-amber-300 bg-[#f8c66e] text-black font-poppins font-medium mt-6 rounded p-2 px-6"
                        >
                            Explore
                        </button>
                    </div>
                </div>
                <div className='py-20 px-40 cursor-text' id='project_cards'  data-aos='fade-in' data-aos-duration="1000" data-aos-once="true">
                    <div
                        class="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-[#f8d08d] hover:-translate-y-2 hover:shadow-2xl shadow-yellow-800"
                    >
                        <div
                            class="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-white "
                            alt="image here"
                        ><img src={assets.logoBlackRed} className='w-full h-28 py-10  px-3 rounded-lg' alt="" /></div>

                        <div class="">
                            <h2 class="text-[25px] font-bold mb-2 text-black font-outfit">Love Home Conveyancing</h2>
                            <p class="text-gray-800 text-[15px] font-medium line-clamp-3 font-poppins">
                                I developed Love Home Conveyancing, a bespoke Australian property conveyancing website that simplifies and secures property transactions. It offers intuitive features designed to optimize the conveyancing process, ensuring a smooth experience for buyers and sellers alike.
                            </p>
                        </div>
                        <button
                            class="hover:bg-amber-300 bg-[#f8c66e] text-black font-poppins font-medium mt-6 rounded p-2 px-6"
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
