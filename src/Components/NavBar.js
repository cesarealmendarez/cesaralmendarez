import {Fragment, useState } from "react"

import { useNavigate } from "react-router-dom"

import { Transition, Dialog } from "@headlessui/react"

import { motion } from "framer-motion"

import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoCloseOutline } from "react-icons/io5"

import Resume from "../Assets/Resume.pdf"
import Me from "../Assets/Me.png"

import { navbarLinks } from "../Utilities/navbarLinks"
import { socialLinks } from "../Utilities/socialLinks"

export default function NavBar() {
    const navigate = useNavigate()

    const [mobileNavBarOpen, setMobileNavBarOpen] = useState(false)

    const mobileNavBarAnimationContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.3, staggerChildren: 0.07 } },
        exit: { opacity: 1, scale: 0 },
    }

    const mobileNavbarAnimationItem = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
    }

    return(
        <>
            <nav className="hidden lg:flex fixed z-10 w-full flex-col items-center justify-center bg-[#120E26] backdrop-blur-lg bg-opacity-70">
                <div className="max-w-3xl w-full h-full flex flex-row items-center justify-end py-6 space-x-8">
                    <button 
                        className="mr-auto flex flex-row items-center text-center text-base font-light m-0 p-0 rounded-full border-[2px] border-white transition duration-700 hover:border-[#0594E3]"
                        onClick={() => { navigate("/") }}
                    >
                        <img 
                            src={Me} 
                            className="w-10 h-10 object-cover"
                        />
                    </button>

                    {navbarLinks.map((navbarLink, navbarLinkIDX) => (                                        
                        <button 
                            id={navbarLinkIDX}
                            key={navbarLinkIDX}
                            className="group text-center text-base text-[#FFF] font-light m-0 p-0 transition duration-300 hover:text-[#0594E3]"
                            onClick={() => { navigate(navbarLink.navbarLinkURL) }}
                        >
                            {navbarLink.navbarLinkName}
                            <div className="flex max-w-0 group-hover:max-w-full h-[2px] bg-[#0594E3] transition-all duration-300 rounded-full"/>
                        </button>                                                 
                    ))}

                    <a 
                        href={Resume} 
                        target="_blank" 
                        className="text-center text-base text-[#0594E3] font-normal rounded-md border-2 border-[#0594E3] px-4 py-2 hover:bg-[#0594E3] hover:bg-opacity-10 transition-all duration-700"
                    >
                        Resume
                    </a>                      
                </div>
            </nav>

            <nav className="flex lg:hidden fixed z-10 max-w-5xl w-full flex-row items-center m-0 p-6 bg-[#120E26] backdrop-blur-md bg-opacity-70">
                <button 
                    onClick={() => { navigate("/") }}
                    className="flex flex-row items-center justify-center"
                >
                    <img 
                        src={Me} 
                        className="w-10 h-10 object-cover rounded-full border-[2px] border-white"
                    />
                </button>

                <button 
                    className="text-4xl text-[#0594E3] ml-auto"
                    onClick={() => { setMobileNavBarOpen(true) }}
                >
                    <HiOutlineMenuAlt3/>
                </button>                
            </nav>   

            <Transition 
                appear show={mobileNavBarOpen} 
                as={Fragment}
            >
                <Dialog 
                    as="div" 
                    className="relative z-10"
                    onClose={() => { setMobileNavBarOpen(false) }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#120E26] bg-opacity-70 backdrop-blur-lg"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto flex flex-col items-center text-center px-4 pt-4 pb-12">
                        <div className="w-full flex flex-row items-center justify-end">
                            <button 
                                className="text-5xl text-[#0594E3]"
                                onClick={() => { setMobileNavBarOpen(false) }}
                            >
                                <IoCloseOutline/>
                            </button>                            
                        </div>

                        <div className="w-full flex grow flex-col items-center justify-center text-center">
                            <motion.ul
                                key="mobile-navbar-animation-container"
                                className="space-y-6"
                                variants={mobileNavBarAnimationContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {navbarLinks.map((navLink, navLinkIDX) => (
                                    <motion.li key={navLinkIDX} variants={mobileNavbarAnimationItem}>
                                        <button 
                                            className="text-center text-2xl text-white font-light font-mono m-0 p-0"
                                            onClick={() => {
                                                setMobileNavBarOpen(false)
                                                navigate(navLink.navbarLinkURL)
                                            }}
                                        >
                                            {navLink.navbarLinkName}
                                        </button>
                                    </motion.li>                                        
                                ))}

                                <motion.li 
                                    key="resume-social-link" 
                                    variants={mobileNavbarAnimationItem}
                                >
                                    <a 
                                        className="text-center text-2xl text-[#0594E3] font-light font-mono"
                                        href={Resume}
                                        target="_blank"
                                    >
                                        Resume
                                    </a>
                                </motion.li>                                 
                            </motion.ul>
                        </div>

                        <motion.div 
                            key="mobile-navbar-social-links-animation-container"
                            className="w-full flex flex-row items-center justify-center space-x-8"
                            variants={mobileNavBarAnimationContainer}
                            initial="hidden"
                            animate="visible"                            
                        >
                            {socialLinks.map((socialLink, socialLinkIDX) => (
                                <a 
                                    key={socialLinkIDX} 
                                    href={socialLink.sociaLinkURL} 
                                    target="_blank" 
                                    className="text-center text-3xl text-[#A3A9C3] m-0 p-0" 
                                    variants={mobileNavbarAnimationItem}
                                >
                                    {socialLink.socialLinkIcon}
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </Dialog>
            </Transition>                  
        </>
    )
}