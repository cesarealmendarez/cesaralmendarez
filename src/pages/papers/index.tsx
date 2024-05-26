import Link from "next/link";

import { papers } from "@/lib/utilities";
import { Banknote, SigmaSquare } from "lucide-react";
import { useRouter } from "next/router";

export default function Papers() {
    const router = useRouter();

    return (
        <div className="mt-6 flex w-full flex-col items-start justify-start space-y-6">
            <p className="text-left text-sm font-light text-white">
                Learning and sharing about subjects I care about. Some stuff might make sense, others not so much.
            </p>

            <ul className="flex w-full flex-col items-start justify-start border-t-[0.5px] border-neutral-800">
                {/* <li
                    key="automata-theory"
                    className="flex w-full flex-col items-start justify-start space-y-4 border-t-[0.5px] border-neutral-800 px-0 py-4"
                >
                    <div className="w-full flex flex-row items-center justify-start space-x-2">
                        <SigmaSquare className="text-white" size={15} />
                        <p className="flex text-left text-sm font-light text-white">
                            Automata Theory
                        </p>
                    </div>

                    <ul className="flex w-full flex-col items-start justify-start space-y-2">
                        {papers.filter((paper) => paper.topic == "Automata Theory").map((paper, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className="flex flex-wrap space-x-2"
                                >

                                    <button onClick={() => { router.push(`/papers/${paper.link}`, undefined, { shallow: true }) }} className="flex text-wrap">
                                        <p className="text-left text-sm text-neutral-400 font-light">{paper.readTimeMinutes} min - <span className="text-white underline">{paper.title}</span></p>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </li>

                <li
                    key="finance"
                    className="flex w-full flex-col items-start justify-start space-y-2 border-t-[0.5px] border-neutral-800 px-0 py-4"
                >
                    <div className="w-full flex flex-row items-center justify-start space-x-2">
                        <Banknote className="text-white" size={15} />
                        <p className="flex text-left text-sm font-light text-white">
                            Finance
                        </p>
                    </div>

                    <ul className="flex w-full flex-col items-start justify-start space-y-2">
                        {papers.filter((paper) => paper.topic == "Finance").map((paper, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className="flex flex-wrap space-x-2"
                                >

                                    <button onClick={() => { }} className="flex text-wrap">
                                        <p className="text-left text-sm text-neutral-400 font-light">{paper.readTimeMinutes} min - <span className="text-white underline">{paper.title}</span></p>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </li> */}
            </ul>
        </div>
    );
}
