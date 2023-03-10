import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FiChevronRight } from "react-icons/fi"

import Footer from "../Components/Footer"

export default function Home() {
    const navigate = useNavigate()

    return(
        <motion.div
            className="max-w-3xl w-full flex flex-col items-start justify-start mt-32 lg:mt-40 space-y-12"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            exit={{ y: 10, opacity: 0 }}     
        >
            <div className="w-full flex flex-col items-start jusitfy-start space-y-6">
                <p className="text-left text-lg text-[#0594E3] font-normal m-0 p-0">Welcome, my name is</p>

                <div className="w-full flex flex-col items-start justify-start space-y-2">
                    <h1 className="text-left text-5xl lg:text-6xl text-white font-bold m-0 p-0">Cesar Almendarez</h1>
                    <h1 className="text-left text-5xl lg:text-6xl text-[#A3A9C3] font-bold m-0 p-0">Web and Mobile App Developer</h1>
                </div>

                <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">Thanks for checking out my portfolio! I am currently a sophomore at CSULA pursuing a BS in Computer Science. I specialize in web developement however my interests span across all realms of CS. This website contains a general overview of my projects and ventures in the field so far.</p>
            </div>
            
            <button 
                className="flex flex-row items-center justify-center text-center text-lg text-[#0594E3] font-normal rounded-md border-2 border-[#0594E3] px-6 py-4 hover:bg-[#0594E3] hover:bg-opacity-10 hover:cursor-pointer hover:scale-95 animate-pulse transition-all duration-300"
                onClick={() => { navigate("/projects") }}
            >
                Check Out My Work
                <FiChevronRight className="ml-4"/>
            </button>  

        </motion.div>
    )
}