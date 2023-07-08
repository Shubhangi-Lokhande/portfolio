import React from 'react';
import heroImage from '../assets/heroImage.png';
import {RiArrowRightDoubleFill} from "react-icons/ri";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-400'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
            <div className='flex flex-col justify-center mb-10 px-10'>
                <h2 className='text-2xl sm:text-5xl font-semibold text-white'>I'm a Front End Developer</h2>
                <p className='text-white max-w-md py-7'>
                    <p className='font-Courgette text-2xl pb-2'>I bring ideas to life with code!</p>
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group flex items-center text-white w-fit px-6 py-3 sm:py-1 rounded-md bg-gradient-to-r
                     from-cyan-500 via-blue-400 to-blue-500 cursor-pointer font-semibold'>
                        Portfolio <span className='group-hover:rotate-90 duration-300'><RiArrowRightDoubleFill size={25} className='m-2'/></span>
                    </Link>
                </div>
            </div>
            <div className='pb-2'>     
             <img src={heroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>{/**/}
            </div>
        </div>
    </div>
  )
}

export default Home;

       