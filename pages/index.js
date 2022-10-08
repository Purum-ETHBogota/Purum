import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* This is the Head of the App */}
      <Head>
        <title>Purum</title>
        <meta name="description" content="Get money by capturing CO2 with your lands." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Here ends the Head of the App */}

      {/* Here starts the App  */}
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Purum App</h1>

        <p className={styles.description}>
          Get money by capturing CO2 with your lands.
        </p>
      </main>
      {/* Here ends the App */}
    </div>
  );
}
