import "@/styles/globals.css";
import Head from "next/head";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { papers } from "@/lib/utilities";

export default function App({ Component, pageProps }: AppProps) {
    let router = useRouter();

    useEffect(() => {
        if (router.pathname as string == "/") {
        } else if (router.pathname as string == "/projects") {
        } else if (router.pathname as string == "/papers") {
        } else if ((router.pathname as string).startsWith("/papers/[slug]")) {
        } else { router.push("/"); }
    }, []);

    return (
        <>
            <Head>
                {(() => {
                    if (router.pathname as string == "/") {
                        return <title>Cesar Almendarez</title>;
                    } else if (router.pathname as string == "/projects") {
                        return <title>Cesar's Projects</title>;
                    } else if (router.pathname as string == "/papers") {
                        return <title>Cesar's Papers</title>;
                    } else if ((router.pathname as string).startsWith("/papers/[slug]")) {
                        return <title>{papers.find(paper => paper.link === (router.query.slug as string))?.title} - Cesar Almendarez</title>;
                    }
                })()}
            </Head>

            <div className="min-h-screen flex flex-col bg-black">
                <div className="min-h-screen flex grow mx-auto max-w-7xl px-0">
                    <div className="mx-auto md:max-w-xl px-8 pt-24 md:px-12">
                        <NavigationBar />
                        <Component {...pageProps} />
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
