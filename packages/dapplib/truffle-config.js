require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strong deny situate color grid kite metal gentle'; 
let testAccounts = [
"0xaf0e8f855a6f8e02f9554259b7544f611b7f0a1653055843ff626442e65ec5da",
"0x8fbc65ff095063d489c672ef5bf4879bba63079495fc5c1d97d91da5cdb02cac",
"0xb9be6e6273ca213142e3b4d2c2dd2a1e447d50425115badbb44fec2e225d4109",
"0xd4f33292dd1d44643975425020caf160d21ee511a22e39b586ac4169f22c88f2",
"0x0aa787397b927d70b1fbdaaf9fd9ad6c0000904557285e947cf170d6e0278567",
"0xa7552476b9d222747eba734a32793e2f4466b3985889a30684e77772ce271173",
"0x3009c54029506eff67e18d2172023b0e0165a5764c0ab1777bb6d5c52b08887a",
"0x782faadf98c376e5b7e0591a4513340ba432fbd1f19e44234138f15b887e3f55",
"0x48485eeb9f0ab824b0989e375a99bdd88ca587a6b4a14aed10e49bf8a5e35d84",
"0x1c6f8e04daea9dd1443e1ceca841c3ec18126f722c15fbb7aa167055796cc3f1"
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
