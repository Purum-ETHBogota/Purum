import { useState } from "react";
import ConnectWallet from "../components/ConnectWallet";
import PledgeForm from '../components/PledgeForm';  
import Header from "../components/Header";
import styles from "../styles/Pledge.module.css";

export default function Pledge() {
    const [hasConnected, setHasConnected] = useState(false);
    return (
      <div className={styles.container}>
      <Header />
      <main className={styles.pledgeWrapper}>
        {hasConnected ? (
          <PledgeForm />
          ) : (
            <ConnectWallet setHasConnected={setHasConnected} />
            )}
      </main>
    </div>
  );
}
