import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { assets } from '../assets/assets';
import useGsapSection from '../hooks/useGsapSection';
import { runParallax } from '../lib/animations';
import './Main.css';
import '../Responsive.css';

const PHRASES = ['Innovating.', 'Creating.', 'Transforming.'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const sectionRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const socialRailRef = useRef(null);

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let loopTimeout;

    const typeWriter = () => {
      const currentPhrase = PHRASES[phraseIndex];
      const textLength = currentText.length;

      if (isDeleting) {
        currentText = currentPhrase.substring(0, textLength - 1);
      } else {
        currentText = currentPhrase.substring(0, textLength + 1);
      }

      setDisplayText(currentText);

      let typingSpeed = 200;
      if (isDeleting) {
        typingSpeed /= 200;
      }

      if (!isDeleting && currentText === currentPhrase) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setPhraseIndex((prevIndex) => (prevIndex + 1) % PHRASES.length);
        typingSpeed = 500;
      }

      loopTimeout = setTimeout(typeWriter, typingSpeed);
    };

    typeWriter();

    return () => {
      clearTimeout(loopTimeout);
    };
  }, [phraseIndex]);

  const setupAnimations = useCallback(({ gsap, reducedMotion }) => {
    const sequenceTargets = [
      titleLine1Ref.current,
      titleLine2Ref.current,
      subtitleRef.current,
      ctaRef.current,
      imageRef.current,
      socialRailRef.current,
    ].filter(Boolean);

    if (reducedMotion) {
      gsap.set(sequenceTargets, { autoAlpha: 1, clearProps: 'all' });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from(titleLine1Ref.current, { autoAlpha: 0, y: 30, duration: 0.6 })
      .from(titleLine2Ref.current, { autoAlpha: 0, y: 28, duration: 0.6 }, '-=0.35')
      .from(subtitleRef.current, { autoAlpha: 0, y: 24, duration: 0.55 }, '-=0.35')
      .from(ctaRef.current, { autoAlpha: 0, y: 18, duration: 0.55 }, '-=0.25')
      .from(imageRef.current, { autoAlpha: 0, scale: 0.97, duration: 0.75 }, '-=0.4')
      .from(socialRailRef.current, { autoAlpha: 0, x: 16, duration: 0.55 }, '-=0.3');

    runParallax({
      trigger: sectionRef.current,
      target: imageRef.current,
      yRange: 36,
      reducedMotion,
    });
  }, []);

  useGsapSection(sectionRef, setupAnimations);

  return (
    <div ref={sectionRef} className='h-auto bg-white' id='hero_div'>
      <div className='flex flex-row justify-center items-center' id='hero_container'>
        <div className='w-1/2'>
          <div className='flex flex-col pl-20 items-start mx-auto justify-center pt-20' id='hero_text_div'>
            <h1 ref={titleLine1Ref} className='text-[50px] ml- text-black font-outfit font-extrabold tracking-wide leading-[1]' id='hero_text1'>
              <span className='text-[#f8d08d]'>I&apos;M</span> Sahel Zaffar
            </h1>
            <div className='w-1/12 bg-black h-[4px] mt-1 -mb-1 rounded-lg'></div>
            <h1 ref={titleLine2Ref} className='text-[50px] text-black font-outfit font-extrabold whitespace-nowrap' id='hero_text2'>
              Full Stack <span className='text-[#f8d08d]'>Developer</span>
            </h1>

            <h1 ref={subtitleRef} className='text-black'>
              <span className='typewrite' data-period='2000' data-type={JSON.stringify(PHRASES)}>
                <span className='wrap font-poppins text-[22px] font-normal leading-[1]' id='hero_text3'>
                  Passionate about <span className='bg-black text-[#f8d08d] px-2 py-1 font-medium text-[30px]'>{displayText}</span>
                </span>
              </span>
            </h1>
            <div ref={ctaRef} className='pt-14'>
              <Link to='contact_main' spy smooth duration={500}>
                <button className='animated-button'>
                  <svg viewBox='0 0 24 24' className='arr-2' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'></path>
                  </svg>
                  <span className='text font-poppins'>Let&apos;s Build Together</span>
                  <span className='circle'></span>
                  <svg viewBox='0 0 24 24' className='arr-1' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-1/2 relative'>
          <img ref={imageRef} src={assets.sahelhero2} className='relative w-5/6' id='hero_image' alt='Sahel hero portrait' />
          <div className='absolute right-0 bottom-12 flex-col flex items-end' id='hero_icon_div'>
            <div ref={socialRailRef} className='flex flex-col items-center mr-12 space-y-4' id='hero_icon_container'>
              <div className='h-20 w-[4px] rounded-lg bg-[#f8d08d]' id='icon_line_seprator'></div>
              <a href='#' className='text-[#0d0d0d] text-3xl' id='hero_social_icon' aria-label='LinkedIn'>
                <FaLinkedin />
              </a>
              <a href='#' className='text-[#0d0d0d] text-3xl' id='hero_social_icon' aria-label='GitHub'>
                <FaGithub />
              </a>
              <a href='#' className='text-[#0d0d0d] text-3xl' id='hero_social_icon' aria-label='Twitter'>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
