import "@/styles/globals.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Navbar />
            <Component {...pageProps} />
        </SessionProvider>
    );
}
