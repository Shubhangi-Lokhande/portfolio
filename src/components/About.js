import React from 'react'

const About = () => {
  return (
    <div id="about" className='h-screen bg-gradient-to-b from-black via-black 
    to-gray-400 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 py-2'>
            <div className='pb-8'>
                <p className='text-3xl inline border-b-4 border-gray-400'>About</p>
        
            </div> 
                <p className=''>
                  <p className='text-xl'>HEY, I'M Shubhangi Bhosale</p>
                  <p className='pt-3'>I have 10+ years of experience in IT, with over 6 years specializing in UI design and front-end development.  
                  </p>
                  <p className='pt-4'> I am passionate about creating engaging, responsive web pages and applications, I’ve developed interactive web-based courses 
                  and websites using <strong>HTML5, jQuery, JavaScript, CSS3, and React</strong>, ensuring a seamless user experience for successful products and services.</p>
                  <p className='pt-4 pb-3'>Recently earned the <strong>Salesforce Administrator certification</strong>, showcasing a commitment to continuous learning and professional growth.
                  Proficient in key Salesforce Admin technologies, including Flows & Automation, Workflow & Validation, Data Security & Management, and Reporting & Dashboards, with a strong ability to optimize and efficiently manage Salesforce environments.
                  </p>
                   Do check out some of my work in the Projects section below.                 
               </p>
                <br/>
                <div className='text-xl'>
                </div>     
        </div>
    </div>
  )
}

export default About