import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function FourOFour() {
    const navigate = useNavigate()

    return(
        <motion.div
            className="max-w-3xl w-full h-screen flex flex-col items-center justify-center space-y-12"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            exit={{ y: 10, opacity: 0 }}        
        >
            <div className="w-full flex flex-row items-center justify-center space-x-6">
                <h1 className="text-center text-4xl text-white font-black">404</h1>
                <hr className="w-[1px] h-8 bg-white"/>        
                <h1 className="text-center text-base text-white font-light">This page was not found</h1>
            </div>

            <button 
                className="flex flex-row items-center justify-center text-center text-lg text-[#0594E3] font-normal rounded-md border-2 border-[#0594E3] px-6 py-4 hover:bg-[#0594E3] hover:bg-opacity-10 hover:cursor-pointer hover:scale-95 transition-all duration-300"
                onClick={() => { navigate("/") }}
            >
                Return Home
            </button>
        </motion.div>        
    )
}