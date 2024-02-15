import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import Index from ".";
import Projects from "./projects";
import Papers from "./papers";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { Providers } from "@/lib/providers";

export default function App({ Component, pageProps }: AppProps) {
    let router = useRouter();

    return (
        <>
            <Head>
                {(() => {
                    switch (router.pathname) {
                        case "/":
                            return <title>Cesar Almendarez</title>;
                        case "/projects":
                            return <title>Cesar's Projects</title>;
                    }
                })()}
            </Head>

            <Providers>
                <div className="h-screen bg-black">
                    <div className="mx-auto max-w-7xl px-0">
                        <div className="mx-auto h-screen max-w-lg px-8 pt-24 md:px-12">
                            <NavigationBar />

                            {(() => {
                                switch (router.pathname) {
                                    case "/":
                                        return <Index />;
                                    case "/projects":
                                        return <Projects />;
                                    case "/papers":
                                        return <Papers />;
                                }
                            })()}
                        </div>
                    </div>

                    <Footer />
                </div>
            </Providers>
        </>
    );
}
