import type { CSSProperties } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Studio ➃➁</title>
      </Head>
      <main className={styles.main}>
        <span className={styles.span}>
          <span>website under construction</span>🚧
        </span>

        <div className={styles.stack} style={{ "--stacks": 3 } as CSSProperties}>
          <span style={{ "--index": 0 } as CSSProperties}>
            <img
              className={styles.logo}
              src="/assets/images/Studio_42.svg"
              alt="Studio 42"
            />
          </span>
          <span style={{ "--index": 1 } as CSSProperties}>
            <img
              className={styles.logo}
              src="/assets/images/Studio_42.svg"
              alt="Studio 42"
            />
          </span>
          <span style={{ "--index": 2 } as CSSProperties}>
            <img
              className={styles.logo}
              src="/assets/images/Studio_42.svg"
              alt="Studio 42"
            />
          </span>
        </div>

        <div className={styles.email}>
          a web design and development studio, lets work together<br />
          <a href="mailto:hello@42.studio">hello@42.studio</a>
        </div>
      </main>
      <div className={styles.cover}></div>
    </div>
  );
}
