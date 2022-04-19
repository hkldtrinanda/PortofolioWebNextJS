import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import MetaTags from "@/components/MetaTags";

const metaData = {
    title: "Portofolio Website Hkldtrinanda",
    description: "Portofolio Website Hkldtrinanda",
    url: "https://www.hkldtrinanda.works",
    image: "https://www.example.com/image.jpg",
    themeColor: "#ffffff",
    keywords: "key1, key2, key3, key4, key5, key6",
    author: "Haikal Danung Trinanda",
    charSet: "utf-8",
    language: "English",
    icons: [
        {
            src: "/favicon.ico",
            sizes: "32x32",
            type: "image/ico",
        },
    ],
};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <MetaTags metaData={metaData} />
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
