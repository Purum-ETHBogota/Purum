/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WALLET_CONNECT_ID: 'd6a05666a5858360215ebc4bee76a53d',
    WALLET_PRIVATE_KEY: '31f90a257dd97f542146da3ebc1482b960d2d1a2bab89861c32f114f0058dda4',
    API_URL_RPC: 'https://polygon-mumbai.gateway.pokt.network/v1/lb/a08400be98c99d60764fbb63',
    CREATE_NFT_CONTRACT: '0xa458E6C66543c6CE3b9275BB91F9cDA0240E72d9'
  }
}

module.exports = nextConfig
