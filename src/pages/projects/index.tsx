import Link from "next/link"

import { projects } from "@/lib/utilities"

export default function Projects() {
    return (
        <div className="w-full flex flex-col items-start justify-start space-y-6 mt-6">
            <p className="text-left text-sm text-white font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
            </p>

            <ul className="w-full border-neutral-800">
                {projects.map((project, idx) => {
                    return (
                        <li className="w-full flex flex-col items-start justify-start border-t-[0.5px] border-neutral-800 py-4 px-0 space-y-2">
                            <div className="w-full flex flex-row items-center justify-start">
                                <p className="flex text-left text-sm text-white font-light">{project.name}</p>

                                <ul className="flex flex-row grow items-center justify-end space-x-4">
                                    {project.links.map((link, idx) => {
                                        return (
                                            <li key={idx}>
                                                <Link href={link.url} target="_blank">
                                                    {link.icon}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="flex flex-col items-start justify-start">
                                <p className="text-left text-sm text-neutral-400 font-light">{project.description}</p>
                            </div>

                            <ul className="flex flex-row items-center justify-start space-x-2">
                                {project.tech.map((tech, idx) => {
                                    return (
                                        <li className="flex flex-row items-center justify-start space-x-2">
                                            <p className="text-left text-sm text-black dark:text-neutral-400 font-light">
                                                {tech}
                                            </p>


                                            {idx < project.tech.length - 1 ?
                                                <span className="text-left text-sm text-black dark:text-neutral-400 font-light">·</span>
                                                :
                                                <></>
                                            }
                                        </li>
                                    )
                                })}
                            </ul>

                        </li>
                    )
                })}
            </ul>

        </div>
    )
}