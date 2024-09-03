import { Button } from '@/components/ui/button'
import { DialogHeader,DialogContent, DialogDescription } from '@/components/ui/dialog'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import React, { Dispatch, SetStateAction, useState } from 'react'
import DialogProgress from './dialog-progress'
import SelectBlockchain from './select-blockchain'
import SeedPhraseWindow from './seed-phrase'

const OnboardingDialog = ({ setIsDialogOpen, isDialogOpen }: { setIsDialogOpen: Dispatch<SetStateAction<boolean>>, isDialogOpen: boolean }) => {
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBlockchain, setSelectedBlockchain] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);

  const handleBlockchainSelect = (blockchain: string) => {
    setSelectedBlockchain(blockchain);
    setIsDialogOpen(true);
    setStep(step+1);
  };

    

  return (
    <div className='w-full'>
    {/* <DialogContent className="bg-newPrimary border-newPrimaryForeground w-full"> */}
      <DialogHeader className='p-4'>
       <DialogProgress step={step} setStep={setStep}></DialogProgress>
      </DialogHeader>

      <DialogDescription>
        {
          step === 1 ? <SelectBlockchain handleBlockchainSelect={handleBlockchainSelect} setIsDialogOpen={setIsDialogOpen}/> :
          step === 2 && <SeedPhraseWindow step={step} setStep={setStep} /> 
          
        }
      </DialogDescription>
     {/* </DialogContent> */}
    </div>
  )
}

export default OnboardingDialog