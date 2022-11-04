import { ethers } from "hardhat";

async function main() {
  const stake = await ethers.getContractFactory("Staking")
  const staking = await stake.deploy();
  await staking.deployed();

  console.log("Staking Contract deployed to:", staking.address)
}
/*
Staking Contract deployed to: 0xF9599996f209BBf0D30724BB83436d831CDDbCf3
*/

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
