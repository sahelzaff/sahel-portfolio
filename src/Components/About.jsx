import { useCallback, useRef } from 'react';
import { assets } from '../assets/assets';
import useGsapSection from '../hooks/useGsapSection';
import { runSectionReveal, runStaggerReveal } from '../lib/animations';
import '../Responsive.css';

const About = () => {
  const sectionRef = useRef(null);
  const imageColRef = useRef(null);
  const textColRef = useRef(null);
  const headingRef = useRef(null);
  const copyRef = useRef(null);
  const resumeRef = useRef(null);

  const handleDownloadResume = () => {
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = assets.Sahel_Latest_Resume;
      link.download = 'Sahel Latest Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  const setupAnimations = useCallback(({ reducedMotion }) => {
    runSectionReveal({
      trigger: sectionRef.current,
      targets: imageColRef.current,
      options: { x: -24, y: 0, duration: 0.7 },
      reducedMotion,
    });

    runSectionReveal({
      trigger: sectionRef.current,
      targets: textColRef.current,
      options: { x: 24, y: 0, duration: 0.7 },
      reducedMotion,
    });

    runStaggerReveal({
      trigger: sectionRef.current,
      targets: [headingRef.current, ...copyRef.current.querySelectorAll('p'), resumeRef.current],
      options: { y: 18, stagger: 0.1, duration: 0.6 },
      reducedMotion,
    });
  }, []);

  useGsapSection(sectionRef, setupAnimations);

  return (
    <div ref={sectionRef} className='bg-white pt-20' id='about_main'>
      <div className='flex flex-row justify-center items-center' id='about_container'>
        <div ref={imageColRef} className='w-1/2 flex flex-col'>
          <img src={assets.sahelabout} id='about_img' alt='About Sahel' />
        </div>
        <div ref={textColRef} className='w-1/2 flex flex-col' id='about_para_div'>
          <h1 ref={headingRef} className='text-black font-outfit text-[45px] font-bold leading-[1]' id='about_heading'>
            About <span className='text-[#f8d08d]'>Me</span>
          </h1>
          <div className='w-1/12 bg-[#f8d08d] h-[4px] mt-1 -mb-1 rounded-lg'></div>

          <div ref={copyRef}>
            <p className='text-black text-[16px] font-poppins font-medium leading-[25px] pr-20 mt-4' id='about_para'>
              I am a dedicated Systems & Desktop Support Engineer passionate about designing, maintaining, and optimizing reliable IT infrastructure. With a solid foundation from my Bachelor&apos;s degree in Information Technology from Amity University in Mumbai, I bring expertise in system administration, hardware troubleshooting, desktop engineering, and end-user IT support across Windows and Linux environments.
            </p>
            <p className='text-black text-[16px] font-poppins font-medium leading-[25px] pr-20 mt-4' id='about_para'>
              I combine technical proficiency with a problem-solving mindset, ensuring every system I manage runs at peak performance with minimal downtime. Currently freelancing, I am eager to transition into a full-time role where I can contribute my skills in IT support, network management, and desktop engineering to a forward-thinking organization. If you&apos;re looking for an engineer who keeps your infrastructure running seamlessly, let&apos;s connect.
            </p>
          </div>

          <div ref={resumeRef} className='pt-6'>
            <div className='container'>
              <label className='label' onClick={handleDownloadResume}>
                <input className='input' type='checkbox' />
                <span className='circle'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' className='icon'>
                    <path d='M12 19V5m0 14-4-4m4 4 4-4' strokeWidth='1.5' strokeLinejoin='round' strokeLinecap='round' stroke='currentColor'></path>
                  </svg>
                  <div className='square'></div>
                </span>
                <p className='title'>My Resume</p>
                <p className='title'>Thank You</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
