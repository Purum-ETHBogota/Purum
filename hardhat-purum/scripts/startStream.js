import { Framework } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'

const provider = new ethers.providers.InfuraProvider(
  'maticmum',
  'ba3696de5517499bbe279073032b64bd'
)

const sf = await Framework.create({
  chainId: 80001,
  provider,
})

// Write operation example
const signer = sf.createSigner({
  privateKey:
    'a3ee9d3c40e7c2b6b9ee2d5910b9bdbe3635af18c32aac3a7d3122d17bf48ad1',
  provider,
})
const createFlowOperation = sf.cfaV1.createFlow({
  sender: '0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f',
  receiver: '0x8833C105C88e4896dB26f70553837C9FA660B43D',
  superToken: '0x24029add6DF24AE0dC654b4efD8db5434e4C83a3',
  flowRate: '1',
})
const txnResponse = await createFlowOperation.exec(signer)
const txnReceipt = await txnResponse.wait()
// Transaction Complete when code reaches here
console.log('success!')
