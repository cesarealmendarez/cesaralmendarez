import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FiChevronRight } from "react-icons/fi"

import Footer from "../Components/Footer"

export default function Home() {
    const navigate = useNavigate()

    return(
        <motion.div
            key="home-motion-container"
            className="max-w-3xl w-full flex flex-col items-start justify-start mt-32 lg:mt-40 space-y-48"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.15}}
            exit={{ y: 10, opacity: 0 }}  
        >
            <div className="w-full flex flex-col items-start justify-start space-y-12">
                <div className="w-full flex flex-col items-start jusitfy-start space-y-6">
                    <p className="text-left text-lg text-[#0594E3] font-normal m-0 p-0">Welcome, my name is</p>

                    <div className="w-full flex flex-col items-start justify-start space-y-2">
                        <h1 className="text-left text-5xl lg:text-6xl text-white font-bold m-0 p-0">Cesar Almendarez</h1>
                        <h1 className="text-left text-5xl lg:text-6xl text-[#A3A9C3] font-bold m-0 p-0">Web and Mobile App Developer</h1>
                    </div>

                    <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">Thanks for checking out my portfolio! I am currently a sophomore at CSULA studying Computer Science. This website contains a general overview of my projects and ventures in the field so far.</p>
                </div>
                
                <button 
                    className="flex flex-row items-center justify-center text-center text-lg text-[#0594E3] font-normal rounded-md border-2 border-[#0594E3] px-6 py-4 hover:bg-[#0594E3] hover:bg-opacity-10 hover:cursor-pointer hover:scale-95 animate-pulse transition-all duration-300"
                    onClick={() => { navigate("/projects") }}
                >
                    Check Out My Work
                    <FiChevronRight className="ml-4"/>
                </button>  
            </div>

            {/* <div className="w-full grid grid-cols-5">
                <div className="col-span-4 flex flex-col items-start justify-start pr-8 space-y-2">
                    
                    <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">Thanks for checking out my portfolio! I am currently a sophomore at CSULA studying Computer Science. This website contains a general overview of my projects and ventures in the field so far.</p>
                </div>

                <div className="col-span-1">
                    <img src={Me} className="object-cover w-full h-auto"/>
                </div>
            </div> */}

            {/* <div className="w-full grid grid-cols-5">
                <div className="col-span-4 space-y-6 w-full pr-12">
                    <h1 className="text-6xl m-0 p-0"></h1>
                    <div className="space-y-2 w-full">
                        <div className="w-full flex flex-row items-center justify-center lg:space-x-4">
                            <h1 className="text-center text-3xl text-white font-extrabold m-0 p-0 mr-2 lg:mr-0">About Me</h1>
                            <hr className="flex-grow h-[2px] bg-[#0594E3]"/>
                        </div>     
                        <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">
                            A compilation of my side projects. My aim when creating these was to develop my skills in a diverse set of technologies while building something cool with them!
                        </p>
                    </div>
                </div>   

                <div className="relative col-span-1">
                    <img src={Me} className="object-cover w-full h-auto rounded-full border-4 border-white"/>
                    <div className="z-10 absolute top-0 left-0 bottom-0 right-0 rounded-full bg-blue-600 bg-opacity-60 blur-xl hover:bg-opacity-0 transition-all duration-700">
                        
                    </div>
                </div>
            </div>            */}
        </motion.div>
    )
}