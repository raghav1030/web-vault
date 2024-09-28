
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { blockchains } from "@/data/blockchains"
import { Account, WalletInfo } from "@/utils/wallet-factory"
import Image from "next/image"
import { Dispatch } from "react"
import { IoIosAdd } from "react-icons/io"

type AccountSelectDropdownProps = {
  availableNetworks: any,
  setSelectedNetwork: Dispatch<any>,
  children: React.ReactNode
}


export function NetworkSelectDropdown({ availableNetworks, setSelectedNetwork, children }: AccountSelectDropdownProps) {
  
    const getBlockchainIcon = (blockchain) => {
    const blockchainData = blockchains.find((b) => b.value === blockchain);
    console.log(blockchainData)
    return blockchainData?.logo
  }


  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Existing Wallets</DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>

          {
            availableNetworks?.wallets?.map((network, index) => (
              <DropdownMenuItem key={index}>
                <Image src={getBlockchainIcon(network)} alt={network}  width={20} height={20} className="w-6 h-6 rounded-full"></Image>               <DropdownMenuShortcut className="truncate break-words w-1/3">{network}</DropdownMenuShortcut>

              </DropdownMenuItem>

            ))
          }

        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center justify-start gap-1">

          <IoIosAdd className="w-4 h-4 text-green-600" />
          <p className="text-start">

            Create new Wallet
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
