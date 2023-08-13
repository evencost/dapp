import { ethers } from "hardhat";

async function main() {
  const [deployer, user1] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("User1 address:", user1.address);

  const contract = await ethers.deployContract("AutoInvest");
  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();

  console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
