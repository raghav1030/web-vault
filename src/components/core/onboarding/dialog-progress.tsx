import { DialogTitle } from "@radix-ui/react-dialog";
import React, { Dispatch } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  PiNumberCircleFourLight,
  PiNumberCircleOneLight,
  PiNumberCircleThreeLight,
  PiNumberCircleTwoLight,
} from "react-icons/pi";
import { TbCircleDashedNumber1, TbCircleDashedNumber2, TbCircleDashedNumber3, TbCircleDashedNumber4 } from "react-icons/tb";

const DialogProgress = ({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className={`w-full flex flex-col items-start justify-start ${step === 1 && "-mt-[4.3rem]"}` }>
      <div className="flex w-full  ">
        <div className={`w-full flex items-center justify-center `}>
          {/* <div
            className={`h-[0.2rem] w-[12.5%] ${
              step >= 1 ? "bg-purple-900" : "bg-muted"
            }`}
          ></div> */}
          {step === 1 ? (
            <TbCircleDashedNumber1
              className={`${
                step >= 1 ? "text-purple-300" : "text-muted"
              }  text-center w-14 h-10 `}
            />
          ) : (
            <PiNumberCircleOneLight
              className={`${
                step >= 1 ? "text-purple-400" : "text-muted"
              }  text-center w-14 h-10 `}
            />
          )}


          <div className={`h-[0.2rem] w-1/3 ${step > 1 ? "bg-purple-900" : "bg-muted"}`}></div>

          {step === 2 ? 
            <TbCircleDashedNumber2 className={`${step === 2 ? "text-purple-300" : "text-muted"}  text-center w-14 h-10 `} />
           : 
            <PiNumberCircleTwoLight className={`${ step > 2 ? "text-purple-400" : "text-muted"} text-center w-14 h-10 `}/>
          }


          <div className={`h-[0.2rem] w-1/3 ${step > 2 ? "bg-purple-900" : "bg-muted"}`}></div>

          {step === 3 ? 
            <TbCircleDashedNumber3 className={`${step === 3 ? "text-purple-300" : "text-muted"}  text-center w-14 h-10 `} />
           : 
            <PiNumberCircleThreeLight className={`${ step > 3 ? "text-purple-400" : "text-muted"} text-center w-14 h-10 `}/>
          }



          {/* <div className={`h-[0.2rem] w-1/3 ${step > 3 ? "bg-purple-900" : "bg-muted"}`}></div>

          {step === 4 ? 
            <TbCircleDashedNumber4 className={`${step >= 4 ? "text-purple-300" : "text-muted"}  text-center w-14 h-10 `} />
           : 
            <PiNumberCircleFourLight className={`${ step >= 4 ? "text-white" : "text-muted"} text-center w-14 h-10 `}/>
          } */}

          {/* <div className={`h-[0.2rem] w-[12.5%]   ${step > 3 ? "bg-purple-900" : "bg-muted"}`}></div> */}
        </div>
      </div>

      <div className="flex w-full">
        <DialogTitle
          className={`${
            step >= 1 ? "text-white" : "text-muted-foreground"
          } w-1/3 text-start text-sm font-medium`}
        >
          Select Blockchain
        </DialogTitle>
        <DialogTitle
          className={`${
            step >= 2 ? "text-white" : "text-muted-foreground"
          } w-1/3 text-center text-sm font-medium`}
        >
          Instructions
        </DialogTitle>
        <DialogTitle
          className={`${
            step >= 3 ? "text-white" : "text-muted-foreground"
          } w-1/3 text-end text-sm font-medium`}
        >
          Seed Phrase
        </DialogTitle>
        {/* <DialogTitle
          className={`${
            step >= 4 ? "text-white" : "text-muted-foreground"
          } w-1/4 text-center  text-sm font-medium`}
        >
          Set Password
        </DialogTitle> */}
      </div>
    </div>
  );
};

export default DialogProgress;
