import {FaGithub, FaLinkedin, FaFileDownload, FaCertificate} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Administrator from '../assets/Administrator.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import sass from '../assets/sass.png';
import ResponsiveWebDesign from '../assets/ResponsiveWebDesign.png';
import jQuery from '../assets/jQuery.png';

export const navLinks = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link:'about'
    },
    {
        id: 3,
        link: 'portfolio'
    },
    {
        id: 4,
        link:'experience'
    },
    {
        id: 5,
        link:'contact'
    }
]


export const socialLinks = [
    {
        id: 1,
        child: (
          <>
          Linkedin<FaLinkedin size={30}/>
          </>
        ),
        href: "https://www.linkedin.com/in/shubhangi-bhosale-13a0511b4/",
        style: "rounded-tr-md"
    },
    {
        id: 2,
        child: (
            <>
            Github<FaGithub size={30}/>
            </> 
        ),
        href: "https://github.com/Shubhangi-Lokhande/"
    },
    {
        id: 3,
        child: (
            <>
            Mail<HiOutlineMail size={30}/>
            </> 
        ),
        href: "mailTo:shubhangi.bhosale09@gmail.com"
    },
    {
        id: 4,
        child: (
            <>
            Certificate<FaCertificate size={30}/>
            </> 
        ),
        href: "https://drive.google.com/file/d/1da-JY4Jm7qxgtlEcDiafMYJsy8HemJKk/view?usp=sharing"
    }

    
]

export const techs = [
    {
        id: 1,
        title: 'Salesforce Administrator',
        src: Administrator,
        shadow: 'shadow-blue-800'
    },
    {
        id: 2,
        title: 'HTML',
        src: html,
        shadow: 'shadow-orange-500'
    },
    {
        id: 3,
        title: 'JavaScript',
        src: javascript,
        shadow: 'shadow-yellow-500'
    },
    {
        id: 4,
        title: 'React',
        src: react,
        shadow: 'shadow-blue-500'
    },
    {
        id: 5,
        title: 'CSS',
        src: css,
        shadow: 'shadow-sky-500'
    },
    {
        id: 6,
        title: 'Tailwind',
        src: tailwind,
        shadow: 'shadow-sky-400'
    },
    {
        id: 7,
        title: 'jQuery',
        src: jQuery,
        shadow: 'shadow-blue-800'
    },
  {
        id: 8,
        title: 'SASS',
        src: sass,
        shadow: 'shadow-pink-400'
    },
    ,
    {
        id: 9,
        title: 'Responsive Web Design',
        src: ResponsiveWebDesign,
        shadow: 'shadow-gray-800'
    },
    {
        id: 10,
        title: 'GitHub',
        src: github,
        shadow: 'shadow-gray-800'
    }
    

]