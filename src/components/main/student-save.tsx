import { cva } from "class-variance-authority";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Copy } from "lucide-react";
import { Button } from "../ui/button";

interface StudentSaveProps {
  who: "Seasonal" | "Social" | "Student" | "Submit Review";
  off: number;
  forWho?: string;
}

const studentVariants = cva(
  "rounded-2xl w-auto text-sm px-2",
  {
  variants: {
    variant: {
      "Seasonal": "dark:bg-[#0D3310] bg-[#EBFEEC] text-[#239F33] border border-[#39EA49]",
      "Social": "dark:bg-[#3E260F] text-[#F7963C] bg-[#FFF9F3] border border-[#FEBF84]",
      "Student": "dark:bg-[#27272A] bg-[#FAFAFA] dark:text-white text-black",
      "Submit Review": "dark:bg-[#0F303B] bg-[#F1FCFF] text-[#46C4EE] border border-[#46C4EE]"
    }
  }
})

const StudentSave = ({
  who,
  off,
  forWho
}: StudentSaveProps) => {
  return (  
    <Card>
      <CardContent className="mt-5">
        <div className="flex justify-start">
          <div className={cn(studentVariants({ variant: who }))}>
            {who}
          </div>
        </div>
        <div className="text-4xl mt-5">
          <span className="font-semibold">
            {off}%
          </span>
          <span className="text-sm ml-1 text-[#A1A1AA]">OFF</span>
        </div>
        {forWho && 
          <Button variant='secondary' className="flex items-center gap-2 rounded-3xl h-7 mt-5">
            {forWho} <ArrowRight className='w-4' />
          </Button>
        }
        {!forWho && 
        <Button variant='secondary' className="flex items-center gap-2 rounded-3xl h-7 mt-5">
          FALL25
        </Button>
        }
      </CardContent>
    </Card>
  );
}
 
export default StudentSave;