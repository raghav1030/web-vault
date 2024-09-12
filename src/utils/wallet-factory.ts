import { Blockchain } from "@/types/core";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import * as nacl from "tweetnacl";
import { Keypair } from '@solana/web3.js';
import { Wallet } from 'ethers';
import HDkey from 'hdkey';

export type WalletInfo = {
  walletName: string
  blockchain: Blockchain;
  address: string;
  derivationPath: string;
};

export type Account = {
  accountName: string;
  wallets: WalletInfo[];
};

export default class WalletFactory {
  private static accounts: Account[] = this.loadAccountsFromStorage();

  // Generate a new seed phrase
  public static generateSeedPhrase(): string {
    return generateMnemonic();
  }

  // Get base derivation path based on blockchain
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

  // Generate a keypair based on blockchain and derivation path
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

  // Add a new account and save it in localStorage
  public static addAccount(accountName: string, seedPhrase: string, blockchains: Blockchain[]): Account {
    const wallets: WalletInfo[] = blockchains.map((blockchain, index) => {
      const wallet = this.generateKeyPair(blockchain, seedPhrase, index);
      return {
        walletName: `Wallet ${index + 1}`,
        blockchain,
        address: this.getWalletAddress(wallet, blockchain),
        derivationPath: `${this.getBasePath(blockchain)}/${index}/0`
      };
    });

    const account: Account = { accountName, wallets };
    this.accounts.push(account);
    this.saveAccountsToStorage();
    return account;
  }

  // Get the address based on blockchain
  private static getWalletAddress(wallet: any, blockchain: Blockchain): string {
    switch (blockchain) {
      case Blockchain.ETH:
        return wallet.address;
      case Blockchain.BTC:
      case Blockchain.SOL:
        return wallet.publicKey ? wallet.publicKey.toBase58() : wallet;
      default:
        throw new Error('Unsupported blockchain');
    }
  }

  // Retrieve all accounts stored locally
  public static getAccounts(): Account[] {
    return this.accounts;
  }

  // Add a new wallet to an existing account and save in localStorage
  public static addWalletToAccount(accountName: string, blockchain: Blockchain, seedPhrase: string): WalletInfo {
    const account = this.accounts.find((acc) => acc.accountName === accountName);
    if (!account) {
      throw new Error('Account not found');
    }

    const walletNumber = account.wallets.length;
    const wallet = this.generateKeyPair(blockchain, seedPhrase, walletNumber);
    const walletInfo: WalletInfo = {
      walletName: `Wallet ${walletNumber}`,
      blockchain,
      address: this.getWalletAddress(wallet, blockchain),
      derivationPath: `${this.getBasePath(blockchain)}/${walletNumber}/0`,
    };

    account.wallets.push(walletInfo);
    this.saveAccountsToStorage();
    return walletInfo;
  }

  // Save accounts to localStorage
  private static saveAccountsToStorage() {
    localStorage.setItem('accounts', JSON.stringify(this.accounts));
  }

  // Load accounts from localStorage
  private static loadAccountsFromStorage(): Account[] {
    const accountsJson = localStorage.getItem('accounts');
    return accountsJson ? JSON.parse(accountsJson) : [];
  }
}
