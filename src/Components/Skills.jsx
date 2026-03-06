import { useCallback, useRef, useState } from 'react';
import { assets } from '../assets/assets';
import useGsapSection from '../hooks/useGsapSection';
import { runStaggerReveal } from '../lib/animations';
import '../Responsive.css';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const separatorRef = useRef(null);
  const gridRef = useRef(null);

  const setupAnimations = useCallback(({ reducedMotion }) => {
    runStaggerReveal({
      trigger: sectionRef.current,
      targets: [headingRef.current, separatorRef.current],
      options: { y: 20, stagger: 0.1, duration: 0.6 },
      reducedMotion,
    });

    runStaggerReveal({
      trigger: sectionRef.current,
      targets: gridRef.current?.querySelectorAll('.skill-card'),
      options: { y: 24, stagger: 0.1, duration: 0.65 },
      reducedMotion,
    });
  }, []);

  useGsapSection(sectionRef, setupAnimations, [showAll]);

  return (
    <div ref={sectionRef} className='bg-white py-14 h-auto' id='skill_main'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div className='flex flex-col items-start'>
          <h1 ref={headingRef} className='text-black font-outfit font-bold text-[45px] leading-[1]'>
            My <span className='text-[#f8d08d]'>Skills</span>
          </h1>
          <div ref={separatorRef} className='w-9/12 bg-[#f8d08d] h-[4px] mx-auto rounded-lg mt-1'></div>
        </div>

        <div ref={gridRef} id='skills_grid' className={`grid grid-cols-3 gap-24 ${showAll ? 'show-all' : 'hide-partial'}`}>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.react} alt='React' /></div>
            <div className='card-info'>
              <span className='font-outfit'>React Js</span>
              <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.next} alt='Next.js' /></div>
            <div className='card-info'>
              <span className='font-outfit'>Node Js</span>
              <p className='font-poppins text-[14px]'>Proficiency : Intermediate</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.js} alt='JavaScript' /></div>
            <div className='card-info'>
              <span className='font-outfit'>JavaScript</span>
              <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.node} alt='Node.js' /></div>
            <div className='card-info'>
              <span className='font-outfit'>Node Js</span>
              <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.linux} alt='Linux' /></div>
            <div className='card-info'>
              <span className='font-outfit'>Ubuntu</span>
              <p className='font-poppins text-[14px]'>Proficiency : Intermediate</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.aws} alt='AWS' /></div>
            <div className='card-info'>
              <span className='font-outfit'>AWS</span>
              <p className='font-poppins text-[14px]'>Proficiency : Intermediate</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.git} alt='Git' /></div>
            <div className='card-info'>
              <span className='font-outfit'>Git Source Control</span>
              <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.tailwind} alt='Tailwind CSS' /></div>
            <div className='card-info'>
              <span className='font-outfit'>Tailwind</span>
              <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
            </div>
          </div>
          <div className='skill-card card cursor-pointer shadow-lg'>
            <div className='image'><img src={assets.wordpress} alt='WordPress' /></div>
            <div className='card-info'>
              <span className='font-outfit'>WordPress</span>
              <p className='font-poppins text-[14px]'>Proficiency : Professional</p>
            </div>
          </div>
        </div>

        <div className='sm:hidden flex flex-col items-center'>
          {!showAll ? (
            <button className='bg-[#f8d08d] text-white font-poppins py-2 px-4 rounded-md' onClick={() => setShowAll(true)}>
              Show More
            </button>
          ) : (
            <button className='bg-[#f8d08d] text-white font-poppins py-2 px-4 rounded-md' onClick={() => setShowAll(false)}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
