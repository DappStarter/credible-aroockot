require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain comic hunt kitchen suspect team'; 
let testAccounts = [
"0x543d08cc5c3e31f5202409ef4efdebb67151a43c8c24d2acd22d108b727fb0f9",
"0x47d96c5c641eb33c730710924cfa212ac6d3078e78b6f459ebbc9caaa5385354",
"0x4f478510c8697179fc94eef16291e7ac7f49cb9c0e66c5c8f471bd540902f6c5",
"0x39dfbdb176bad5c3367c1fe24743ef20994c3a9d6df77417cdb59c2d5be5b80e",
"0x9e82cd3feb7861497ab8a49271e5566c63dc6a85f6b575aa38c83122b0cf3f5d",
"0xceb47c4fcfe626c615f859bc4d5780eca4425b6b1e6cb4e8b38b5ea989f9b0db",
"0x3f87d2eb9e57388ba457ff35385a714cffd4af4ab258f243b2c48549a7fc72a4",
"0xa5ebb1f3440e2fb3f1d6d0a8a97f3c9402bd40510d0bd935c9415c27290b71c7",
"0x292d0cf61b9e55c9e36d9b7144ad344d4e5809a681a8b2466ae07fc75c9a7d82",
"0xa663af8a4e3a0d36d2587398e383eed977014c417d5125f39426f1c03e87a1b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
