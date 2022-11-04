import { ethereum } from "@ceramicnetwork/blockchain-utils-linking";
import { ethers } from "hardhat";

const SMART_CONTRACT = "0xf18130Ba24B61386C3A2b82623ba7862472Ae879"

async function main() {
    const startStake = await ethers.getContractFactory("Staking");
    const doStake = startStake.attach(SMART_CONTRACT);

    const stakeToken = await doStake.stake(2)
    const stakeReceipt = await stakeToken.wait();
    console.log("Receipt", stakeReceipt);

}
// 0x313F922BE1649cEc058EC0f076664500c78bdc0b

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  