import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react'
import { IoIosWarning } from 'react-icons/io'
import { MdLockOutline } from "react-icons/md";

const Warnings = ({setStep}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center gap-5 '>
      <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight lg:text-4xl">
        Secret Recovery Phrase Warning
      </h1>

      <h4 className="scroll-m-20 px-20 text-xl text-center font-semibold tracking-tight">
        On the next page, you will receive your secret recovery phrase.
      </h4>

      <div className='w-full flex flex-col items-center justify-center px-6 gap-3  '>
        <div className='flex items-center justify-between gap-6 bg-zinc-700/35 p-6 rounded-lg'>
          <span>
            <IoIosWarning className='w-8 h-8 text-yellow-400' />
          </span>
          <h4 className="scroll-m-20 text-xl text-start font-semibold tracking-normal">
            This is the <span className='text-primary'> ONLY </span> way to recover your account if you lose access to your device or password.
          </h4>
        </div>

        <div className='flex items-center justify-between gap-6 rounded-md bg-zinc-700/35 p-6'>
          <span>
            <MdLockOutline className='w-8 h-8 text-green-400' />
          </span>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Write it down, store it in a safe place, and remember, <span className='text-primary'> NEVER </span> share it with anyone.
          </h4>
        </div>
      </div>

      <div className="px-16 space-x-2">
        <Checkbox id="terms" checked={isChecked} onCheckedChange={handleCheckboxChange} />
        <Label
          htmlFor="terms"
          className="text-lg font-medium text-wrap text-start text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70 p-0"
        >
          I understand that I am responsible for saving my secret recovery phrase, and that it is the only way to recover my wallet.
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

export default Warnings;
