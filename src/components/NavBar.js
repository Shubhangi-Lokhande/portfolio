import { useState } from "react";
import {navLinks} from "../utils/common";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    return(
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="font-signature text-3xl ml-2">Shubhangi</h1>
            </div>
            <ul className="hidden md:flex">
                {
                    navLinks.map(({id, link}) => {
                        return(
                            <li key={id} className="mx-4 cursor-pointer font-medium capitalize
                             text-blue-500 hover:scale-105 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>
                        )
                    })
                }
              
            </ul>
           
           <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-blue-500 md:hidden">
                {
                    nav ? <FaTimes size={30}/> : <FaBars size={30}/>
                }
           </div>
            
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-200">
                {
                    navLinks.map(({id, link}) => {
                        return(
                            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-2xl">
                               
                               <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                            </li>
                        )
                    })
                }
              
            </ul>     
            )}
            
          
             
        </div>
    )
}
export default NavBar;
