import { techs } from "../utils/common";

const Experience = () => {
  return (
    <div name="experience" className='w-full bg-gradient-to-b from-black via-black 
    to-gray-400 p-4 h-auto'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center p-4 w-full h-full text-white '>
            <div className='pb-8'>
                <p className='text-3xl inline border-b-4 border-gray-500 p-2'>Experience</p>
                <p className='py-6'>These are the technologies I have worked on.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-2 sm:px-0'> 
                {
                    techs.map(({id,title,src,shadow}) => (
                        <div key={id} className={'shadow-md hover:scale-105 duration-200 mt-3'+" "+shadow}>
                            <img src={src} alt={title} className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                
            </div>

        </div>
    </div>
  )
}

export default Experience