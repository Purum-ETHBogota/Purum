const {
  frontEndContractsFile,
  frontEndAbiLocation,
} = require('../helper-hardhat-config')
require('dotenv').config()
const fs = require('fs')
const { network } = require('hardhat')

module.exports = async () => {
  if (process.env.UPDATE_FRONT_END) {
    console.log('Writing abis...')
    await updateAbi()
    console.log('abis written!')
  }
}

async function updateAbi() {
  const factoryNFTPurum = await ethers.getContract('FactoryNFTPurum')
  fs.writeFileSync(
    `${frontEndAbiLocation}FactoryNFTPurum.json`,
    factoryNFTPurum.interface.format(ethers.utils.FormatTypes.json)
  )

  const purumNFT = await ethers.getContract('PurumNFT')
  fs.writeFileSync(
    `${frontEndAbiLocation}PurumNFT.json`,
    purumNFT.interface.format(ethers.utils.FormatTypes.json)
  )

  const purumSuperToken = await ethers.getContract('PurumSuperToken')
  fs.writeFileSync(
    `${frontEndAbiLocation}PurumSuperToken.json`,
    purumSuperToken.interface.format(ethers.utils.FormatTypes.json)
  )
}

module.exports.tags = ['all', 'frontend']
