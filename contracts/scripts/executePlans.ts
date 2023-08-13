import { ethers } from "hardhat";

async function main() {
  const [, user1] = await ethers.getSigners();
  const contractAddress = "set me!";
  const contract = await ethers.getContractAt("AutoInvest", contractAddress);
  const DAI = await contract.DAI();
  const erc20 = await ethers.getContractAt("ERC20", DAI);
  const userBalanceBefore = await erc20.balanceOf(user1.address);
  console.debug("user1 dai balance after: ", userBalanceBefore.toString());
  const executePlansTxr = await contract
    .connect(user1)
    .executePlans()
    .then((tx) => tx.wait());
  console.debug("executePlansTxr: ", executePlansTxr?.hash);
  const userBalanceAfter = await erc20.balanceOf(user1.address);
  console.debug("user1 dai balance after: ", userBalanceAfter.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
