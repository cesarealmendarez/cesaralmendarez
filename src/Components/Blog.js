import { motion } from "framer-motion"

import BlogEmptyState from "../Assets/BlogEmptyState.svg"
import BlogEmptyState2 from "../Assets/BlogEmptyState2.svg"
import BlogEmptyState3 from "../Assets/BlogEmptyState3.svg"
import BlogEmptyState4 from "../Assets/BlogEmptyState4.svg"

export default function Blog() {
    return(
        <motion.div
            className="max-w-3xl w-full flex flex-col items-start justify-start mt-32 lg:mt-40 space-y-48"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            exit={{ y: 10, opacity: 0 }}        
        >
            <div className="space-y-6 w-full">
                <h1 className="text-6xl m-0 p-0">🧵</h1>
                <div className="space-y-2 w-full">
                    <div className="w-full flex flex-row items-center justify-center lg:space-x-4">
                        <h1 className="text-center text-3xl text-white font-extrabold m-0 p-0 mr-2 lg:mr-0">Blogs & Papers</h1>
                        <hr className="flex-grow h-[2px] bg-[#0594E3]"/>
                    </div>     
                    <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">
                        Some stuff I have written in long form about, mostly topics that interest me within and outside computer science.
                    </p>
                </div>
            </div>  

            <div className="w-full flex flex-col items-center justify-center space-y-8">
                <h1 className="text-center text-6xl m-0 p-0">🚧</h1>
                <p className="text-center text-3xl font-light m-0 p-0 text-white">in profectum</p>
            </div>

        </motion.div>

    )
}