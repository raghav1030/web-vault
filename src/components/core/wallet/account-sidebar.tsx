'use client'
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import WalletFactory from "@/utils/wallet-factory";
import { IconBrandTabler, IconUserBolt, IconSettings, IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

interface SidebarProps {
  children: React.ReactNode;
}
export function AccountSidebar({children} : SidebarProps) {
  // const [accounts, setAccounts] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
    const allAccounts = WalletFactory.getAccounts();


    

    const linksFromAccounts = () => {

        let accounts = WalletFactory.getAccounts();
        let links: { label: any; href: string; icon: JSX.Element; }[] = [];
        accounts.map((account, index) => {
            links.push({
                label: account.accountName,
                href: `/dashboard/${index+1}/${account.wallets[0].address}`,
                icon: (
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/60 shadow-sm shadow-purple-900/10   bg-stone-950">
                    <p className="text-purple-400 text-2xl text-center">
                      {account.accountName.split(" ")[0][0] + account.accountName.split(" ")[1][0]}
                    </p>
                  </div>
                ),
            })
        })
        return links;
      }
      return (
        <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-stone-950  flex-1 w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-screen" 
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className=" absolute justify-between gap-10">
            <div className="flex flex-col items-center  flex-1 bg-purple-950/10 overflow-y-auto overflow-x-hidden">
              <div className="mt-24 flex flex-col justify-start items-center gap-2">
                {allAccounts.map((account, idx) => (
                  <div className="flex items-center justify-center transition duration-500 ease-in-out gap-3 ">

                                <div className="w-12 h-12 flex items-center justify-center rounded-full gap-3 border  border-purple-500/60 shadow-sm shadow-purple-900/10   bg-stone-950 mt-2">
                    <p className="text-purple-400 text-2xl text-center">
                    {account.accountName.split(" ")[0][0] + account.accountName.split(" ")[1][0]}
                                </p>
            
                          </div>
                                {open && <p className="text-sm transition-all duration-1000 " >Add Account</p> }
                  </div>
            

                ) )}
              </div>
              <div className="flex items-center justify-start gap-2 transition duration-75 ">

              <div className="w-12 h-12 flex items-center justify-center rounded-full gap-3  bg-green-950/20 mt-2">
                    <p className="text-green-800 text-2xl text-center">
                    <IoAddOutline />
                    </p>

                  </div>
                    {open && <p className="text-sm" >Add Account</p> }
              </div>

            </div>
          </SidebarBody>
        </Sidebar>
        <div className="w-full flex justify-center">

        {children}
        </div>
      </div>
    );
  }