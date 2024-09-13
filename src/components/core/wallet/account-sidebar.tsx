'use client'
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import WalletFactory from "@/utils/wallet-factory";
import { IconBrandTabler, IconUserBolt, IconSettings, IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";

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
                    <Image src={`https://api.dicebear.com/9.x/initials/svg?seed=${account.accountName}`} height={90} width={90} className="h-8 w-8 flex-shrink-0" alt={""} />
                ),
            })
        })
        return links;
    }
    return (
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 w-full mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-screen" 
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 bg-stone-950/5 overflow-y-auto overflow-x-hidden">
              {open ? "Raghav" : "R"}
              <div className="mt-8 flex flex-col gap-2">
                {linksFromAccounts().map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
        {children}
      </div>
    );
  }