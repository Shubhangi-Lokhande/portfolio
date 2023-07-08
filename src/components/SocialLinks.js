
import {socialLinks} from '../utils/common';


import React from 'react'

const SocialLinks = () => {

  
  return (
    <div className='hidden lg:flex flex-col left-0 top-[35%] fixed '>
        {
            socialLinks.map(({id, href, download, child, style}) => (
               
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 font-semibold text-xl bg-gray-300 ml-[-110px] hover:ml-[-10px] duration-300 hover:rounded-md" + " "+style}>
                    <a href={href} className='w-full flex justify-between items-center ml-2' target="_blank" download={download} rel="noreferrer">
                       {child}
                    </a>
                    
                </li>
            ))
        }
    </div>
  )
}

export default SocialLinks