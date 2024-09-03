'use client'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import WalletFactory from '@/utils/wallet-factory'
import React, { useEffect } from 'react'

const SeedPhraseWindow = ({ step, setStep }: { step: Number, setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  const [seedPhrase, setSeedPhrase] = React.useState<string[]>([]);

  const getSeedPhrase = () => {
    return WalletFactory.generateSeedPhrase()
  }

  useEffect(() => {
    setSeedPhrase(getSeedPhrase().split(" "))
  }, [])

  return (
    <div>

    <Card className="w-full p-4">
      <div className="grid grid-cols-3 gap-4">
        {
          seedPhrase.map((word, index) => (
            <button
            key={index}
            className="py-2 bg-black text-white text-sm rounded-md font-light hover:bg-black/[0.8] hover:shadow-lg">
              {word}
            </button>
          ))
        }
      </div>
    </Card>

    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I've backed up all the codes
      </label>
    </div>
        </div>
  )
}

export default SeedPhraseWindow
