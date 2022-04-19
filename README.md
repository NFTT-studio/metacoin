# metacoin

Accompanying ERC20 truffle demo project for the tutorial [Interacting with NFTMart Using Truffle](https://nftt-studio.github.io/nftmart-docs/Using_with_Truffle.html)


```
$ truffle migrate

Compiling your contracts...
===========================
✓ Fetching solc version list from solc-bin. Attempt #1
✓ Downloading compiler. Attempt #1.
✓ Fetching solc version list from solc-bin. Attempt #1
> Compiling ./contracts/ConvertLib.sol
> Compiling ./contracts/MetaCoin.sol
> Compiling ./contracts/Migrations.sol
> Artifacts written to /home/ubuntu/metacoin/build/contracts
> Compiled successfully using:
   - solc: 0.5.17+commit.d19bba13.Emscripten.clang


Starting migrations...
======================
> Network name:    'development'
> Network id:      12191
> Block gas limit: 60000000 (0x3938700)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xe61522d27511a663b9adac79d60f4f4ab94bc43ced43cecf5a885dbffbf2d2f3
   > Blocks: 0            Seconds: 0
   > contract address:    0x1E7727eDad5a2ef47C5AB95a20FEd515735591B2
   > block number:        705869
   > block timestamp:     1650367950
   > account:             0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b
   > balance:             6994.870321140897
   > gas used:            165475 (0x28663)
   > gas price:           2.5000045 gwei
   > value sent:          0 ETH
   > total cost:          0.0004136882446375 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.0004136882446375 ETH


2_deploy_contracts.js
=====================

   Deploying 'ConvertLib'
   ----------------------
   > transaction hash:    0x80d506703e0f322859675d6b9069a79f11e3600009c0e1b0509a4f4fb74c9fd4
   > Blocks: 0            Seconds: 4
   > contract address:    0x6211feD3b4f22e23Ac77EeB4F31562D17f5A352E
   > block number:        705871
   > block timestamp:     1650367962
   > account:             0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b
   > balance:             6641.872185745397
   > gas used:            95458 (0x174e2)
   > gas price:           2.5000045 gwei
   > value sent:          0 ETH
   > total cost:          0.000238645429561 ETH


   Linking
   -------
   * Contract: MetaCoin <--> Library: ConvertLib (at address: 0x6211feD3b4f22e23Ac77EeB4F31562D17f5A352E)

   Deploying 'MetaCoin'
   --------------------
   > transaction hash:    0xfd25b0ff79dd6a9b710b6c7e3876cf24449910f8c1f236c3157c54024ea31f7b
   > Blocks: 0            Seconds: 4
   > contract address:    0x4D73053013F876e319f07B27B59158Cca01A64C5
   > block number:        705872
   > block timestamp:     1650367968
   > account:             0x6Be02d1d3665660d22FF9624b7BE0551ee1Ac91b
   > balance:             5920.208386752897
   > gas used:            288665 (0x46799)
   > gas price:           2.5000045 gwei
   > value sent:          0 ETH
   > total cost:          0.0007216637989925 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.0009603092285535 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.001373997473191 ETH
```
