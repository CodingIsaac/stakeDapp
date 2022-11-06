import { ethereum } from "@ceramicnetwork/blockchain-utils-linking";
import { parseEther } from "ethers/lib/utils";
import { ethers } from "hardhat";

const SMART_CONTRACT = "0x8134278FbA2c5F19C7D8f8965cBA04Cf36b04974"

async function main() {
    const startStake = await ethers.getContractFactory("Staking");
    const doStake = startStake.attach(SMART_CONTRACT);

    const stakeToken = await doStake.stake(1657084241, parseEther("0.1"))
    const stakeReceipt = await stakeToken.wait();
    console.log("Receipt", stakeReceipt);

}
// 0x313F922BE1649cEc058EC0f076664500c78bdc0b

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  