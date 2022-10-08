import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount, useDisconnect } from "@web3modal/react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const { isConnected } = useAccount();
  const disconnect = useDisconnect();

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState();
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowWidth;
  };

  console.log("useWindowDimensiosn ", useWindowWidth());

  if (useWindowWidth() > 700) {
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
          <li className={styles.menuItem}>
            <Link href="/hash">
              <a>Create Hash</a>
            </Link>
          </li>
          {isConnected && (
            <button onClick={disconnect} className={styles.menuLogout}>
              Disconnect
            </button>
          )}
        </ul>
      </header>
    );
  }

  return null
}
