import { useConnectModal } from "@web3modal/react";
import styles from "../styles/ConnectWallet.module.css";

export default function ConnectWallet() {
  const { isOpen, open, close } = useConnectModal();

  return (
    <main>
      <div className={styles.background} />
      <div className={styles.bgBlur} />
      <div className={styles.bgFilter} />

      <div className={styles.container}>
        <h2 className={styles.tagline}>
          Restore your land <br /> -earn tokens
        </h2>
        <h1 className={styles.title}>Purum</h1>
        <button className={styles.connectButton} onClick={open}>
          Connect your wallet!
        </button>
      </div>
    </main>
  );
}
