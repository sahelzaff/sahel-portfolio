import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Main.css'
import '../Responsive.css'

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const phrases = ["Innovating.", "Creating.", "Transforming."];
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        let currentText = '';
        let isDeleting = false;
        let loopTimeout;

        const typeWriter = () => {
            const currentPhrase = phrases[phraseIndex];
            const textLength = currentText.length;

            if (isDeleting) {
                currentText = currentPhrase.substring(0, textLength - 1);
            } else {
                currentText = currentPhrase.substring(0, textLength + 1);
            }

            setDisplayText(currentText);

            let typingSpeed = 200; // Adjust typing speed (milliseconds)
            if (isDeleting) {
                typingSpeed /= 200; // Faster delete speed
            }

            if (!isDeleting && currentText === currentPhrase) {
                typingSpeed = 2000; // Pause at end of typing
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                typingSpeed = 500; // Pause before typing next phrase
            }

            loopTimeout = setTimeout(typeWriter, typingSpeed);
        };

        // Start typing on component mount
        typeWriter();

        return () => {
            clearTimeout(loopTimeout); // Clean up on unmount
        };
    }, [phraseIndex]); // Re-run effect when phraseIndex changes

    return (
        <div className='h-auto bg-white ' id='hero_div' >
            <div className='flex flex-row justify-center items-center' id='hero_container'>
                <div className='w-1/2'>
                    <div className='flex flex-col pl-20 items-start mx-auto justify-center pt-20' id='hero_text_div'>

                        <h1 className='text-[50px] ml-  text-black font-outfit font-extrabold tracking-wide leading-[1]' id='hero_text1' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"><span className='text-[#f8d08d] ' >I'M</span> Sahel Zaffar</h1>
                        <div className='w-1/12 bg-black h-[4px] mt-1 -mb-1 rounded-lg'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
                        <h1 className='text-[50px]  text-black font-outfit font-extrabold whitespace-nowrap ' id='hero_text2' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" >Full Stack <span className='text-[#f8d08d]'>Developer</span></h1>


                        <h1 className='text-black' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true" >
                            <a href="" className="typewrite" data-period="2000" data-type={JSON.stringify(phrases)}>
                                <span className="wrap font-poppins text-[22px] font-normal leading-[1] " id='hero_text3'>Passionate about <span className='bg-black text-[#f8d08d] px-2 py-1 font-medium text-[30px]'>{displayText}</span> </span>
                                {/* Ensure the cursor is styled properly */}
                                {/* <span className="cursor -ml-1" style={{ color: '#000' }}>|</span> */}
                            </a>
                        </h1>
                        <div className='pt-14'>
                            <Link
                                to="contact_main"
                                spy={true}
                                smooth={true}
                                duration={500}>
                                <button class="animated-button">
                                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                    <span class="text font-poppins ">Let's Build Together</span>
                                    <span class="circle"></span>
                                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='w-1/2 relative'>
                    <img src={assets.sahelhero2} className='relative w-5/6' id='hero_image' alt=""  />
                    <div className='absolute right-0 bottom-12 flex-col flex items-end' id='hero_icon_div'>
                        <div className='flex flex-col items-center mr-12 space-y-4' id='hero_icon_container'>
                            <div className='h-20 w-[4px] rounded-lg bg-[#f8d08d]' id='icon_line_seprator'></div>
                            <a href="#" className="text-[#0d0d0d] hover:text-[#f] text-3xl" id='hero_social_icon'>
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-[#0d0d0d] hover:text-[#f] text-3xl" id='hero_social_icon'>
                                <FaGithub />
                            </a>
                            <a href="#" className="text-[#0d0d0d] hover:text-[#f] text-3xl" id='hero_social_icon'>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
