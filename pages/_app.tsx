import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { Syne } from "next/font/google";

// const syne = Syne({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={syne.className}>
    <Component {...pageProps} />
    // </main>
  );
}
