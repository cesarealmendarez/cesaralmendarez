import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Timer, Calendar, UserCircleIcon, ChevronLeft } from "lucide-react";
import { papers } from "@/lib/utilities";

export default function Paper() {
    const [paper, setPaper] = useState<Paper | null>(null);

    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const paper = papers.find(paper => paper.link === (router.query.slug as string));

            if (paper) {
                setPaper(paper);
            } else {
                router.push("/papers");
            }
        }
    }, [router]);

    if (paper) {
        return (
            <div className="mt-6 flex w-full flex-col items-start justify-start space-y-6">
                <div className="w-full flex flex-col items-start justify-start space-y-4">
                    <button onClick={() => { router.push("/papers", undefined, { shallow: true }) }} className="w-full flex flex-row items-center justify-start space-x-2">
                        <ChevronLeft size={17} className="text-white" />
                        <h1 className="text-left text-sm font-light text-white">
                            {paper.title}
                        </h1>
                    </button>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 border-b-[0.5px] border-neutral-800 pb-4">
                        <div className="w-auto flex flex-row items-center justify-start gap-2">
                            <>
                                {paper.icon}
                            </>
                            <p className="text-left text-xs text-neutral-400 font-light">
                                {paper.topic}
                            </p>
                        </div>
                        <div className="w-auto flex flex-row items-center justify-start gap-2">
                            <Calendar size={15} className="text-neutral-400" />
                            <p className="text-left text-xs text-neutral-400 font-light">
                                {paper.publishedTimestamp}
                            </p>
                        </div>
                        <div className="w-auto flex flex-row items-center justify-start gap-2">
                            <Timer size={15} className="text-neutral-400" />
                            <p className="text-left text-xs text-neutral-400 font-light">
                                {paper.readTimeMinutes} minute read
                            </p>
                        </div>
                        <div className="w-auto flex flex-row items-center justify-start gap-2">
                            <UserCircleIcon size={15} className="text-neutral-400" />
                            <p className="text-left text-xs text-neutral-400 font-light">
                                {paper.author}
                            </p>
                        </div>
                    </div>

                    <>
                        {paper.content}
                    </>
                </div>
            </div>
        );
    } else { return (<></>); }
};