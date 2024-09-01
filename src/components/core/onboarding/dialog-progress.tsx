import { DialogTitle } from '@radix-ui/react-dialog'
import React, { Dispatch } from 'react'

const DialogProgress = ({ step, setStep }: { step: number, setStep: Dispatch<React.SetStateAction<number>> }) => {
    return (
        <div>

            <div className='flex w-full '>

                <div className={`h-1 w-1/3 ${step >= 1 ? 'bg-purple-600' : "bg-muted"}`}></div>
                <div className={`h-1 w-1/3 ${step >= 2 ? 'bg-purple-600' : "bg-muted"}`}></div>
                <div className={`h-1 w-1/3 ${step === 3 ? 'bg-purple-600' : "bg-muted"}`}></div>

            </div>

            <div className='flex w-full'>
                <DialogTitle className={`${step >= 1 ? "text-white" : "text-muted-foreground"} w-1/3 text-center text-sm font-extralight`}>Select Blockchain</DialogTitle>
                <DialogTitle className={`${step >= 2 ? "text-white" : "text-muted-foreground"} w-1/3 text-center text-sm font-extralight`}>Get Seed Phrase</DialogTitle>
                <DialogTitle className={`${step >= 3 ? "text-white" : "text-muted-foreground"} w-1/3 text-center text-sm font-extralight`}>Set Password</DialogTitle>
            </div>

        </div>)
}

export default DialogProgress