import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import { IoCloseOutline } from "react-icons/io5"
import { SiLeetcode } from "react-icons/si";

export const socialLinks = [
    {
        socialLinkID: 0,
        sociaLinkURL: "https://github.com/cesarealmendarez",
        socialLinkIcon: <FiGithub/>,
    },
    {
        socialLinkID: 1,
        sociaLinkURL: "https://leetcode.com/cesarealmendarez/",
        socialLinkIcon: <SiLeetcode/>,
    },        
    {
        socialLinkID: 2,
        sociaLinkURL: "https://www.linkedin.com/in/cesarealmendarez/",
        socialLinkIcon: <FiLinkedin/>,
    },
    {
        socialLinkID: 3,
        sociaLinkURL: "mailto: cesarealmendarez@gmail.com",
        socialLinkIcon: <FiMail/>,
    },    
];