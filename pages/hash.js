import { WorldIDWidget } from "@worldcoin/id";
import styles from "../styles/Hash.module.css";
import React, { useState } from "react";
import md5 from "md5";
import copy from "copy-to-clipboard";
import InputMask from "react-input-mask";
import Header from "../components/Header";
import NoSSR from 'react-no-ssr';

export default function Hash() {
  const [coorOne, setCoorOne] = useState("");
  const [coorTwo, setCoorTwo] = useState("");
  const [coorThree, setCoorThree] = useState("");
  const [hKey, setHKey] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const secretKey = "PurumBogota";
    const hashKey = md5(coorOne + coorTwo + coorThree + secretKey);
    setHKey(hashKey);
    alert(
      "Your Hash key has been copied to your clipboard! \nThis is your hash key: " +
        hashKey
    );
    copy(hashKey);
  };

  return (
    <div className={styles.container}>
      <Header />
      <form className={styles.main} onSubmit={handleSubmit}>
        <h1 className={styles.header}>Create your Hash</h1>
        <label>
          <h3>Coordinate 1</h3>
          <InputMask
            className={styles.inputCoordinate}
            mask="999.9999, 999.9999"
            value={coorOne}
            onChange={(event) => setCoorOne(event.target.value)}
            placeholder="Lat: 123.1234, Long: 123.1234"
            required
          />
        </label>
        <label>
          <h3>Coordinate 2</h3>
          <InputMask
            className={styles.inputCoordinate}
            mask="999.9999, 999.9999"
            value={coorTwo}
            onChange={(event) => setCoorTwo(event.target.value)}
            placeholder="Lat: 123.1234, Long: 123.1234"
            required
          />
        </label>
        <label>
          <h3>Coordinate 3</h3>
          <InputMask
            className={styles.inputCoordinate}
            mask="999.9999, 999.9999"
            value={coorThree}
            onChange={(event) => setCoorThree(event.target.value)}
            placeholder="Lat: 123.1234, Long: 123.1234"
            required
          />
        </label>
        {/* <button className={styles.button} type="Submit">Create Hash</button> */}
        <NoSSR>
          <WorldIDWidget
            actionId="0xABB70f7F39035586Da57B3c8136035f87AC0d2Aa"
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) =>
              console.log(verificationResponse)
            } // you'll actually want to pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
          />
        </NoSSR>
        <label>
          <h3>Your Hash Key</h3>
          <input
            className={styles.inputCoordinate}
            value={hKey}
            placeholder="No Hashkey has been created"
            disabled
          />
        </label>
      </form>
    </div>
  );
}
