'use client';
import { useState } from 'react';
import WalletFactory from '@/utils/wallet-factory';  // Ensure this path is correct

const AccountSidebarDemo = () => {
  const [tabHovered, setTabHovered] = useState<any>(null);  // Track hovered account
  const allAccounts = WalletFactory.getAccounts();

  return (
    <div className='w-20'>
      <div className='flex flex-col items-center justify-center'>
        {allAccounts.map((account, index) => (
          <div
          onMouseEnter={() => setTabHovered(account)}
              onMouseLeave={() => setTabHovered(null)}
          key={index} className="relative flex flex-col items-center justify-center gap-2 py-3 cursor-pointer">
            {/* Initials in Circle */}
            <div
              
              className={`w-14 h-14 flex items-center justify-center rounded-full border-2 ${tabHovered !== account && "border-dashed"} border-purple-500/60 shadow-md shadow-purple-900/10 bg-stone-950 cursor-pointer`}
            >
              <p className="text-purple-400 text-2xl text-center">
                {account.accountName.split(" ")[0][0] + account.accountName.split(" ")[1][0]}
              </p>
            </div>



            {/* Tooltip for Hovered Account */}
            {tabHovered === account && (
              <div className="absolute top-1/2 left-11 transition-all ease-in-out  duration-300 ml-1 transform  -translate-y-1/2 flex flex-col items-start z-10">
                            {/* Display Account Number and Wallet Address */}
            <div className="text-center">
            <h4 className="scroll-m-20 text-md font-normal ">
            {account?.accountName}</h4>
              <p className="text-xs text-purple-400 truncate w-28 ">
                {account.wallets[0].address.slice(0, 6) + "..." + account.wallets[0].address.slice(-4)}
              </p>
            </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSidebarDemo;
