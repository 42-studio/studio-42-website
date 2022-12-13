import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <span className={styles.span}>
          <span>website under construction</span>🚧
        </span>

        <div className={styles.stack} style={{ ["--stacks" as any]: 3 }}>
          <span style={{ ["--index" as any]: 0 }}>
            <img src="/assets/images/Studio_42.svg" alt="Studio 42"></img>
          </span>
          <span style={{ ["--index" as any]: 1 }}>
            <img src="/assets/images/Studio_42.svg" alt="Studio 42"></img>
          </span>
          <span style={{ ["--index" as any]: 2 }}>
            <img src="/assets/images/Studio_42.svg" alt="Studio 42"></img>
          </span>
        </div>

        <div className={styles.email}>
          a web design and development studio, lets work together<br></br>
          <a href="mailto:hello@42.studio">hello@42.studio</a>
        </div>
      </main>
      <div className={styles.cover}></div>
    </div>
  );
}
