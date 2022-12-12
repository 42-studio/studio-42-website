import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Studio 42</h1>
      <span className={styles.span}>🚧 Under construction 🚧</span>
      <a href="mailto:hello@42.studio">hello@42.studio</a>
    </main>
  );
}
