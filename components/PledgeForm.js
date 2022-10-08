import styles from "../styles/PledgeForm.module.css";
import { useState } from "react";

export default function PledgeForm() {
  const [coorOne, setCoorOne] = useState("");
  const [coorTwo, setCoorTwo] = useState("");
  const [coorThree, setCoorThree] = useState("");
  const [hash, setHash] = useState("");

  const handleChange = (setter, e) => {
    setter(e.target.value);
  };

  console.log("coorOne ", coorOne);
  return (
    <main className={styles.container}>
      <h2>Let&apos;s start with your Pledge!!</h2>
      <input
        className={styles.inputCoordinate}
        onChange={(e) => handleChange(setCoorOne, e)}
        value={coorOne}
        placeholder="Put your first coordinate"
      />
      <input
        className={styles.inputCoordinate}
        onChange={(e) => handleChange(setCoorTwo, e)}
        value={coorTwo}
        placeholder="Put your second coordinate"
      />
      <input
        className={styles.inputCoordinate}
        onChange={(e) => handleChange(setCoorThree, e)}
        value={coorThree}
        placeholder="Put your third coordinate"
      />
      <input
        className={styles.inputCoordinate}
        onChange={(e) => handleChange(setHash, e)}
        value={hash}
        placeholder="Please put your ownership hash"
      />

      <button
        className={styles.pledgeButton}
        onClick={console.log("You clicked it!")}
      >
        Pledge it!
      </button>
    </main>
  );
}
