import Image from "next/image";
import styles from "../../styles/PledgeForm.module.css";

export default function First({ handleNextStep }) {
  const address = window && window.ethereum && window.ethereum.selectedAddress;

  const randomizer = Math.trunc(Math.random() * 10);

  const truncatedAddress = `${address.slice(0, 5)}…${address.slice(-3)}`;

  const handleBack = () => {
    disconnect();
  };

  return (
    <div className={styles.step}>
      <div>
        <button className={styles.backButton} onClick={handleBack}>
          <Image
            src="/assets/icons/arrow.png"
            alt="arrow back"
            width={16}
            height={16}
          />
        </button>
        <div className={styles.avatar}>
          <Image
            src={`/assets/icons/${randomizer}.png`}
            alt="Random icon"
            width={50}
            height={50}
          />
        </div>
        <h3 className={styles.address}>{truncatedAddress}</h3>
      </div>
      <button onClick={() => handleNextStep(1)} className={styles.pledgeButton}>
        <span style={{ marginRight: "20px" }}>{"Pledge your land  "}</span>
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
