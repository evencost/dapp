import { ethers } from "hardhat";

async function main() {
  const [, user1] = await ethers.getSigners();
  const contractAddress = "set me!";
  const contract = await ethers.getContractAt("AutoInvest", contractAddress);
  const amount = ethers.parseEther("1");
  const total = ethers.parseEther("10");

  const DAI = await contract.DAI();
  console.debug("DAI address: ", DAI);
  const erc20 = await ethers.getContractAt("ERC20", DAI);
  const userBalance = await erc20.balanceOf(user1.address);
  console.debug("user1 dai balance: ", userBalance.toString());

  const approveTxr = await erc20
    .connect(user1)
    .approve(contractAddress, total)
    .then((tx) => tx.wait());
  console.debug("approveTxr: ", approveTxr?.hash);

  const creataPlanTxr = await contract
    .connect(user1)
    .createPlan("testID", "ETH", amount, total, "1h")
    .then((tx) => tx.wait());
  console.debug("creataPlanTxr: ", creataPlanTxr?.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
