import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui/command'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import React, { Dispatch, SetStateAction } from 'react'

const SelectBlockchain = ({ setIsDialogOpen, handleBlockchainSelect }: { setIsDialogOpen: Dispatch<SetStateAction<boolean>>, handleBlockchainSelect: (blockchain: string) => void }) => {

    return (
        <div className='w-full'>

<Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            {/* <FaceIcon className="mr-2 h-4 w-4" /> */}
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
        {/* <CommandSeparator /> */}
        <CommandGroup heading="Settings">
          <CommandItem>
            {/* <PersonIcon className="mr-2 h-4 w-4" /> */}
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            {/* <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> */}
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            {/* <GearIcon className="mr-2 h-4 w-4" /> */}
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
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