import { useAccount, useDisconnect } from "@web3modal/react";
import ConnectWallet from "../components/ConnectWallet";
import PledgeForm from '../components/PledgeForm';
import Header from "../components/Header";
import styles from "../styles/Pledge.module.css";

export default function Pledge() {
  const { address, isConnected } = useAccount();
  const disconnect = useDisconnect();

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.pledgeWrapper}>
        {isConnected ? (
            <PledgeForm />
        ) : (
            <ConnectWallet />
        )}
      </main>
    </div>
  );
}
