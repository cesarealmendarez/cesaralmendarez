import Link from "next/link"

import { socialLinks } from "@/lib/utilities"

export default function Index() {
    return (
        <div className="w-full flex flex-col items-start justify-start space-y-6 mt-6">

            <p className="text-left text-sm text-black dark:text-white font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>

            <p className="text-left text-sm text-black dark:text-white font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>

            <p className="text-left text-sm text-black dark:text-white font-light">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            </p>

            <ul className="flex flex-row items-center justify-start space-x-2">
                {socialLinks.map((link, idx) => {
                    return (
                        <li className="flex flex-row items-center justify-start space-x-2">
                            <Link href={link.url} target="_blank">
                                <p className="text-left text-sm text-black dark:text-white font-light underline">
                                    {link.name}
                                </p>
                            </Link>

                            {idx < socialLinks.length - 1 ?
                                <span className="text-left text-sm text-black dark:text-white font-light">·</span>
                                :
                                <></>
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}