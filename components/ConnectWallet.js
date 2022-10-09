import { useState, useEffect, useRef } from 'react'; 
import MetaMaskOnboarding from '@metamask/onboarding';
import styles from "../styles/ConnectWallet.module.css";

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect your wallet!';
const CONNECTED_TEXT = 'Connected';

export default function ConnectWallet({ setHasConnected }) {
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const onboarding = useRef();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText(CONNECTED_TEXT);
        setDisabled(true);
        onboarding.current.stopOnboarding();
        setHasConnected(true);
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [accounts]);

  useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(handleNewAccounts);
      window.ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        window.ethereum.removeListener('accountsChanged', handleNewAccounts);
      };
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  };

  return (
    <main>
      <div className={styles.background} />
      <div className={styles.container}>
        <h2 className={styles.tagline}>
          Restore your land <br /> -earn tokens
        </h2>
        <button className={styles.connectButton} disabled={isDisabled} onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </main>
  );
}
