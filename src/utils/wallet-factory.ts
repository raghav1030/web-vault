import { Blockchain } from "@/types/core";
import { generateMnemonic } from "bip39";

class WalletFactory {
    public static generateSeedPhrase(): string {
        const mn = generateMnemonic()
        return mn
    }

    public static getBasePath(blockchain: Blockchain): string {
        switch (blockchain) {
            case Blockchain.ETH:
                return `m/44'/60'`
            case Blockchain.BTC:
                return `m/44'/0'`
            case Blockchain.SOL:
                return `m/44'/501'`
            default:
                throw new Error('Invalid blockchain')
        }
    }

    public static generateKeyPair(blockchain: Blockchain, seed : string): string {
        switch (blockchain) {
            case Blockchain.ETH:
                const derivationPath = `${this.getBasePath(blockchain)}/    `
                return `keypair for ${blockchain}`
            case Blockchain.BTC:
                return `keypair for ${blockchain}`
            case Blockchain.SOL:
                return `keypair for ${blockchain}`
            default:
                throw new Error('Invalid blockchain')
        }

    }
}