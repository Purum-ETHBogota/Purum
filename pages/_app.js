import { Web3Modal } from "@web3modal/react";
import "../styles/globals.css";

const config = {
  projectId: process.env.WALLET_CONNECT_ID,
  theme: "light",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Web3Modal config={config} />
    </>
  );
}

export default MyApp;
