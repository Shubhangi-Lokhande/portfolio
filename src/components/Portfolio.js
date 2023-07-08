import { portLinks } from "../utils/portfolioConstants";

const Portfolio = () => {
    console.log(portLinks.length)
  return (
    <div name="portfolio" className='w-full bg-gradient-to-b from-black via-black 
    to-gray-400 text-white p-4 h-auto'>
       <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full px-4 py-2'>
        
            <div className='p-8'>
                 <p className='text-3xl inline border-b-4 border-gray-400'>Portfolio</p>
                 <p className='py-6'>Here you will find some of the personal and clients projects that I created.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    portLinks.map(({id,src,code,href}) => (
                        <div key={id} className='shadow-md shadow-gray-800 rounded-lg'>
                            <img src={src} alt="array destruct" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex justify-center items-center'>
                                <button className='py-3 w-1/2 m-4 duration-200 hover:scale-105'>
                                <a href={href} className='' target="_blank" rel="noreferrer">{code}</a>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
      
        </div>  
    </div>
  )
}

export default Portfolio;