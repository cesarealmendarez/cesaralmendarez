import Link from "next/link";
import { useRouter } from "next/router";
import { navigationLinks } from "@/lib/utilities";

export default function NavigationBar() {
    let router = useRouter();

    return (
        <nav className="w-full flex flex-row items-center justify-start">
            <ul className="w-full flex flex-row grow items-center justify-start space-x-6">
                {navigationLinks.map((link, idx) => {
                    return (
                        <li key={idx}>
                            <Link href={link.url} target={link.target}>
                                {router.pathname == link.url || (link.url == "/papers" && (router.pathname as string).startsWith("/papers/[slug]")) ? (
                                    <p className="text-left text-sm text-white font-light transition-colors duration-300">
                                        {link.name}
                                    </p>
                                ) : (
                                    <p className="text-left text-sm text-neutral-400 hover:text-neutral-300 font-light transition-colors duration-300">
                                        {link.name}
                                    </p>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}