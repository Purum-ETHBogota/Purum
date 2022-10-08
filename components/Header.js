import Link from "next/link";
import { useAccount, useDisconnect } from "@web3modal/react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { isConnected } = useAccount();
  const disconnect = useDisconnect();

  return (
    <header>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/pledge">
            <a>Pledge</a>
          </Link>
        </li>
        {isConnected && (
          <button onClick={disconnect} className={styles.menuLogout}>Disconnect</button>
        )}
      </ul>
    </header>
  );
}
