'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import WalletFactory from '@/utils/wallet-factory'
import React, { useEffect, useState } from 'react'
import toast, { Toaster, ToastBar } from 'react-hot-toast';


const SeedPhraseWindow = ({ step, setStep }: { step: Number, setStep: React.Dispatch<React.SetStateAction<number>> }) => {

  
  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);
  const [seedPhraseString, setSeedPhraseString] = useState("") 
  
  const getSeedPhrase = () => {
    return WalletFactory.generateSeedPhrase()
  }
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(seedPhraseString);
      toast.success('Seed phrase copied to clipboard!',  {
        position: 'top-center',
      });
    } catch (err) {
      toast.error('Failed to copy seed phrase.');
    }
  }
  
  useEffect(() => {
    const seedPhraseRaw = getSeedPhrase();
    setSeedPhraseString(seedPhraseRaw);
    setSeedPhrase(seedPhraseRaw.split(" "));
  }, [])
  
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
      <div className='w-full flex flex-col justify-center items-center gap-4'>

    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    Secret Recover Phrase
    </h2>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Save these words in a safe place.</h3>
        <h4 onClick={() => setStep(2)} className="scroll-m-20 text-xl font-semibold tracking-tight text-red-800 cursor-pointer ">
        Read the warnings again</h4>
      </div>
      <Card onClick={copyToClipboard} className="w-full flex flex-col  justify-center gap-2 p-4 bg-zinc-800/10 hover:bg-zinc-800/35 ">
        <div className="grid grid-cols-3 gap-4 cursor-pointer border-b border-dashed border-gray-700 pb-3">
          {seedPhrase.map((word, index) => (
            <button
            key={index}
            className="py-2 bg-black/60 text-white text-sm rounded-md font-light hover:shadow-lg"
            >
              {word}
            </button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center mt-1">Click anywhere on this card to copy your secret recovery phrase</p>

      </Card>

      
        <div className="mt-4 space-x-2">
        <Checkbox id="terms" checked={isChecked} onCheckedChange={handleCheckboxChange} />
          <Label
            htmlFor="terms"
            className="text-md font-medium text-white  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-7 [&:not(:first-child)]:mt-6"
            >
            I've saved my secret recover phrase.
          </Label>
        </div>

        <div className='w-full px-14 mt-3'>
        <Button
          className='w-full h-14 scroll-m-20 text-xl font-semibold tracking-tight bg-zinc-300 hover:bg-zinc-200'
          disabled={!isChecked} 
          onClick={() => setStep(3)} 
          >
          Next
        </Button>

        

      </div>
    
    </div>
  )
}


export default SeedPhraseWindow
