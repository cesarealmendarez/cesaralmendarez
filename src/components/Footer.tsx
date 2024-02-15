import { Globe } from "lucide-react";

export default function Footer() {
    return (
        <div className="border-t-[0.5px] border-neutral-800 py-6 ">
            <div className="mx-auto max-w-7xl px-0">
                <div className="mx-auto flex max-w-lg flex-row items-center px-8">
                    <div className="flex grow flex-row items-center justify-start space-x-2">
                        <p className="text-left text-xs font-light text-white">
                            &copy;
                        </p>
                        <p className="text-left text-xs font-light text-white">
                            Cesar Almendarez
                        </p>
                    </div>

                    <div className="flex grow flex-row items-center justify-end">
                        <div className="flex flex-row items-center justify-end space-x-2">
                            <Globe
                                size={12}
                                strokeWidth={1.5}
                                className="text-white"
                            />
                            <p className="text-right text-xs font-light text-white">
                                Los Angeles, CA
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
