import Link from "next/link";
import GreatFrontend from "../logo/great-frontend";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import DiscordFooter from "./discord-footer";
import GithubFooter from "./github-footer";
import LinkedInFooter from "./linkedin-footer";
import XFooter from "./x-footer";

const Footer = () => {
  return (  
    <div className="flex flex-col justify-center items-center mt-40 mb-20">
      <div className="w-[80vw] flex flex-col sm:flex-row gap-4 justify-between">
        {/* First */}
        <div className="w-80"> 
          <GreatFrontend />
          <div className="text-sm mt-9">
            Subscribe to our newsletter
          </div>
          <div className="mt-5 relative">
            <Input placeholder="Enter your email" />
            <div className="absolute top-[6px] right-1">
              <Button variant='secondary' className="h-6 text-xs rounded-2xl">Notify me</Button>
            </div>
          </div>
        </div>
        {/* Second */}
        <div className="space-y-4 text-sm text-[#A1A1AA]">
          <div className="font-semibold text-white">Practice</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Get started</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">JavaScript functions</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">User interface coding</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">System design</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Quiz</div>
        </div>
        {/* Third */}
        <div className="space-y-4 text-sm text-[#A1A1AA]">
          <div className="font-semibold text-white">Guides</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Front End Interview Playbook</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Front End System Design Playbook</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Behavioral Interview Playbook</div>
        </div>
        {/* Forth */}
        <div className="space-y-4 text-sm text-[#A1A1AA]">
          <div className="font-semibold text-white">Study Plans</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">1 Week Plan</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">1 Month Plan</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">3 Months Plan</div>
        </div>
        {/* Fifth */}
        <div className="space-y-4 text-sm text-[#A1A1AA]">
          <div className="font-semibold text-white">Company</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Pricing</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Roadmap</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">About</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Team</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Contact us</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Become an affiliate</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Careers</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Blog</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">Medium</div>
          <div className="cursor-pointer hover:text-[#EFFE94] font-medium">DEV community</div>
        </div>
      </div>
      <div className="w-[80vw] mt-10">
        <div className="flex flex-col sm:flex-row gap-10 sm:items-center">
          <div className="flex sm:justify-center justify-start items-center gap-5">
            <Link href={"https://www.linkedin.com/in/ishyverma/"} target="_blank">
              <LinkedInFooter />
            </Link>
            <Link href={"https://x.com/ishyverma"} target="_blank">
              <DiscordFooter />
            </Link>
            <Link href={"https://github.com/ishyverma"} target="_blank">
              <GithubFooter />
            </Link>
            <Link href={"https://x.com/ishyverma"} target="_blank">
              <XFooter />
            </Link>
          </div>
          <div className="text-[#A1A1AA]">
            © 2025 Codeney Pte Ltd. All rights reserved.
          </div>
          <div className="h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
          <div className="text-[#A1A1AA]">
            Privacy Policy
          </div>
          <div className="h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
          <div className="text-[#A1A1AA]">
            Terms of Service
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;