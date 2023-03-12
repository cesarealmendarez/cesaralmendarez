import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

export default function Experience() {
    const experience = [
        {
            experienceID: 0,
            experienceBusiness: "CSULA EPIC", 
            experienceCommitmentStatus: "Part-Time",
            experienceRole: "Data Collection and Administration Assistant",
            experienceStartDate: "Jan 2022",
            experienceEndDate: "Present",
            experienceTakeaways: [
                "Publishing daily updates to the Eagle Connect front-end to reflect up-to-date information on local events, volunteer opportunities, etc.", 
                "Developed a routine reporting system that extracts relevant, actionable data points on volunteer activity to further assist in the faciliation of community engagement between CSULA students and community partners.", 
                "Appointed first-level technical support to troublshoot and resolve technical issues Eagle Connect users might encounter."
            ],
            experiencePrimaryColor: "text-yellow-500",
            experienceLink: "https://www.volunteereasy.com/Site/eagleconnect#/"
        },
        {
            experienceID: 1,
            experienceBusiness: "PretzelMaker",
            experienceCommitmentStatus: "Full-Time",
            experienceRole: "Roller",
            experienceStartDate: "Apr 2021",
            experienceEndDate: "Aug 2021",
            experienceTakeaways: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ],
            experiencePrimaryColor: "text-yellow-500",
            experienceLink: ""
        },
    ]; 

    const [selectedExperienceID, setSelectedExperienceID] = useState(experience[0].experienceID);

    return(
        <motion.div
            className="max-w-3xl w-full flex flex-col items-start justify-start mt-32 lg:mt-40 space-y-12"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35 }}
            exit={{ y: 10, opacity: 0 }}        
        >
            <div className="space-y-6 w-full">
                <h1 className="text-6xl m-0 p-0">🧳</h1>
                <div className="space-y-2 w-full">
                    <div className="w-full flex flex-row items-center justify-center lg:space-x-4">
                        <h1 className="text-center text-3xl text-white font-extrabold m-0 p-0 mr-2 lg:mr-0">Paid Experience</h1>
                        <hr className="flex-grow h-[2px] bg-[#0594E3]"/>
                    </div>     
                    <p className="text-left text-lg text-[#A3A9C3] font-normal m-0 p-0">
                        My professional work experience from retail to tech 
                    </p>
                </div>
            </div>  

            <div className="w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                <ul className="relative flex flex-row lg:flex-col m-0 p-0 overflow-x-scroll sm:overflow-x-visible">
                    <div className="absolute left-0 right-0 lg:right-auto lg:top-0 bottom-0 h-[2px] lg:h-80 lg:w-[2px] bg-[#A3A9C3] bg-opacity-50 rounded-xl"/>
                    {experience.map((experience, experienceIDX) => (
                        <li
                            key={experienceIDX}
                            className="relative flex px-4 py-4 hover:bg-[#0594E3] hover:bg-opacity-10 transition-all duration-300 m-0 cursor-pointer whitespace-nowrap"
                            onClick={() => { setSelectedExperienceID(experience.experienceID) }}
                        >
                            {experience.experienceID == selectedExperienceID ?
                                <motion.div className="absolute left-0 right-0 h-[2px] bottom-0 lg:h-auto lg:bottom-0 lg:right-auto lg:top-0 lg:w-[2px] bg-[#0594E3] rounded-xl" layoutId="underline" transition={{ duration: 0.2 }}/>
                                :
                                null
                            }

                            {experience.experienceID == selectedExperienceID ?
                                <p className="text-left text-base text-[#0594E3] font-normal font-mono transition-all duration-300">{experience.experienceBusiness}</p>
                                : 
                                <p className="text-left text-base text-[#A3A9C3] hover:text-[#0594E3] font-normal font-mono transition-all duration-500">{experience.experienceBusiness}</p>
                            }                            
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col items-start justify-start m-0 p-0">
                    <AnimatePresence 
                        mode="wait"
                        initial={true}
                    >
                        <motion.div
                            key={experience[selectedExperienceID].experienceID}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.35 }}
                            exit={{ x: 10, opacity: 0 }}                                              
                            className="space-y-6"
                        >
                            <div>
                                <h1 className="text-left text-2xl text-white font-bold m-0 p-0">{experience[selectedExperienceID].experienceRole} <span><a href={experience[selectedExperienceID].experienceLink} target="_blank" className={"" + experience[selectedExperienceID].experiencePrimaryColor}>@ {experience[selectedExperienceID].experienceBusiness}</a></span></h1>
                                <p className="text-left text-sm text-[#A3A9C3] font-normal font-mono m-0 p-0 mt-2">{experience[selectedExperienceID].experienceStartDate} - {experience[selectedExperienceID].experienceEndDate}</p>
                                <p className="text-left text-sm text-[#A3A9C3] font-normal font-mono m-0 p-0 mt-2">{experience[selectedExperienceID].experienceCommitmentStatus}</p>
                            </div>    
                            <ul className={"marker:" + experience[selectedExperienceID].experiencePrimaryColor + " w-full flex flex-col m-0 p-0 list-disc"}>
                                {experience[selectedExperienceID].experienceTakeaways.map((experienceTakeaway) => (
                                    <li>
                                        <p className="text-left text-base text-white font-normal m-0 p-0">{experienceTakeaway}</p>
                                    </li>
                                ))}
                            </ul>                                                    
                        </motion.div>                        
                    </AnimatePresence>
                </div>
            </div>

            {/* <div className="w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
                <ul className="relative flex flex-row lg:flex-col m-0 p-0">
                    <div className="absolute left-0 right-0 lg:right-auto lg:top-0 bottom-0 h-[2px] lg:h-60 lg:w-[2px] bg-[#A3A9C3] bg-opacity-40 rounded-xl"/>
                    {experience.map((experience, experienceIDX) => (
                        <li
                            key={experienceIDX}
                            className="relative flex px-4 py-2 hover:bg-[#0594E3] hover:bg-opacity-10 transition-all duration-300 m-0 cursor-pointer whitespace-nowrap"
                            onClick={() => {setSelectedExperienceID(experience.experienceID)}}
                        >
                            {experience.experienceID == selectedExperienceID ?
                                <motion.div className="absolute left-0 right-0 h-[2px] bottom-0 lg:h-auto lg:bottom-0 lg:right-auto lg:top-0 lg:w-[2px] bg-[#0594E3] rounded-xl" layoutId="underline" transition={{ duration: 0.2 }}/>
                                :
                                null
                            }

                            {experience.experienceID == selectedExperienceID ?
                                <p className="text-left text-base text-[#0594E3] font-normal font-mono transition-all duration-300">{experience.experienceBusiness}</p>
                                : 
                                <p className="text-left text-base text-[#A3A9C3] hover:text-[#0594E3] font-normal font-mono transition-all duration-500">{experience.experienceBusiness}</p>
                            }

                        </li>
                    ))}                                
                </ul>

                <div className="flex flex-col items-start justify-start m-0 p-0">
                    <AnimatePresence 
                        mode="wait"
                        initial={true}
                    >
                        <motion.div
                            key={experience[selectedExperienceID].experienceID}
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.35 }}
                            exit={{ x: -10, opacity: 0 }}                                              
                            className="space-y-6"
                        >
                            <div>
                                <h1 className="text-left text-2xl text-white font-bold m-0 p-0">{experience[selectedExperienceID].experienceRole} <span><a href="https://www.calstatela.edu/engagement/epic-program" target="_blank" className={"" + experience[selectedExperienceID].experiencePrimaryColor}>@ {experience[selectedExperienceID].experienceBusiness}</a></span></h1>
                                <p className="text-left text-sm text-[#A3A9C3] font-normal font-mono m-0 p-0 mt-2">{experience[selectedExperienceID].experienceStartDate} - {experience[selectedExperienceID].experienceEndDate}</p>
                            </div>
                            <ul className="marker:text-[#0594E3] w-full flex flex-col m-0 p-0 pl-4 list-none">
                                {experience[selectedExperienceID].experienceTakeaways.map((experienceTakeaway, experienceTakeawayIDX) => (
                                    <li>
                                        <p className="text-left text-base text-[#A3A9C3] font-normal m-0 p-0">{experienceTakeaway}</p>
                                    </li>
                                ))}
                            </ul>                                            
                        </motion.div>                                        
                    </AnimatePresence> 
                </div>
            </div>             */}
        </motion.div>
    )
}