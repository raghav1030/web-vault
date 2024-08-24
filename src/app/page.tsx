import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center  relative w-full ">
      <ShootingStars />
      <StarsBackground />
      <div className="absolute flex flex-col items-center justify-center gap-5">

        <div className="flex items-center justify-center px-1">

          <h2 className="mr-3 flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-1 md:gap-4 mt-10  ">
            <span>Clutch</span>
            <span className="text-white text-lg font-thin">x</span>
            <span>Vault</span>
          </h2>
        </div>

        <div className=" relative flex flex-col items-center justify-center w-96 bg-clip-content   ">

          <Card className="  bg-transparent w-full p-4">
            <div className="w-full flex flex-col gap-3   ">
              <div className="">
                <EvervaultCard ></EvervaultCard>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-3">
                {/* <Button className="w-2/3">Create new wallet</Button> */}
                <Button className="w-2/3">Import existing wallet</Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-2/3" >Create new wallet</Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-full ">
                    <DropdownMenuLabel className="w-full " >
                      Select Blockchain
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />
        <DropdownMenuGroup>
          
        <DropdownMenuItem>
            Ethereum
            <DropdownMenuShortcut>ETH</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            Solana
            <DropdownMenuShortcut>SOL</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>

        </div>
      </div>


    </div>
  );
}
