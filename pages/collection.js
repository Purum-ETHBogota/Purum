import { useState } from 'react';
import { Framework } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'
import { useAccount } from "@web3modal/react";
import Image from "next/image";
import styles from "../styles/Collection.module.css";

export default function Collection() {
  const [flowDeposit, setFlowDeposit] = useState(0)
  const randomizer = Math.trunc(Math.random() * 10);
  const { address } = useAccount();

  const currentFunds = 0;

  const showWallet = () => {
    console.log("wallet is ", address);
  };

  const handleRedeemTokens = () => {
    console.log('reedemed tokens');
  }

  const provider = new ethers.providers.AlchemyProvider(
    'maticmum',
    'iELrSLdjVmjGrLjepAHOJFXV8Lyeu_Mb'
  )

  const checkFluid = async () => { 
    const sf = await Framework.create({
      chainId: 80001,
      provider,
    })
    
    // Read example
    const flowInfo = await sf.cfaV1.getFlow({
      superToken: '0x27DD46923B826153f1D0fd54B99cFC8211Df6E02',
      sender: '0x8B3cd113C919272969b211a935c5d2B6410dB235',
      receiver: '0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f',
      providerOrSigner: provider,
    })
    
    setFlowDeposit(flowInfo.deposit)
  }
  checkFluid();

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
            <span>Redeem<br />{`$${flowDeposit/100}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
