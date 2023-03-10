import { motion } from "framer-motion"

import { FiExternalLink } from "react-icons/fi"

import RewardLyst from "../Assets/Projects/RewardLyst.gif"

export default function Working() {
    const project = {
        image: RewardLyst,
        name: "RewardLyst.com",
        description: "SaaS rewards platform for small businesses ",
        category: "Web Developement and Advertising",
        primaryColor: "bg-rose-600",
        secondaryColor: "text-rose-500",
        techStack: ["Next.js", "React Native", "Supabase",],
        links: [
            {
                icon: <FiExternalLink/>,
                url: "https://rewardlyst.com"
            },
        ]         
    }


    const projectAnimationContainer = {
        hidden: { opacity: 1  },
        visible: { opacity: 1, transition: { delayChildren: 0.25, staggerChildren: 0.2 } },
        exit: { opacity: 1 },
    }

    const projectAnimationItem = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.75 } },
        exit: { opacity: 0 },
    }

    return(
        <motion.div
            className="max-w-3xl w-full flex flex-col items-start justify-start mt-32 lg:mt-40 space-y-12"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            exit={{ y: 10, opacity: 0 }}        
        >
            <div className="space-y-6">
                <h1 className="text-6xl m-0 p-0">🧑‍🔬</h1>
                <div className="space-y-2">
                    <div className="w-full flex flex-row items-center justify-center lg:space-x-4">
                        <h1 className="text-center text-3xl text-white font-extrabold m-0 p-0 mr-2 lg:mr-0">I'm Currently Working On</h1>
                        <hr className="flex-grow h-[2px] bg-[#0594E3]"/>
                    </div>     
                    <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>  

            <motion.div 
                className="w-full flex flex-col items-start justify-start"
                variants={projectAnimationContainer} 
                initial="hidden" animate="visible" 
            >
                <motion.a  
                    key={project.id} 
                    href={project.links[0].url} 
                    target="_blank"
                    className={project.primaryColor + " w-full flex flex-col justify-start bg-opacity-10 backdrop-blur-lg rounded-xl p-4 m-0 space-y-4 shadow-xl hover:cursor-pointer hover:scale-95 transition-transform duration-300"}
                    variants={projectAnimationItem}
                >
                    <div className="w-full flex flex-row items-start space-x-4">
                        <div className="flex flex-grow flex-col items-start justify-start">
                            <img 
                                src={project.image} 
                                className="w-2/3 h-auto rounded-xl object-cover"
                            />
                        </div>
                        <div className="flex flex-grow flex-row items-start justify-end space-x-4">
                            {project.links.map((link) => (
                                <a 
                                    href={link.url} 
                                    target="_blank"
                                    className={"text-3xl text-white transition-colors duration-500"}
                                >
                                    {link.icon}
                                </a>                                      
                            ))}
                        </div>
                    </div>                                
                    <div className="w-full flex flex-col items-start justify-end flex-grow space-y-1">
                        <p className={project.secondaryColor + " text-left text-base font-normal font-mono m-0 p-0"}>{project.category}</p>
                        <h1 className="text-left text-2xl text-white font-extrabold m-0 p-0">{project.name}</h1>
                        <p className="text-left text-base text-white font-normal m-0 p-0">{project.description}</p>
                    </div>
                    <div className="w-full flex flex-row items-center justify-start space-x-4">
                        {project.techStack.map((tech) => (
                            <p className={project.secondaryColor + " text-left text-sm font-light font-mono m-0 p-0"}>{tech}</p>
                        ))}
                    </div>
                </motion.a>
            </motion.div>

        </motion.div>

    )
}