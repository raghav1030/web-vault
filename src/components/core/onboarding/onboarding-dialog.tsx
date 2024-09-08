import { Button } from '@/components/ui/button'
import { DialogHeader,DialogContent, DialogDescription } from '@/components/ui/dialog'
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import React, { Dispatch, SetStateAction, useState } from 'react'
import DialogProgress from './dialog-progress'
import SelectBlockchain from './select-blockchain'
import SeedPhraseWindow from './seed-phrase'
import { IoIosArrowRoundBack } from "react-icons/io";
import Warnings from './warnings'

type OnboardDialogProps = {
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>,
  isDialogOpen: boolean,
  dialogStep: number,
  setDialogStep: Dispatch<SetStateAction<number>> 
}
const OnboardingDialog = ({ setIsDialogOpen, isDialogOpen, dialogStep, setDialogStep }: OnboardDialogProps ) => {
  const [selectedBlockchain, setSelectedBlockchain] = useState<string | null>(null);

  const handleBlockchainSelect = (blockchain: string) => {
    setSelectedBlockchain(blockchain);
    setDialogStep(dialogStep + 1);
  };
    

  return (
    // < className='w-[90rem]'>
<DialogContent className="bg-stone-950 max-w-[45rem]  h-screen" >
  <div className='cursor-pointer'>

{
  dialogStep !== 1 &&
<IoIosArrowRoundBack onClick={() => setDialogStep(dialogStep-1)}  className="absolute text-muted-foreground left-4 top-4 w-6 h-6" />
}
  </div>

<DialogHeader className={` p-4  ${dialogStep === 1 && 'pt-0'}   w-full`}>
  

       <DialogProgress step={dialogStep} setStep={setDialogStep}></DialogProgress>
      </DialogHeader>

      <DialogDescription className='w-full p-4'>
        {
          dialogStep === 1 ? <SelectBlockchain handleBlockchainSelect={handleBlockchainSelect} setIsDialogOpen={setIsDialogOpen}/> :
          dialogStep === 2 ? <Warnings setStep={setDialogStep}></Warnings> :
          dialogStep === 3 && <SeedPhraseWindow step={dialogStep} setStep={setDialogStep} /> 
        }
      </DialogDescription>
     </DialogContent> 
  )
}

export default OnboardingDialog