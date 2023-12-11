import { useRouter } from "next/router";
import Link from "next/link";

import { navigationLinks } from "@/lib/utilities"

export default function NavigationBar() {
    let router = useRouter()

    return (
        <div className="w-full flex flex-row items-center">
            <ul className="w-full flex flex-row grow items-center justify-start space-x-6">
                {navigationLinks.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={link.url} target={link.target}>
                                {router.pathname == link.url ?
                                    <p className="text-left text-sm text-white font-light transition-colors duration-300">
                                        {link.name}
                                    </p>
                                    :
                                    <p className="text-left text-sm text-neutral-500 hover:text-neutral-400 font-light transition-colors duration-300">
                                        {link.name}
                                    </p>
                                }
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}