import { useAccount } from "@web3modal/react";
import Image from "next/image";
import styles from "../styles/Collection.module.css";

export default function Second({ handleNextStep }) {
  const randomizer = Math.trunc(Math.random() * 10);
  const { address } = useAccount();

  const currentFunds = 0;

  const showWallet = () => {
    console.log("wallet is ", address);
  };

  const handleRedeemTokens = () => {
    console.log('reedemed tokens');
  }

  const truncatedAddress = `${address.slice(0, 5)}…${address.slice(-3)}`;

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.wallet} onClick={showWallet}>
          <div className={styles.avatar}>
            <Image
              src={`/assets/icons/${randomizer}.png`}
              alt="Random icon"
              width={50}
              height={50}
            />
          </div>
        </button>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>My RegeNFT</h2>
          <h3 className={styles.address}>{truncatedAddress}</h3>
          <div className={styles.nftData}>
            <Image
              className={styles.image}
              src="/assets/imageNFTSample.jpeg"
              width={243}
              height={231}
              alt="image sample"
            />
            <div className={styles.data}>
              <span className={styles.attribute}>Total area:</span>
              <span className={styles.value}>200 ha</span>
            </div>
            <div className={styles.data}>
              <span className={styles.attribute}>Intervined:</span>
              <span className={styles.value}>31%</span>
            </div>
            <div className={styles.data}>
              <span className={styles.attribute}>Restoring:</span>
              <span className={styles.value}>69%</span>
            </div>
            <div className={styles.data}>
              <span className={styles.attribute}>Certified:</span>
              <span className={styles.value}>Yes</span>
            </div>
          </div>
          <h2 className={styles.title}>Your earnings</h2>
          <h3 className={styles.address}>{`1.92 TCO2/week`}</h3>
          <button
            onClick={handleRedeemTokens}
            disabled={currentFunds ? false : true}
            className={styles.pledgeButton}
          >
            <span>Redeem<br />{`$12.00`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
