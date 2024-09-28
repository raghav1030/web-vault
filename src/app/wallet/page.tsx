"use client";
import React, { useEffect, useState } from "react";
import ActionButton from "@/components/core/wallet/action-button";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { IoIosAdd, IoIosSwap, IoMdCopy } from "react-icons/io";
import WalletFactory, { Account } from "@/utils/wallet-factory";
import { Blockchain } from "@/types/core";
import {
  AccountSelectDropdown,
  WalletSelectDropdown,
} from "@/components/core/wallet/wallet-select-dropdown";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { blockchains } from "@/data/blockchains";
import Image from "next/image";
import { LuCopy } from "react-icons/lu";

const Wallet = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<any>(null);
  const [selectedWallet, setSelectedWallet] = useState<any>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<any>(null);
  const allAccounts = WalletFactory.getAccounts();
  const [availableNetworks, setAvailableNetworks] = useState<any[]>([]);
  const [availableWallet, setAvailableWallets] = useState<any[]>([]);
  useEffect(() => {
    setAccounts(allAccounts);
    console.log(allAccounts);
    setAvailableNetworks(
      selectedAccount?.wallets.map((wallet) => wallet.blockchain)
    );
    setSelectedAccount(allAccounts?.[0]); // Select the first account by default
    setSelectedWallet(allAccounts[0]?.wallets?.[0]); // Select the first wallet by default
  }, [allAccounts]);

  const getBlockchainIcon = (blockchain) => {
    const blockchainData = blockchains.find((b) => b.value === blockchain);
    console.log(blockchainData);
    return blockchainData?.logo;
  };

  const getAvailableWallets = (network) => {
    const wallets = selectedAccount?.wallets.filter(
      (wallet) => wallet.blockchain === network
    );
    console.log(wallets);
    setAvailableWallets(wallets);
  };
  return (
    <div className="flex flex-col  w-full  items-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center">
          <Button
            variant={"outline"}
            className="w-fit p-3 h-12  rounded-l-full border-r-0"
          >
            <Image
              src={getBlockchainIcon(selectedWallet?.blockchain)}
              alt={selectedWallet?.blockchain}
              height={20}
              width={20}
              className="rounded-full w-6 h-6"
            ></Image>
          </Button>
          <WalletSelectDropdown
            availableWallets={getAvailableWallets(selectedNetwork)}
            selectedWallet={selectedWallet}
          >
            <Button
              variant="outline"
              className=" rounded-r-none h-12 rounded-l-none"
            >
              {selectedWallet?.walletName}
            </Button>
          </WalletSelectDropdown>

          <Button
            variant={"outline"}
            className="w-fit p-3  h-12 rounded-r-full border-l-0"
          >
            <LuCopy className="w-5 h-5 " />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2>$0.00</h2>
          <div>
            <p>$0.00</p>
            <p>0%</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <ActionButton
          icon={<GoArrowDown className="w-4 h-4 text-gray-400" />}
          label={"Receive"}
        />
        <ActionButton
          icon={<GoArrowUp className="w-4 h-4 text-gray-400" />}
          label={"Send"}
        />
        <ActionButton
          icon={<IoIosSwap className="w-4 h-4 text-gray-400" />}
          label={"Swap"}
        />
      </div>

      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <div key={index} className="flex max-w-7xl  flex-col mt-4">
            <h3 className="font-bold text-lg">
              Account: {account.accountName}
            </h3>
            {account.wallets.map((wallet: any, walletIndex: number) => (
              <div
                key={walletIndex}
                className="flex items-center justify-between mt-2 border-b pb-2"
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    <div>icon</div>
                  </div>

                  <div className="flex flex-col">
                    <div>{Blockchain[wallet.blockchain]}</div>
                    <div>{wallet.address}</div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <p>$0.00</p>
                  <p>+1.24%</p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-center mt-4">No accounts found.</p>
      )}
    </div>
  );
};

export default Wallet;
