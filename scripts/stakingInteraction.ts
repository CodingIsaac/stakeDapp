import { ethereum } from "@ceramicnetwork/blockchain-utils-linking";
import { ethers } from "hardhat";

// const SMART_CONTRACT = "0xF9599996f209BBf0D30724BB83436d831CDDbCf3"

async function main() {
    const startStake = await ethers.getContractFactory("Staking");
    const doStake = startStake.attach("0x313F922BE1649cEc058EC0f076664500c78bdc0b");

    const stakeToken = await doStake.stake()
    const stakeReceipt = await stakeToken.wait();
    console.log("Receipt", stakeReceipt);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  