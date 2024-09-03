import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui/command'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { blockchains } from '@/data/blockchains'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import React, { Dispatch, SetStateAction } from 'react'

const SelectBlockchain = ({ setIsDialogOpen, handleBlockchainSelect }: { setIsDialogOpen: Dispatch<SetStateAction<boolean>>, handleBlockchainSelect: (blockchain: string) => void }) => {

    return (
        <div className='w-full'>

<Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type to search Blockchain..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        {/* <CommandSeparator /> */}
        <CommandGroup heading="Select Blockchain">
          {
            blockchains.map((blockchain, key) => (
              <CommandItem key={key} onSelect={() => handleBlockchainSelect(blockchain.value)}>
                <span>{blockchain.label}</span>
                <CommandShortcut>{blockchain.value}</CommandShortcut>
              </CommandItem>
            ))
          }
        </CommandGroup>
      </CommandList>
    </Command>
            {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>

                    <Button className="w-2/3">Select Blockchain</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel className="w-full">
                        Select Blockchain
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => handleBlockchainSelect('ETH')}>
                            Ethereum
                            <DropdownMenuShortcut>ETH</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleBlockchainSelect('SOL')}>
                            Solana
                            <DropdownMenuShortcut>SOL</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu> */}
            {/* <Button onClick={() => setIsDialogOpen(false)}>Close</Button> */}
        </div>
    )
}

export default SelectBlockchain