
import { Framework } from '@superfluid-finance/sdk-core'
import { WorldIDWidget } from "@worldcoin/id";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/PledgeForm.module.css";
import { ethers } from "ethers";
import Link from 'next/link';

// Usage
export default function Third({ handleNextStep }) {
  const [hash, setHash] = useState("");
  const [done, setDone] = useState(false);
  
  const web3 = new ethers.providers.JsonRpcProvider(process.env.API_URL_RPC, 80001);
  const signer = web3.getSigner();

  const abi = [{"type":"event","anonymous":false,"name":"NFTCreated","inputs":[{"type":"address","name":"NFTAddress","indexed":true}]},{"type":"function","name":"createNFT","constant":false,"payable":false,"inputs":[],"outputs":[]},{"type":"function","name":"getLinkFromNFTS","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"_index"}],"outputs":[]},{"type":"function","name":"getTotalNFTS","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256","name":"count"}]},{"type":"function","name":"nftsArray","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256"}],"outputs":[{"type":"address"}]}];
  
  
  const CreateNFTContract = new ethers.Contract(process.env.CREATE_NFT_CONTRACT, abi, signer)

  async function createNFT() {
    if (typeof window.ethereum !== 'undefined') {
      //We are going to need:
      //provider/ connection to the blockchain
      //signer / wallet / someone with gas
      // contract we are interacting with
      // ABI & Address
  
      const provider = new ethers.providers.Web3Provider(window.ethereum)
  
      const signer = provider.getSigner()
      console.log(signer)
      const contract = new ethers.Contract(process.env.CREATE_NFT_CONTRACT, abi, signer)
  
      const startStream = async () => {
        const provider = new ethers.providers.AlchemyProvider(
          'maticmum',
          'iELrSLdjVmjGrLjepAHOJFXV8Lyeu_Mb'
        )
        
        const sf = await Framework.create({
          chainId: 80001,
          provider,
        })
        
        // Write operation example
        const signer = sf.createSigner({
          privateKey: process.env.STREAM_PRIVATE_KEY,
          provider,
        })

        const createFlowOperation = sf.cfaV1.createFlow({
          sender: '0x8B3cd113C919272969b211a935c5d2B6410dB235',
          receiver: '0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f',
          superToken: '0x27DD46923B826153f1D0fd54B99cFC8211Df6E02',
          flowRate: '10000000000',
        })
        const txnResponse = await createFlowOperation.exec(signer)
        const txnReceipt = await txnResponse.wait()
        // Transaction Complete when code reaches here
        setDone(true);
      }

      const listenForTransactionMine = (transactionResponse, provider) => {
        console.log(`Mining ${transactionResponse.hash}...`);
        return new Promise((resolve, reject) => {
          provider.once(transactionResponse.hash, (transactionReceipt) => {
            // startStream();
            setDone(true);
            resolve();
          });
        });
      };

      try {
        const txResponse = await contract.createNFT()
        await listenForTransactionMine(txResponse, provider)
        await console.log('Done!')
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  const handleGenerateNFT = async () => {
    await createNFT()
  };

  const handleBack = () => {
    handleNextStep(1);
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
            src="/assets/icons/mountain.png"
            alt="Random icon"
            width={50}
            height={50}
          />
        </div>
        <h2 className={styles.title}>{"Let's verify you"}</h2>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>Prove your everything!</label>
          <WorldIDWidget
            actionId="0xABB70f7F39035586Da57B3c8136035f87AC0d2Aa"
            signal="my_signal"
            enableTelemetry
            onSuccess={(verificationResponse) =>
              setHash(verificationResponse.nullifier_hash)
            } // you'll actually want to pass the proof to the API or your smart contract
            onError={(error) => console.error(error)}
          />
        </div>
      </div>
      {!done ? (
      <button
        onClick={handleGenerateNFT}
        disabled={hash ? false : true}
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
      ) : (
        <Link href='/collection'>
          <button  className={styles.pledgeButton}>
            Ver mi nuevo NFT
          </button>
        </Link>
      )}
    </div>
  );
}
