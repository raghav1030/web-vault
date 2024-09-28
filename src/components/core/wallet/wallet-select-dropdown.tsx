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
import { Account, WalletInfo } from "@/utils/wallet-factory"
import { IoIosAdd } from "react-icons/io"

type AccountSelectDropdownProps = {
  // selectedAccount: Account,
  // selectedWallet: WalletInfo,
  availableWallets: WalletInfo[],
  children: React.ReactNode
}


export function WalletSelectDropdown({ availableWallets, children }: AccountSelectDropdownProps) {
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
            availableWallets?.map((wallet, index) => (
              <DropdownMenuItem key={index}>
                {wallet.walletName}
                <DropdownMenuShortcut className="truncate break-words w-1/3">{wallet.address}</DropdownMenuShortcut>

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
