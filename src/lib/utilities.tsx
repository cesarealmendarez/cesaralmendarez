import { ArrowUpRight, Github } from "lucide-react";

export const navigationLinks = [
    {
        id: 0,
        name: "Cesar Almendarez",
        url: "/",
        target: "_self"
    },
    {
        id: 1,
        name: "Projects",
        url: "/projects",
        target: "_self"
    },
    {
        id: 2,
        name: "Experience",
        url: "/experience",
        target: "_self"
    },
    {
        id: 3,
        name: "Resume",
        url: "/CesarAlmendarez.pdf",
        target: "_blank"
    },
]

export const socialLinks = [
    {
        id: 0,
        name: "Github",
        url: "https://github.com/cesarealmendarez"
    },
    {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cesarealmendarez"
    },
    {
        id: 2,
        name: "Email",
        url: "mailto:cesarealmendarez@gmail.com"
    },
    {
        id: 3,
        name: "LeetCode",
        url: "https://leetcode.com/cesarealmendarez"
    }
]

export const projects = [
    {
        id: 0,
        name: "DoneDidIt",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        type: "iOS Development",
        tech: ["Swift", "Xcode", "Firebase"],
        links: [
            {
                id: 0,
                url: "https://apps.apple.com/us/app/done-did-it/id6445909068",
                icon: <ArrowUpRight size={18} strokeWidth={1.5} className="text-white" />,
            },
            {
                id: 1,
                url: "https://github.com/cesarealmendarez/DoneDidIt",
                icon: <Github size={18} strokeWidth={1.5} className="text-white" />,
            },
        ]
    },
    {
        id: 1,
        name: "NewsNova",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        url: "",
        image: "",
        type: "Web Development",
        tech: ["Next.js", "TypeScript", "Tailwind"],
        links: [
            {
                id: 0,
                url: "https://newsnova.vercel.app/",
                icon: <ArrowUpRight size={18} strokeWidth={1.5} className="text-white" />,
            },
            {
                id: 1,
                url: "https://github.com/cesarealmendarez/NewsNova",
                icon: <Github size={18} strokeWidth={1.5} className="text-white" />,
            },
        ]

    },
    {
        id: 2,
        name: "DeepASL",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        url: "",
        image: "",
        type: "Computer Vision & CNNs",
        tech: ["Python", "OpenCV", "NumPy"],
        links: [
            {
                id: 0,
                url: "https://github.com/cesarealmendarez/DeepASL",
                icon: <Github size={18} strokeWidth={1.5} className="text-white" />,
            },
        ]
    },
]

