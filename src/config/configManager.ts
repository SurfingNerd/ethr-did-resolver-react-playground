
// // import * as config from 'config';
// import Web3 from 'web3';

// const config = require('config') as ConfigEntry;

// export interface ConfigEntry {
//   networkUrl: string;
//   didRegistryAddress: string;
// }


// export class ConfigManager {
//   private static knownWeb3: Web3 | undefined = undefined;


//   public static getConfig() {
//     return config;
//   }

//   public static getWeb3() {
//     if (ConfigManager.knownWeb3 !== undefined) {
//       return ConfigManager.knownWeb3;
//     }
//     ConfigManager.knownWeb3 = new Web3(config.networkUrl);
//   }
// }
