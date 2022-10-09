const { network, ethers } = require('hardhat')
const {
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} = require('../helper-hardhat-config')
const { verify } = require('../utils/verify')

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const waitBlockConfirmations = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS

  log('----------------------------------------------------')
  const args = []
  const superERC20 = await deploy('PurumSuperToken', {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: waitBlockConfirmations,
  })
  //   const vrfCoordinatorV2Mock = await ethers.getContract('VRFCoordinatorV2Mock')
  //const purumSuper = await ethers.getContract('PurumSuperToken')
  //const supply = ethers.utils.parseEther('10')
  //let test = await purumSuper.dum(supply)
  // Verify the deployment

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log('Verifying...')
    await verify(superERC20.address, args)
  }
  log('----------------------------------------------------')
}

module.exports.tags = ['all', 'super', 'contracts']
