import { Globe } from "lucide-react";

export default function Footer() {
    return (
        <div className="border-t-[0.5px] border-neutral-300 dark:border-neutral-800 py-6 ">
            <div className="max-w-7xl mx-auto px-0">
                <div className="max-w-lg mx-auto px-8 flex flex-row items-center">
                    <div className="flex flex-row grow items-center justify-start space-x-2">
                        <p className="text-left text-xs text-black dark:text-white font-light">
                            &copy;
                        </p>
                        <p className="text-left text-xs text-black dark:text-white font-light">
                            Cesar Almendarez
                        </p>
                    </div>

                    <div className="flex flex-row grow items-center justify-end">
                        <div className="flex flex-row items-center justify-end space-x-2">
                            <Globe size={12} strokeWidth={1.5} className="text-black dark:text-white" />
                            <p className="text-right text-xs text-black dark:text-white font-light">
                                Los Angeles, CA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}