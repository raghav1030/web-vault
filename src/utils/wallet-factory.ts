import { Blockchain } from "@/types/core";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import * as nacl from "tweetnacl";
import { Keypair } from '@solana/web3.js';
import { Wallet } from 'ethers';
import HDkey from 'hdkey';

export default class WalletFactory {
    public static generateSeedPhrase(): string {
        return generateMnemonic();
    }

    public static getBasePath(blockchain: Blockchain): string {
        switch (blockchain) {
            case Blockchain.ETH:
                return `m/44'/60'/0'`;
            case Blockchain.BTC:
                return `m/44'/0'/0'`;
            case Blockchain.SOL:
                return `m/44'/501'/0'`;
            default:
                throw new Error('Invalid blockchain');
        }
    }

    public static generateKeyPair(blockchain: Blockchain, seedPhrase: string, walletNumber: number) {
        const seed = mnemonicToSeedSync(seedPhrase);
        const derivationPath = `${this.getBasePath(blockchain)}/${walletNumber}/0`;

        switch (blockchain) {
            case Blockchain.ETH:
                const hdNodeEth = HDkey.fromMasterSeed(seed);
                const childEth = hdNodeEth.derive(derivationPath);
                return new Wallet(childEth.privateKey.toString('hex'));

            case Blockchain.BTC:
                const hdNodeBtc = HDkey.fromMasterSeed(seed);
                const childBtc = hdNodeBtc.derive(derivationPath);
                return childBtc.privateKey.toString('hex');

            case Blockchain.SOL:
                const derivedSeed = derivePath(derivationPath, seedPhrase).key;
                const solKeyPair = nacl.sign.keyPair.fromSeed(derivedSeed);
                return Keypair.fromSecretKey(solKeyPair.secretKey);

            default:
                throw new Error('Invalid blockchain');
        }
    }
}
