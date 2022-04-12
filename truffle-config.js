const HDWalletProvider = require('@truffle/hdwallet-provider');
// NFTMart Development Node Private Key
const privateKeyDev =
   '99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342';

module.exports = {
   networks: {
      // Moonbeam Development Network
      development: {
         provider: () => {
            if (!privateKeyDev.trim()) {
               throw new Error(
                  'Please enter a private key with funds, you can use the default one'
               );
            }
            return new HDWalletProvider(
               privateKeyDev,
               'http://localhost:9933/'
            );
         },
         network_id: '*',
      },
   },
   // Solidity 0.5 Compiler
   compilers: {
      solc: {
         version: '^0.5',
      },
   },
   plugins: ['truffle-plugin-verify'],
};
