/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WALLET_CONNECT_ID: 'd6a05666a5858360215ebc4bee76a53d',
    WALLET_PRIVATE_KEY: '31f90a257dd97f542146da3ebc1482b960d2d1a2bab89861c32f114f0058dda4',
    API_URL_RPC: 'https://polygon-mumbai.gateway.pokt.network/v1/lb/a08400be98c99d60764fbb63',
    CREATE_NFT_CONTRACT: '0xa458E6C66543c6CE3b9275BB91F9cDA0240E72d9',
    STREAM_PRIVATE_KEY: 'a3ee9d3c40e7c2b6b9ee2d5910b9bdbe3635af18c32aac3a7d3122d17bf48ad1',
  }
}

module.exports = nextConfig
