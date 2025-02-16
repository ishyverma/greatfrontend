import { ArrowRight, Check } from "lucide-react";
import { Button } from "../ui/button";
import SaveOffer from "./save-offer";
import StudentSave from "./student-save";

const Save = () => {
  return (  
    <div className="my-40 flex items-center justify-center">
      <div className="w-[90vw]">
        <div className="flex items-center gap-4">
          <Button variant='secondary' className="h-6 text-xs"> 
            20% off
          </Button>
          <p className="flex gap-1 items-center group cursor-pointer">
            <div className="text-xs group-hover:underline">
              Get another 20% off
            </div>
            <ArrowRight className="w-4" />
          </p>
        </div>
        <div className="sm:text-5xl text-3xl dark:text-[#F4F4F4] text-[#52525B] lg:w-[900px] w-[90vw] font-medium mt-8">
          Save time, ace interviews, and secure high-paying roles
        </div>
        <div className="relative flex p-6 gap-10 isolate mt-10 overflow-hidden rounded-xl mx-auto w-full max-w-lg md:max-w-none bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 before:absolute before:-z-[1] before:h-[130px] before:w-[210px] before:rounded-full before:bg-[radial-gradient(32.11%_32.11%_at_50%_50%,_#FFFFFF_0%,_#D8D8E1_100%)] before:opacity-10 before:blur- [42.0942px] before:-top-[150px] before:left-1/2 before:-translate-x-1/2">
          <div className="w-[500px]">
            <div className="flex justify-between items-center">
              <div>
                Lifetime plan
              </div>
              <div className="rounded-xl dark:bg-[#27272A] bg-[#F4F4F5] text-xs">
                While offer lasts
              </div>
            </div>
            <div className="dark:text-[#A1A1AA] text-[#52525B] mt-7">
              <span className="line-through">$360 paid once</span> (50% off)
            </div>
            <div className="text-6xl font-medium mt-3">
              $180 <span className="dark:text-[#A1A1AA] text-[#52525B] text-sm -ml-3">paid once</span>
            </div>
            <div className="mt-3">
              <Button variant='primary' className="rounded-3xl w-full">
                Buy now
              </Button>
            </div>
          </div>
          {/* Second */}
          <div className="h-52 w-[1px] bg-[#A1A1AA]/20 lg:block hidden" />
          {/* Third */}
          <div className="w-full hidden sm:block">
            <div className="font-medium">
              Pay once, get full access to the interviews platform forever
            </div>
            <div className="flex lg:items-center items-start dark:text-[#A1A1AA] text-[#52525B] mt-4 gap-1">
              <Check className="text-green-700 w-5" /> Unlock all premium interviews content
            </div>
            <div className="flex lg:items-center items-start dark:text-[#A1A1AA] text-[#52525B] mt-4 gap-1">
              <Check className="text-green-700 w-5" /> Exclusive private Discord channel with real-time support from the team
            </div>
            <div className="w-full h-[1px] bg-[#A1A1AA]/20 mt-6 lg:block hidden" />
            <div className="dark:text-[#A1A1AA] text-[#52525B] text-xs mt-5 hidden lg:flex">
              Included for free
            </div>
            <div className="lg:flex hidden mt-3 items-center gap-2 group cursor-pointer">
              <div className="bg-rose-500 dark:text-black text-white font-semibold p-1 rounded-sm">
                FTL
              </div>
              <div className="dark:text-[#A1A1AA] text-[#52525B] group-hover:underline">FAANG Tech Leads Software Engineer Resume References and Handbook</div>
              <div className="text-2xl font-semibold">28 USD</div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <SaveOffer 
            plan="Monthly"
            price={39}
            pay="monthly"
            first="Unlock all premium interviews content"
            second="Access to updates while subscription is active"
          />
          <SaveOffer 
            plan="Quaterly"
            price={29}
            pay="quaterly"
            first="Unlock all premium interviews content"
            second="Access to updates while subscription is active"
            third="Exclusive private Discord channel with real-time support from the team"
          />
          <SaveOffer 
            plan="Annual"
            price={10}
            pay="yearly"
            first="Unlock all premium interviews content"
            second="Access to updates while subscription is active"
            third="Exclusive private Discord channel with real-time support from the team"
          />
        </div>
        <div className="mt-10 text-xs dark:text-[#A1A1AA] text-[#52525B]">
          <div>
            * Tip: Many users have reimbursed GreatFrontEnd Interviews Premium as part of their company's flexible benefits or learning and training budget.
          </div>
          <div>
            * Prices will be increased as more content is being added to the website. Subscribe early to lock in this earlybird price.
          </div>
          <div>
            * Lifetime plan is a limited time offering and will be removed in future.
          </div>
          <div>
            * Prices shown are in USD.
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-5">
          <StudentSave 
            who="Seasonal" 
            off={10}
          />
          <StudentSave
            who="Social"
            off={20}
            forWho="Complete simple tasks"
          />
          <StudentSave
            who="Student"
            off={40}
            forWho="For existing students"
          />
          <StudentSave
            who="Submit Review"
            off={100}
            forWho="Write a review"
          />
        </div>
        <div className="flex justify-end mt-6">
          <Button variant='ghost' className="rounded-3xl h-9">
            See all promotions <ArrowRight className="w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
 
export default Save;