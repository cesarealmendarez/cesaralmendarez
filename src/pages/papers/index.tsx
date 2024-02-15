import Link from "next/link";

import { papers } from "@/lib/utilities";

export default function Papers() {
    return (
        <div className="mt-6 flex w-full flex-col items-start justify-start space-y-6">
            <p className="text-left text-sm font-light text-white">
                Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec
                ullamcorper sit amet risus nullam eget felis eget nunc
            </p>

            <ul className="flex w-full flex-col items-start justify-start">
                <li
                    key="automata-theory"
                    className="flex w-full flex-col items-start justify-start space-y-2 border-t-[0.5px] border-neutral-800 px-0 py-4"
                >
                    <p className="flex text-left text-sm font-light text-white">
                        Automata Theory
                    </p>

                    <ul className="flex w-full flex-col items-start justify-start space-y-2">
                        {papers
                            .filter(
                                (paper) => paper.subject == "automata-theory",
                            )
                            .map((paper, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="flex flex-row items-center justify-start space-x-2"
                                    >
                                        <Link href={paper.link} target="_blank">
                                            <p className="text-left text-sm font-light text-neutral-400 underline transition-colors duration-300 hover:text-neutral-300">
                                                {paper.title}
                                            </p>
                                        </Link>

                                        <p className="text-left text-sm font-light text-neutral-400">
                                            {" "}
                                            - {paper.readTimeMin} min
                                        </p>
                                    </li>
                                );
                            })}
                    </ul>
                </li>

                <li
                    key="entrepreneurship"
                    className="flex w-full flex-col items-start justify-start space-y-2 border-t-[0.5px] border-neutral-800 px-0 py-4"
                >
                    <p className="flex text-left text-sm font-light text-white">
                        Entrepreneurship
                    </p>

                    <ul className="flex w-full flex-col items-start justify-start space-y-2">
                        {papers
                            .filter(
                                (paper) => paper.subject == "entrepreneurship",
                            )
                            .map((paper, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="flex flex-row items-center justify-start space-x-2"
                                    >
                                        <Link href={paper.link} target="_blank">
                                            <p className="text-left text-sm font-light text-neutral-400 underline transition-colors duration-300 hover:text-neutral-300">
                                                {paper.title}
                                            </p>
                                        </Link>

                                        <p className="text-left text-sm font-light text-neutral-400">
                                            {" "}
                                            - {paper.readTimeMin} min
                                        </p>
                                    </li>
                                );
                            })}
                    </ul>
                </li>

                <li
                    key="operating-systems"
                    className="flex w-full flex-col items-start justify-start space-y-2 border-t-[0.5px] border-neutral-800 px-0 py-4"
                >
                    <p className="flex text-left text-sm font-light text-white">
                        Operating Systems
                    </p>

                    <ul className="flex w-full flex-col items-start justify-start space-y-2">
                        {papers
                            .filter(
                                (paper) => paper.subject == "operating-systems",
                            )
                            .map((paper, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="flex flex-row items-center justify-start space-x-2"
                                    >
                                        <Link href={paper.link} target="_blank">
                                            <p className="text-left text-sm font-light text-neutral-400 underline transition-colors duration-300 hover:text-neutral-300">
                                                {paper.title}
                                            </p>
                                        </Link>

                                        <p className="text-left text-sm font-light text-neutral-400">
                                            {" "}
                                            - {paper.readTimeMin} min
                                        </p>
                                    </li>
                                );
                            })}
                    </ul>
                </li>
            </ul>
        </div>
    );
}
