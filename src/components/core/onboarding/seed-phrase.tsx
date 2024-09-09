import { Blockchain } from "@/types/core";
import WalletFactory from '@/utils/wallet-factory';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

type SeedPhraseProps =  { 
  step: Number,
  setStep: React.Dispatch<React.SetStateAction<number>>,
  selectedBlockchain: Blockchain
}
const SeedPhraseWindow = ({ step, setStep, selectedBlockchain }: SeedPhraseProps) => {

  const [seedPhrase, setSeedPhrase] = useState<string[]>([]);
  const [seedPhraseString, setSeedPhraseString] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter()
  const getSeedPhrase = () => WalletFactory.generateSeedPhrase();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(seedPhraseString);
      toast.success('Seed phrase copied to clipboard!', {
        position: 'top-center',
      });
    } catch (err) {
      toast.error('Failed to copy seed phrase.');
    }
  };

  useEffect(() => {
    const seedPhraseRaw = getSeedPhrase();
    setSeedPhraseString(seedPhraseRaw);
    setSeedPhrase(seedPhraseRaw.split(" "));
  }, []);

  const handleCheckboxChange = () => setIsChecked(prev => !prev);

  const handleNextClick = () => {
    const accountName = 'Account 1';
    const blockchains = [selectedBlockchain];

    const newAccount = WalletFactory.addAccount(accountName, seedPhraseString, blockchains);


    router.push('/wallet')

    console.log("New Account Created:", newAccount);
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
      <div className='w-full flex flex-col justify-center items-center gap-4'>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Secret Recover Phrase
        </h2>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Save these words in a safe place.
        </h3>
        <h4 onClick={() => setStep(2)} className="scroll-m-20 text-xl font-semibold tracking-tight text-red-800 cursor-pointer flex items-center justify-center gap-2 ">
          <p>Read the warnings again</p>
          <span><FaExternalLinkAlt className='w-4 h-4' /></span>
        </h4>
      </div>

      <Card onClick={copyToClipboard} className="w-full flex flex-col  justify-center gap-2 p-4 bg-zinc-800/10 hover:bg-zinc-800/35 ">
        <div className="grid grid-cols-3 gap-4 cursor-pointer border-b border-dashed border-gray-700 pb-3">
          {seedPhrase.map((word, index) => (
            <button key={index} className="py-2 bg-black/60 text-white text-sm rounded-md font-light hover:shadow-lg">
              {word}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-1 cursor-pointer">Click anywhere on this card to copy your secret recovery phrase</p>
      </Card>

      <div className="mt-4 space-x-2 flex justify-center items-center">
        <Checkbox id="terms" checked={isChecked} onCheckedChange={handleCheckboxChange} />
        <Label htmlFor="terms" className="text-md font-medium text-white cursor-pointer leading-none">
          I've saved my secret recovery phrase.
        </Label>
      </div>

      <div className='w-full px-14 mt-3'>
        <Button
          className='w-full h-14 scroll-m-20 text-xl font-semibold tracking-tight bg-zinc-300 hover:bg-zinc-200'
          disabled={!isChecked}
          onClick={handleNextClick}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default SeedPhraseWindow;
