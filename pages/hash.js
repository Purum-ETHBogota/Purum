import { WorldIDWidget } from "@worldcoin/id";
import styles from "../styles/Hash.module.css";
import React, { useState } from "react";
import md5 from "md5";
import copy from "copy-to-clipboard";
import InputMask from "react-input-mask";
import Header from "../components/Header";
import NoSSR from 'react-no-ssr';
import { CheckSubgraph } from '../components/hooks/CheckSubgraph';

export default function Hash() {
    const [coorOne, setCoorOne] = useState("");
    const [coorTwo, setCoorTwo] = useState("");
    const [coorThree, setCoorThree] = useState("");
    const [hKey, setHKey] = useState("");
    const [nulliHash, setNulliHash] = useState("");
    
    //first parameter is the nullihash and the second parameter is the hashKey. Created CheckSubgraph.js hook to make graphql query
    const {data, loading, error} = CheckSubgraph("0x0339861e70a9bdb6b01a88c7534a3332db915d3d06511b79a5724221a6958fbe", "0xa17b98909f3345285327e1d545063fdf09bb0adf7c773fc9cd8765dd66d1a847");

    if(!loading){
        if(data?.exampleEntities.length){
            //call Registration.sol contract
            console.log("Request successfully");
        }else{
            //coordinates belong to someone else
            console.log("Failed connection to Sub graph");
        }
      }

    const handleChange = (setter, e) => {
        setter(e.target.value);
    }
    
    const handleSubmit = (event) => {
        const secretKey = md5("PurumBogota");
        const hashKey = "0x" + md5(coorOne + coorTwo + coorThree) + secretKey;
        setHKey(hashKey);
        event.preventDefault();
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
            onChange={(e) => handleChange(setCoorOne, e)}
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
            onChange={(e) => handleChange(setCoorTwo, e)}
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
            onChange={(e) => handleChange(setCoorThree, e)}
            placeholder="Lat: 123.1234, Long: 123.1234"
            required
          />
        </label>
        <button className={styles.button} type="Submit">Create Hash</button>
        <NoSSR>
          <WorldIDWidget
            actionId="0xABB70f7F39035586Da57B3c8136035f87AC0d2Aa"
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) =>
              setNulliHash(verificationResponse.nullifier_hash)
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
