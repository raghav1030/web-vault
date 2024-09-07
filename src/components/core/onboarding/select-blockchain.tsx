import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui/command'
import React, { Dispatch, SetStateAction } from 'react'
import { blockchains } from '@/data/blockchains'

const SelectBlockchain = ({ setIsDialogOpen, handleBlockchainSelect }: { setIsDialogOpen: Dispatch<SetStateAction<boolean>>, handleBlockchainSelect: (blockchain: string) => void }) => {

    return (
        <div className='w-full flex flex-col items-center justify-center gap-6'>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Select Network
            </h2>
            <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
              Choose a network to start with. You can add more later.
            </h5>
            <div className='w-full px-5'>

                <Command className="rounded-lg border relative mr-2 shadow-md w-full bg-stone-800/20">
                    <CommandInput placeholder="Type to search Blockchain..." />
                    <CommandList  className='w-full py-2' >
                        <CommandEmpty>No results found.</CommandEmpty>

                        <CommandGroup className='w-full flex flex-col justify-center gap-2'>
                            <div className='w-full flex flex-col items-center'>
                                {
                                  blockchains.map((blockchain, key) => (
                                    <CommandItem 
                                      className='command-item w-full h-12' 
                                      key={key} 
                                      onSelect={() => handleBlockchainSelect(blockchain.value)}
                                    >
                                      <span>{blockchain.label}</span>
                                      <CommandShortcut>{blockchain.value}</CommandShortcut>
                                    </CommandItem>
                                  ))
                                }
                            </div>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </div>
    )
}

export default SelectBlockchain;
