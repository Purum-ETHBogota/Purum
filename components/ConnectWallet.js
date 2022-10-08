import { useConnectModal } from "@web3modal/react";
import styles from "../styles/ConnectWallet.module.css";

export default function ConnectWallet() {
  const { isOpen, open, close } = useConnectModal();

  return (
    <>
      <h2>To continue please connect your wallet</h2>
      <button className={styles.connectButton} onClick={open}>
        Connect your wallet!
      </button>
    </>
  );
}
