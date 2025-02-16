import GreatFrontend from "@/components/logo/great-frontend";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Languages, Menu } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { ModeToggle } from "../toggle/mode-toggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "../ui/sheet";
import CollapseItems from "./collapse-items";

const Navbar = () => {
  return (  
    <div className="fixed w-full top-0 left-0 z-50">
        <div className="flex justify-between bg-background/20 backdrop-blur-md items-center h-16 px-6">
          {/* First */}
          <div className="flex gap-4 items-center h-3">
            <div className="cursor-pointer">
              <GreatFrontend />
            </div>
            <Separator className="bg-[#3F3F45]" orientation="vertical" />
            <div className="flex hover:bg-[#222225] rounded-md p-2 cursor-pointer transition-all duration-150">
              <p className="font-bold pl-1 text-sm">Interviews</p>
              <div className="bg-[#FF5353] rounded-full h-[6px] w-[6px]" />
              <ChevronDown className="self-center h-5 text-[#71717A] mr-0 pr-0" />
            </div>
            <div className="ml-10 gap-10 lg:flex hidden text-sm font-semibold">
              <p className="hover:text-[#EAFD7B] cursor-pointer transition-all duration-150">Get Started</p>
              <div className="flex items-center justify-center gap-1 hover:text-[#EAFD7B] cursor-pointer transition-all duration-150">
                Prepare <ChevronDown className="self-center h-5 text-[#71717A] mr-0 pr-0" />
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="flex gap-4 text-sm font-semibold items-center">
            <p className="hover:text-[#EAFD7B] cursor-pointer transition-all duration-150 hidden sm:flex">Pricing</p>
            <p className="hover:text-[#EAFD7B] cursor-pointer transition-all duration-150 ml-4 hidden sm:flex">Sign in / up</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="cursor-pointer xl:flex hidden">
                    <Button className="rounded-full border border-[#71717A] ml-4" variant="secondary" size="icon">
                      <Languages />
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-[#E4E4E7] font-medium text-black">
                  <p className="text-xs">Language</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Mode Toggle */}
            <div className="cursor-pointer xl:flex hidden">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <ModeToggle />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#E4E4E7] font-medium text-black">
                    <p className="text-xs">Theme</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* Get Full Access */}
            <Button 
              size="sm"
              variant="primary"
              className="rounded-3xl px-3 py-1 text-xs font-medium hidden sm:flex"
            >
              Get full access
            </Button>
            <Sheet>
              <SheetTrigger>
                <Button className="rounded-full border border-[#71717A] lg:hidden flex" variant="secondary" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <div className="flex justify-start h-3 items-center gap-2">
                    <div className="cursor-pointer">
                      <GreatFrontend />
                    </div>
                    <Separator className="bg-[#3F3F45]" orientation="vertical" />
                    <div className="flex hover:bg-[#222225] rounded-md p-2 cursor-pointer transition-all duration-150 items-center">
                      <p className="font-bold pl-1 text-xs">Interviews</p>
                      <div className="bg-[#FF5353] rounded-full h-[6px] w-[6px] self-start" />
                      <ChevronDown className="self-center h-5 text-[#71717A] mr-0 pr-0" />
                    </div>
                  </div>
                </SheetHeader>
                <SheetDescription className="mt-10">
                  {/* TODO: Complete it */}
                  <CollapseItems />
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
    </div>
  );
}
 
export default Navbar;