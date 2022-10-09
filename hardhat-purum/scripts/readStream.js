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

// Read example
const flowInfo = await sf.cfaV1.getFlow({
  superToken: '0x24029add6DF24AE0dC654b4efD8db5434e4C83a3',
  sender: '0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f',
  receiver: '0x8833C105C88e4896dB26f70553837C9FA660B43D',
  providerOrSigner: provider,
})
console.log('flowInfo', flowInfo)
// Transaction Complete when code reaches here
