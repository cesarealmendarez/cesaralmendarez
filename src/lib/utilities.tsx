import { ExternalLink, Github } from "lucide-react";

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
    },
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
    },
    {
        id: 3,
        name: "LeetCode",
        url: "https://leetcode.com/cesarealmendarez",
    },
];

export const projects = [
    {
        id: 0,
        name: "DoneDidIt",
        description:
            "✅ 📱 iOS To-Do List App. Inspired by 'Microsoft To Do'. SwiftUI + Firebase",
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
        description:
            "🚨 📰 Live news web app. Interfacing MediaStack API with Next.js, leveraging StepZen for GraphQL queries. Styling with TailwindCSS and HeadlessUI. Statically typed in TypeScript.",
        url: "",
        image: "",
        type: "Web Development",
        tech: ["Next.js", "TypeScript", "Tailwind"],
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
        description:
            "🤖 🖐️ Classification of live ASL alphabet gestures with Convolutional Neural Networks",
        url: "",
        image: "",
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
];

export const papers = [
    {
        id: 0,
        title: "Understanding NFAs & DFAs",
        subject: "automata-theory",
        link: "https://google.com",
        readTimeMin: "5",
    },
    {
        id: 1,
        title: "Odio Tempor Orci Dapibus, Ultrices in Iaculis Nunc",
        subject: "entrepreneurship",
        link: "https://google.com",
        readTimeMin: "10",
    },
    {
        id: 2,
        title: "Converting Between NFAs & DFAs",
        subject: "automata-theory",
        link: "https://google.com",
        readTimeMin: "5",
    },
    {
        id: 3,
        title: "Congue Nisi Vitae Suscipit Tellus Mauris a Diam",
        subject: "operating-systems",
        link: "https://google.com",
        readTimeMin: "15",
    },
];
