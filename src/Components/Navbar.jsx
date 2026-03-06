import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { assets } from '../assets/assets';
import '../Responsive.css';
import './Main.css';

const NAV_HIDE_DELTA = 8;
const FIXED_SCROLL_THRESHOLD = 120;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset || 0;
      const isDesktop = window.innerWidth > 768;

      setIsNavbarFixed(isDesktop && scrollTop > FIXED_SCROLL_THRESHOLD);

      if (!isDesktop) {
        setIsNavbarVisible(true);
        lastScrollYRef.current = scrollTop;
        return;
      }

      const delta = scrollTop - lastScrollYRef.current;

      if (scrollTop < FIXED_SCROLL_THRESHOLD) {
        setIsNavbarVisible(true);
      } else if (delta > NAV_HIDE_DELTA) {
        setIsNavbarVisible(false);
      } else if (delta < -NAV_HIDE_DELTA) {
        setIsNavbarVisible(true);
      }

      lastScrollYRef.current = scrollTop;
    };

    const onUserActivity = () => {
      if (window.innerWidth > 768) {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onUserActivity);
    window.addEventListener('keydown', onUserActivity);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onUserActivity);
      window.removeEventListener('keydown', onUserActivity);
    };
  }, []);

  return (
    <div>
      <nav className={`bg-white w-full z-20 top-0 start-0 ${isNavbarFixed ? 'fixed-navbar' : ''} ${isNavbarVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className='max-w-screen-2xl flex items-center justify-between mx-auto p-4' id='Navbar_main'>
          <a href='https://sahelzaffar-portfolio.netlify.app/' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img src={assets.Full_logo_yellow} className='w-2/5 transition-transform duration-300 hover:scale-125' id='nav_logo' alt='Logo' />
          </a>

          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <Link to='contact_main' spy smooth duration={500}>
              <button className='relative border-2 hover:border-[#f8d08d] duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-44 rounded-md bg-[#f8d08d] p-2 flex justify-center items-center font-bold font-poppins text-[20px]' id='nav_btn'>
                <div className='absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#f8c66e] delay-150 group-hover:delay-75'></div>
                <div className='absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#f8d08d] delay-150 group-hover:delay-100'></div>
                <div className='absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#f8c66e] delay-150 group-hover:delay-150'></div>
                <div className='absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#f8d08d] delay-150 group-hover:delay-200'></div>
                <div className='absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#f8c66e] delay-150 group-hover:delay-300'></div>
                <p className='z-10 font-poppins text-gray-100' id='nav_btn_text'>Get Started</p>
              </button>
            </Link>

            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              aria-controls='navbar-sticky'
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
              </svg>
            </button>
          </div>

          <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id='navbar-sticky'>
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
              <li><Link to='hero_div' spy smooth duration={500} className='block py-2 px-3 text-black hover:text-[#f8d08d] rounded md:bg-transparent md:p-0 font-poppins font-semibold cursor-pointer' activeClass='text-[#f8d08d]'>Home</Link></li>
              <li><Link to='about_main' spy smooth duration={500} className='block py-2 px-3 text-black hover:text-[#f8d08d] rounded md:bg-transparent md:p-0 font-poppins font-semibold cursor-pointer' activeClass='text-[#f8d08d]'>About</Link></li>
              <li><Link to='skill_main' spy smooth duration={500} className='block py-2 px-3 text-black hover:text-[#f8d08d] rounded md:bg-transparent md:p-0 font-poppins font-semibold cursor-pointer' activeClass='text-[#f8d08d]'>Skills</Link></li>
              <li><Link to='education_main' spy smooth duration={500} className='block py-2 px-3 text-black hover:text-[#f8d08d] rounded md:bg-transparent md:p-0 font-poppins font-semibold cursor-pointer' activeClass='text-[#f8d08d]'>Education</Link></li>
              <li><Link to='project_main' spy smooth duration={500} className='block py-2 px-3 text-black hover:text-[#f8d08d] rounded md:bg-transparent md:p-0 font-poppins font-semibold cursor-pointer' activeClass='text-[#f8d08d]'>Projects</Link></li>
              <li><Link to='contact_main' spy smooth duration={500} className='block py-2 px-3 text-black hover:text-[#f8d08d] rounded md:bg-transparent md:p-0 font-poppins font-semibold cursor-pointer' activeClass='text-[#f8d08d]'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
