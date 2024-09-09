'use client'
import React, { useEffect, useState } from 'react';
import ActionButton from '@/components/core/wallet/action-button';
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { IoIosSwap } from 'react-icons/io';
import WalletFactory from '@/utils/wallet-factory';
import { Blockchain } from "@/types/core";

const Wallet = () => {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    const allAccounts = WalletFactory.getAccounts();
    setAccounts(allAccounts);
  }, []);

  return (
    <div className='flex flex-col'>
      

      <div className='flex flex-col items-center justify-center'>
        <h2>$0.00</h2>
        <div>
          <p>$0.00</p>
          <p>0%</p>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <ActionButton icon={<GoArrowDown className='w-4 h-4 text-gray-400' />} label={"Receive"} />
        <ActionButton icon={<GoArrowUp className='w-4 h-4 text-gray-400' />} label={"Send"} />
        <ActionButton icon={<IoIosSwap className='w-4 h-4 text-gray-400' />} label={"Swap"} />
      </div>

      {accounts.length > 0 ? (
        accounts.map((account, index) => (
          <div key={index} className='flex flex-col mt-4'>
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
