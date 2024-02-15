import Link from "next/link";
import { useRouter } from "next/router";

import { navigationLinks } from "@/lib/utilities";

export default function NavigationBar() {
    let router = useRouter();

    return (
        <div className="flex w-full flex-row items-center">
            <ul className="flex w-full grow flex-row items-center justify-start space-x-6">
                {navigationLinks.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={link.url} target={link.target}>
                                {router.pathname == link.url ? (
                                    <p className="text-left text-sm font-light text-white transition-colors duration-300">
                                        {link.name}
                                    </p>
                                ) : (
                                    <p className="text-left text-sm font-light text-neutral-400 transition-colors duration-300 hover:text-neutral-300">
                                        {link.name}
                                    </p>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
