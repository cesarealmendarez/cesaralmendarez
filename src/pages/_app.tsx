import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import Index from ".";
import Projects from "./projects";
import Experience from "./experience";

import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import { Providers } from "@/lib/providers";

import { useTheme } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
    const { theme, setTheme } = useTheme();
    let router = useRouter();

    return (
        <>
            <Head>
                {(() => {
                    switch (router.pathname) {
                        case "/":
                            return (
                                <title>Cesar Almendarez</title>
                            );
                        case "/projects":
                            return (
                                <title>Cesar's Projects</title>
                            );
                    }
                })()}
            </Head>

            <Providers>
                <div className="h-screen bg-black">
                    <div className="max-w-7xl mx-auto px-0">
                        <div className="h-screen max-w-lg mx-auto px-8 md:px-12 pt-24">
                            <NavigationBar />

                            {(() => {
                                switch (router.pathname) {
                                    case "/":
                                        return (
                                            <Index />
                                        );
                                    case "/projects":
                                        return (
                                            <Projects />
                                        );
                                    case "/experience":
                                        return (
                                            <Experience />
                                        );
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