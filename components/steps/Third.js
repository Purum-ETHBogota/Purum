import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/PledgeForm.module.css";

export default function Third({ handleNextStep }) {
  const [hash, setHash] = useState("");
  const handleChange = (e) => {
    setHash(e.target.value);
  };

  const handleGenerateNFT = () => {
    console.log("I generated it!");
  };

  return (
    <div className={styles.step}>
      <div>
        <div className={styles.avatar}>
          <Image
            src={`/assets/icons/mountain.png`}
            alt="Random icon"
            width={50}
            height={50}
          />
        </div>
        <h2 className={styles.title}>Add your key</h2>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Key hash</label>
          <input
            className={styles.inputCoordinate}
            value={hash}
            onChange={handleChange}
            placeholder="0x87A...84A9"
          />
        </div>
      </div>
      <button
        onClick={handleGenerateNFT}
        disabled={Boolean(hash)}
        className={styles.pledgeButton}
      >
        <span style={{ marginRight: "20px" }}>{"Pledge"}</span>
        <svg
          width="53"
          height="21"
          viewBox="0 0 53 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.7012 19.8036C42.2917 20.2067 41.6471 20.2067 41.2376 19.8036C40.842 19.414 40.842 18.7657 41.2376 18.377L48.6586 11.0696L1.03916 11.0696C0.468312 11.0696 -9.07237e-05 10.6228 -9.06746e-05 10.0607C-9.06254e-05 9.49866 0.468312 9.03734 1.03916 9.03734L48.6586 9.03734L41.2376 1.74359C40.842 1.34035 40.842 0.69115 41.2376 0.302436C41.6471 -0.100688 42.2917 -0.100688 42.7012 0.302436L51.8791 9.33971C52.2747 9.72932 52.2747 10.3776 51.8791 10.7663L42.7012 19.8036Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
