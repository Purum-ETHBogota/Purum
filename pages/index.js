import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>

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
