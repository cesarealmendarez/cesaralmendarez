import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "./Components/Home"
import Working from "./Components/Working"
import Projects from "./Components/Projects"
import Experience from "./Components/Experience"
import FourOFour from "./Components/FourOFour"
import NavBar from "./Components/NavBar"
import Blog from "./Components/Blog"
import Footer from "./Components/Footer"

import { socialLinks } from "./Utilities/socialLinks"

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}

export default function App() {
    const location = useLocation();

    return(
        <div className="relative min-w-screen min-h-screen flex flex-col items-center justify-start bg-[#120E26] px-6 large:px-8 pb-12">
            <div className="hidden lg:flex fixed bottom-0 left-16 flex-col items-center justify-center space-y-8">
                {socialLinks.map((socialLink, socialLinkIDX) => (
                    <a 
                        key={socialLinkIDX} 
                        href={socialLink.sociaLinkURL} 
                        target="_blank" 
                        className="text-center text-3xl text-white hover:text-[#0594E3] hover:-translate-y-1 transition-transform duration-500 m-0 p-0"
                    >
                        {socialLink.socialLinkIcon}
                    </a>        
                ))}
                <hr className="w-[1px] h-40 bg-white"/>        
            </div>   

            <div className="hidden lg:flex fixed bottom-0 right-1 flex-col items-center justify-center space-y-32">
                <a 
                    href="mailto: cesarealmendarez@gmail.com" 
                    className="text-center text-sm text-white hover:text-[#0594E3] hover:-translate-y-1 font-light font-mono m-0 p-0 rotate-90 transition-transform duration-500"
                >
                    cesarealmendarez@gmail.com
                </a>
                <hr className="w-[1px] h-40 bg-white"/>        
            </div>  

            <NavBar/>              

            <AnimatePresence
                mode="wait"
                initial={true}  
            >
                <Routes 
                    // key="router"
                    location={location}
                    key={location.pathname}
                >
                    <Route
                        key="home-route"
                        index
                        element={<Home/>}
                    />

                    <Route
                        key="working-route"
                        path="working" 
                        element={<Working/>}
                    />

                    <Route 
                        key="projects-route"
                        path="projects" 
                        element={<Projects/>} 
                    />

                    <Route 
                        key="experience-route"
                        path="experience" 
                        element={<Experience/>} 
                    />
                    
                    <Route 
                        key="blog-route"
                        path="blog" 
                        element={<Blog/>} 
                    />

                    <Route 
                        key="fourofour-route"
                        path="*" 
                        element={<FourOFour/>} 
                    />
                </Routes>                
            </AnimatePresence>
        </div>                     
    )
}