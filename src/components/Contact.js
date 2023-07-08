
const Contact = () => {
  return (
    <div name="contact" className="w-full bg-gradient-to-b from-black via-black 
    to-gray-400 p-4 h-auto">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center p-4 w-full h-full text-white ">
            <div className="pb-8">
                <p className="text-3xl inline border-b-4 border-gray-500 p-2">Contact</p>
               
                <p className="pt-6 pb-3">I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow.</p>
                <p>If you have a good opportunity that matches my skills and experience then
                feel free to Contact me by submitting the form below.</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/2896b3ed-f9e9-499d-8877-fa737d7b3aed" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="Fullname" placeholder="Enter your name" 
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <input type="text" name="email" placeholder="Enter your email" 
                    className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <textarea name="message" rows="10" placeholder="Enter your message"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <button className="my-8 mx-auto px-6 py-3 text-white rounded-md bg-gradient-to-r
                     from-cyan-500 via-blue-400 to-blue-500 cursor-pointer font-semibold">Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact