import React from 'react';
import heroImage from '../assets/heroImage.png';
import {RiArrowRightDoubleFill} from "react-icons/ri";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-400'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
            <div className='flex flex-col justify-center mb-10 px-10'>
           
                 <h2 className='text-3xl sm:text-2xl font-semibold text-white w-80'>I'M a Front-End Developer<br/>with a Salesforce Admin certification, exploring opportunities in both fields.</h2>
                 <p className='font-Courgette sm:text-2xl lg:text-sm text-white w-80 mt-6'>
                    Passionate about building beautiful, user-friendly web applications and diving into the world of Salesforce administration.
                </p>
               
                <div>
                    <Link to="portfolio" smooth duration={500} className='group flex items-center text-white w-fit px-6 mt-10 py-4 sm:py-1 rounded-md bg-gradient-to-r
                     from-cyan-500 via-blue-400 to-blue-500 cursor-pointer font-semibold'>
                        Portfolio <span className='group-hover:rotate-90 duration-300'><RiArrowRightDoubleFill size={25} className='m-2'/></span>
                    </Link>
                </div>
            </div>
            <div className='pb-4 mt-8'>     
             <img src={heroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>{/**/}
            </div>
        </div>
    </div>
  )
}

export default Home;

       