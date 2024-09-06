'use client'
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

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
      <div className='w-full flex flex-col justify-center items-center gap-4'>

    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    Secret Recover Phrase
    </h2>
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Save these words in a safe place.</h3>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-red-800">
        Read the warnings again</h4>
      </div>
      <Card onClick={copyToClipboard} className="w-full flex flex-col  justify-center gap-2 p-4 bg-zinc-800/10 hover:bg-zinc-800/35 ">
        <div className="grid grid-cols-3 gap-4 cursor-pointer border-b pb-3">
          {seedPhrase.map((word, index) => (
            <button
            key={index}
            className="py-2 bg-black/60 text-white text-sm rounded-md font-light hover:shadow-lg"
            >
              {word}
            </button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">Click anywhere on this card to copy your secret recovery phrase</p>

      </Card>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            I've saved my secret recover phrase.
          </Label>
        </div>

      </div>
    </div>
  )
}

export default SeedPhraseWindow
