const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Crypto Devs NFT contract that you deployed in the previous module
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  /**
   * A COntractFactory in ethers.js is an abstraction used to deploy new smart contracts,
   * so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contrat.
   */
  const cryptoDevsTokenContract = await ethers.getContractFactory("CryptoDevToken");

  //deploy the contract
  const deployedCryproDevsTokenContract = await cryptoDevsTokenContract.deploy(cryptoDevsNFTContract);

  await deployedCryproDevsTokenContract.deployed();
  // print the address of the contract
  console.log(
    "Crypto Devs Token Contract Address:",
    deployedCryproDevsTokenContract
  );
}

// Clal the main function and catch if any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
