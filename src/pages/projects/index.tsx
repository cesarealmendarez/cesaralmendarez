import Link from "next/link";

import { projects } from "@/lib/utilities";

export default function Projects() {
    return (
        <div className="mt-6 flex w-full flex-col items-start justify-start space-y-6">
            <p className="text-left text-sm font-light text-white">
                A collection of my side projects, each created to expand my
                skill set across a diverse range of tech, all while building
                something cool.
            </p>

            <ul className="w-full">
                {projects.map((project, idx) => {
                    return (
                        <li
                            key={idx}
                            className="flex w-full flex-col items-start justify-start space-y-2 border-t-[0.5px] border-neutral-800 px-0 py-4"
                        >
                            <div className="flex w-full flex-row items-center justify-start">
                                <Link
                                    href={project.links[0].url}
                                    target="_blank"
                                >
                                    <p className="flex text-left text-sm font-light text-white">
                                        {project.name}
                                    </p>
                                </Link>

                                <ul className="flex grow flex-row items-center justify-end space-x-4">
                                    {project.links.map((link, idx) => {
                                        return (
                                            <li key={idx}>
                                                <Link
                                                    href={link.url}
                                                    target="_blank"
                                                >
                                                    {link.icon}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="flex flex-col items-start justify-start">
                                <Link
                                    href={project.links[0].url}
                                    target="_blank"
                                >
                                    <p className="text-left text-sm font-light text-neutral-400">
                                        {project.description}
                                    </p>
                                </Link>
                            </div>

                            <ul className="flex flex-row items-center justify-start space-x-2">
                                {project.tech.map((tech, idx) => {
                                    return (
                                        <li className="flex flex-row items-center justify-start space-x-2">
                                            <p className="text-left text-sm font-light text-neutral-400">
                                                {tech}
                                            </p>

                                            {idx < project.tech.length - 1 ? (
                                                <span className="text-left text-sm font-light text-neutral-400">
                                                    ·
                                                </span>
                                            ) : (
                                                <></>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
