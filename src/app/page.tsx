'use client'
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import OnboardingDialog from "@/components/core/onboarding/onboarding-dialog";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogStep, setDialogStep] = useState(1);

  const handleDialogOpenChange = () => {
    setDialogStep(1)
    setIsDialogOpen(!isDialogOpen)
  }


  return (
    <div className="h-screen rounded-md bg-purple-950/10 flex flex-col items-center relative w-screen">
      <ShootingStars />
      <StarsBackground />
      <div className="absolute flex flex-col items-center justify-center gap-5">
        <div className="flex items-center justify-center px-1">
          <h2 className="mr-3 flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-1 md:gap-4 mt-10">
            <span>Clutch</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>Vault</span>
          </h2>
        </div>

        <div className="relative flex flex-col items-center justify-center w-[30rem] h-[32rem] bg-clip-content">
          <Card className="bg-transparent w-full h-full flex items-center justify-center ">
            <div className="w-full h-full relative flex flex-col gap-3">
              <div className="w-full h-full">
                <EvervaultCard className="rounded-b-none" />
              </div>
            </div>
              <div className="absolute bottom-10 flex flex-col justify-center items-center w-2/3 mx-auto gap-3">
                <Button className="w-full text-sm bg-purple-950/75 text-white hover:bg-purple-950/90">Import existing wallet</Button>

                <Button className="w-full text-sm bg-purple-950/75 text-white hover:bg-purple-950/90" onClick={() => setIsDialogOpen(!isDialogOpen)}>Create new wallet</Button>

              </div>
          </Card>
        </div>
      </div>
      <div className="relative h-auto w-full">

        <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
        

          <OnboardingDialog dialogStep={dialogStep} setDialogStep={setDialogStep} setIsDialogOpen={setIsDialogOpen} isDialogOpen={isDialogOpen}></OnboardingDialog>
      </Dialog>
        </div>
    </div>
  );
}
