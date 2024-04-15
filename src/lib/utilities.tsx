import { Banknote, ExternalLink, Github, SigmaSquare } from "lucide-react";

export const navigationLinks = [
    {
        id: 0,
        name: "Index",
        url: "/",
        target: "_self",
    },
    {
        id: 1,
        name: "Projects",
        url: "/projects",
        target: "_self",
    },
    {
        id: 2,
        name: "Papers",
        url: "/papers",
        target: "_self",
    },
    {
        id: 3,
        name: "Resume",
        url: "/Cesar-Almendarez-Resume-Fall-2023.pdf",
        target: "_blank",
    }
];

export const socialLinks = [
    {
        id: 0,
        name: "Github",
        url: "https://github.com/cesarealmendarez",
    },
    {
        id: 1,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/cesarealmendarez",
    },
    {
        id: 2,
        name: "Email",
        url: "mailto:cesarealmendarez@gmail.com",
    }
];

export const projects = [
    {
        id: 0,
        name: "DoneDidIt",
        description:
            "✅ 📱 iOS To-Do List App. Inspired by 'Microsoft To Do'. SwiftUI + Firebase.",
        type: "iOS Development",
        tech: ["Swift", "Xcode", "Firebase"],
        links: [
            {
                id: 0,
                url: "https://apps.apple.com/us/app/done-did-it/id6445909068",
                icon: (
                    <ExternalLink
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
            {
                id: 1,
                url: "https://github.com/cesarealmendarez/DoneDidIt",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
    {
        id: 1,
        name: "NewsNova",
        description: "🚨 📰 Live news web app. Interfacing MediaStack API with Next.js, leveraging StepZen for GraphQL queries. Styling with Tailwind CSS and HeadlessUI. Statically typed in TypeScript.",
        type: "Web Development",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        links: [
            {
                id: 0,
                url: "https://newsnova.vercel.app/",
                icon: (
                    <ExternalLink
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
            {
                id: 1,
                url: "https://github.com/cesarealmendarez/NewsNova",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
    {
        id: 2,
        name: "DeepASL",
        description: "🤖 🖐️ Classification of live ASL alphabet gestures with Convolutional Neural Networks",
        type: "Computer Vision & CNNs",
        tech: ["Python", "OpenCV", "NumPy"],
        links: [
            {
                id: 0,
                url: "https://github.com/cesarealmendarez/DeepASL",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
    {
        id: 3,
        name: "This Site",
        description: "💻 🗂️ Cesar Almendarez Developer Portfolio",
        type: "Web Development",
        tech: ["Next.js", "Vercel", "Tailwind CSS"],
        links: [
            {
                id: 0,
                url: "https://github.com/cesarealmendarez/cesaralmendarez",
                icon: (
                    <Github
                        size={18}
                        strokeWidth={1.5}
                        className="text-white"
                    />
                ),
            },
        ],
    },
];

export const papers: Paper[] = [
    {
        id: 0,
        title: "Creating NFAs to Accept Strings",
        topic: "Automata Theory",
        icon: <SigmaSquare className="text-neutral-400" size={15} />,
        publishedTimestamp: "Monday February 5th",
        author: "Cesar Almendarez",
        link: "creating-nfas-to-accept-strings",
        readTimeMinutes: "10",
        content: <></>
        // <div className="w-full flex flex-col items-start justify-start">
        //     <p className="text-left text-sm font-light text-white">
        //         Creating NFAs to Accept Strings Content
        //     </p>
        // </div>
    },
    {
        id: 1,
        title: "Learning a Bit About Compounding Interest",
        topic: "Finance",
        icon: <Banknote className="text-neutral-400" size={15} />,
        publishedTimestamp: "Wednesday February 7th",
        author: "Cesar Almendarez",
        link: "learning-a-bit-about-compounding-interest",
        readTimeMinutes: "10",
        content: <></>
        // <div className="w-full flex flex-col items-start justify-start">
        //     <p className="text-left text-sm font-light text-white">
        //         Learning a Bit About Compounding Interest Content
        //     </p>
        // </div>
    },
];
