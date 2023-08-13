import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import fs from "fs";

const loadSecret = () => {
  const secretPath = "./secret.json";

  if (fs.existsSync(secretPath))
    return JSON.parse(fs.readFileSync(secretPath, "utf8"));
  else throw new Error("secret.json not found");
};

const secret = loadSecret();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      forking: {
        url: secret.alchemy.optimism,
      },
      accounts: {
        mnemonic: secret.seed,
      },
    },
    optimism: {
      url: secret.alchemy.optimism,
      accounts: {
        mnemonic: secret.seed,
      },
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: {
        mnemonic: secret.seed,
      },
    },
    mode: {
      url: "https://sepolia.mode.network/",
      accounts: {
        mnemonic: secret.seed,
      },
    },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

export default config;
