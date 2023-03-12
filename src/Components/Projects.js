import { motion } from "framer-motion"

import { FiExternalLink, FiGithub } from "react-icons/fi"
import { GrAppleAppStore } from "react-icons/gr"
import { SiStreamlit } from "react-icons/si"

import NewsNova from "../Assets/Projects/NewsNova.png"
import DoneDidIt from "../Assets/Projects/DoneDidIt.png"
import DeepASL from "../Assets/Projects/DeepASL.gif"

export default function Projects() {
    const projects = [
        {
            id: 0,
            image: DoneDidIt,
            name: "Done Did It",
            description: "✅ iOS To-Do List App. Inspired by 'Microsoft To Do'. SwiftUI + Firebase",
            category: "iOS Developement",
            primaryColor: "bg-rose-600",
            secondaryColor: "text-rose-500",
            techStack: ["Swift", "SwiftUI", "Firebase"],
            links: [
                {
                    icon: <GrAppleAppStore/>,
                    url: "https://apps.apple.com/us/app/done-did-it/id6445909068"
                },
                {
                    icon: <FiGithub/>,
                    url: "https://github.com/cesarealmendarez/DoneDidIt"
                },
            ]  
        },
        {
            id: 1,
            image: NewsNova,
            name: "NewsNova",
            description: "🚨 📰 Live news web app. Interfacing MediaStack API with Next.js",
            category: "Web Developement",
            primaryColor: "bg-violet-500",
            secondaryColor: "text-violet-400",
            techStack: ["Next.js", "TypeScript", "TailwindCSS"],
            links: [
                {
                    icon: <FiExternalLink/>,
                    url: "https://newsnova.vercel.app"
                },
                {
                    icon: <FiGithub/>,
                    url: "https://github.com/cesarealmendarez/NewsNova"
                },
            ]  
        },  
        {
            id: 2,
            image: DeepASL,
            name: "DeepASL",
            description: "🤖 Classification of ASL alphabet gestures with Convolutional Neural Networks",
            category: "Artificial Intelligence",
            primaryColor: "bg-green-500",
            secondaryColor: "text-green-400",
            techStack: ["Python", "OpenCV", "NumPy"],
            links: [
                {
                    icon: <SiStreamlit/>,
                    url: "https://google.com"
                },
                {
                    icon: <FiGithub/>,
                    url: "https://github.com/cesarealmendarez/DeepASL"
                },
            ]  
        }                             
    ]

    const projectsAnimationContainer = {
        hidden: { opacity: 1  },
        visible: { opacity: 1, transition: { delayChildren: 0.25, staggerChildren: 0.2 } },
        exit: { opacity: 1 },
    }

    const projectsAnimationItem = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.75 } },
        exit: { opacity: 0 },
    }

    return(
        <motion.div
            key="projects-motion-container"
            className="max-w-3xl w-full flex flex-col items-start justify-start mt-32 lg:mt-40 space-y-12"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.15}}
            exit={{ y: 10, opacity: 0 }}        
        >
            <div className="space-y-6 w-full">
                <h1 className="text-6xl m-0 p-0">🛠️</h1>
                <div className="space-y-2 w-full">
                    <div className="w-full flex flex-row items-center justify-center lg:space-x-4">
                        <h1 className="text-center text-3xl text-white font-extrabold m-0 p-0 mr-2 lg:mr-0">Projects</h1>
                        <hr className="flex-grow h-[2px] bg-[#0594E3]"/>
                    </div>     
                    <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">
                        A compilation of my side projects. My aim when creating these was to develop my skills in a diverse set of technologies while build something cool with them!
                    </p>
                </div>
            </div>  

            <div className="w-full flex flex-col items-start justify-start">
                <motion.ul 
                    variants={projectsAnimationContainer} 
                    initial="hidden" animate="visible" 
                    className="w-full grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 m-0 p-0"
                >
                    {projects.map((project, projectIDX) => (
                        <motion.a  
                            key={projectIDX} 
                            href={project.links[0].url} 
                            target="_blank"
                            className={project.primaryColor + " col-span-1 flex flex-col justify-start bg-opacity-10 backdrop-blur-lg rounded-xl p-4 m-0 space-y-4 shadow-xl hover:cursor-pointer hover:scale-105 transition-transform duration-300"}
                            variants={projectsAnimationItem}
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
                                            className={"hover:" + project.primaryColor + " text-3xl text-white transition-colors duration-500"}
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
                    ))}
                </motion.ul>    
            </div>
        </motion.div>
    )
}