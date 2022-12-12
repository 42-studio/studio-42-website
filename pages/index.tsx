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
          <span style={{ ["--index" as any]: 0 }}>Studio 42</span>
          <span style={{ ["--index" as any]: 1 }}>Studio 42</span>
          <span style={{ ["--index" as any]: 2 }}>Studio 42</span>
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
