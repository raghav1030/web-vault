'use client'
import React, { useEffect, useState } from 'react';
import ActionButton from '@/components/core/wallet/action-button';
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { IoIosSwap } from 'react-icons/io';
import WalletFactory from '@/utils/wallet-factory';
import { Blockchain } from "@/types/core";
import { AccountSelectDropdown } from '@/components/core/wallet/account-select-dropdown';

const Wallet = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<any>(null);
  const [selectedWallet, setSelectedWallet] = useState<any>(null);
  const allAccounts = WalletFactory.getAccounts();
  
  useEffect(() => {
    setAccounts(allAccounts);
    console.log(allAccounts);
    setSelectedAccount(allAccounts?.[0]); // Select the first account by default
    setSelectedWallet(allAccounts[0]?.wallets?.[0]); // Select the first wallet by default
  }, [allAccounts]);

  return (
    <div className='flex flex-col  w-full  items-center'>


      <div className='flex flex-col items-center justify-center gap-3'>
        <AccountSelectDropdown accounts={accounts} selectedAccount={selectedAccount} selectedWallet={selectedWallet}/>

      <div className='flex flex-col items-center justify-center'>
        <h2>$0.00</h2>
        <div>
          <p>$0.00</p>
          <p>0%</p>
        </div>
      </div>
      </div>

      <div className='flex items-center justify-center'>
        <ActionButton icon={<GoArrowDown className='w-4 h-4 text-gray-400' />} label={"Receive"} />
        <ActionButton icon={<GoArrowUp className='w-4 h-4 text-gray-400' />} label={"Send"} />
        <ActionButton icon={<IoIosSwap className='w-4 h-4 text-gray-400' />} label={"Swap"} />
      </div>

      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <div key={index} className='flex max-w-7xl  flex-col mt-4'>
            <h3 className='font-bold text-lg'>Account: {account.accountName}</h3>
            {account.wallets.map((wallet: any, walletIndex: number) => (
              <div key={walletIndex} className='flex items-center justify-between mt-2 border-b pb-2'>
                <div className='flex items-center'>
                  <div className='mr-4'>
                    <div>icon</div>
                  </div>

                  <div className='flex flex-col'>
                    <div>{Blockchain[wallet.blockchain]}</div>
                    <div>{wallet.address}</div>
                  </div>
                </div>

                <div className='flex flex-col items-end'>
                  <p>$0.00</p>
                  <p>+1.24%</p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className='text-center mt-4'>No accounts found.</p>
      )}
    </div>
  );
};

export default Wallet;
