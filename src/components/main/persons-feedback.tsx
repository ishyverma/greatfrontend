import Image from "next/image";
import PersonTooltip from "./tooltip-person";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const PersonFeedback = () => {
  return (
    <div className="relative">
      <TooltipProvider>
        <Tooltip delayDuration={10}>
          <TooltipTrigger className="hover:z-10 cursor-pointer">
            <Image
              className="rounded-full hover:z-10 border-2 border-black"
              width={35}
              height={35}
              alt="first"
              src={
                "https://www.greatfrontend.com/img/testimonials/users/loc-chuong.jpg"
              }
            />
          </TooltipTrigger>
          <TooltipContent side="top">
            <PersonTooltip
              company="Amazon"
              companyImg="https://www.greatfrontend.com/img/testimonials/company/amazon.svg"
              personImg="https://www.greatfrontend.com/img/testimonials/users/loc-chuong.jpg"
              name="Loc Chuong"
              content="The material on this site is a literal gold mine. Before using GreatFrontEnd, I was failing phone screening rounds left and right. I never even came close to making it to the onsite round. After going through the material on GFE, I was able to land several onsites and passed my very first one! I was able to secure a job only after ~2.5 months of studying GFE at Amazon! The material on GFE is especially easy to understand and I have personally been asked questions from GFE NUMEROUS times. Additionally, GFE's Discord channel and community are so very helpful when it comes to sharing their previous interview experiences. It is very active and everyone is very open to helping!"
              date="Jul 2024"
              jobTitle="Frontend Engineer II (L5), Arlington, VA, US"
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip delayDuration={10}>
          <TooltipTrigger className="hover:z-10 cursor-pointer">
            <Image
              className="rounded-full border-2 hover:z-10 border-black absolute left-7 top-0"
              width={35}
              height={35}
              alt="first"
              src={
                "https://www.greatfrontend.com/img/testimonials/users/deanna-tran.jpg"
              }
            />
          </TooltipTrigger>
          <TooltipContent className="mb-9" side="top">
            <PersonTooltip
              company="Cloudflare"
              companyImg="https://www.greatfrontend.com/img/testimonials/company/cloudflare.svg"
              personImg="https://www.greatfrontend.com/img/testimonials/users/deanna-tran.jpg"
              name="Deanna Tran"
              content="GreatFrontEnd's product and community were crucial to my success in finding a new job after being laid off. GFE gave me guardrails around how I should focus my studying, I learned so much that I'll use in my career, not just for interviews. With their help, I achieved a 17% increase in base pay and 46% increase in total compensation at Cloudflare! Thank the universe for GreatFrontEnd!"
              date="Jun 2024"
              jobTitle="Software Engineer, New York, US"
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip delayDuration={10}>
          <TooltipTrigger>
            <Image
              className="rounded-full border-2 hover:z-10 border-black absolute left-14 top-0"
              width={35}
              height={35}
              alt="first"
              src={
                "https://www.greatfrontend.com/img/testimonials/users/yugant-joshi.jpg"
              }
            />
          </TooltipTrigger>
          <TooltipContent className="mb-9" side="top">
            <PersonTooltip
              company="TikTok"
              companyImg="https://www.greatfrontend.com/img/testimonials/company/tiktok.svg"
              personImg="https://www.greatfrontend.com/img/testimonials/users/yugant-joshi.jpg"
              name="Yugant Joshi"
              content="When I started interviewing for frontend positions, I found it really hard to find quality content for the interviews whereas backend interviews seemed to have an endless supply of questions ranging from leetcode-style to system design. GreatFrontEnd provides an amazing platform to hone your frontend skills for interviews and beyond. It helped me bridge the gaps in my knowledge of the core fundamentals and provided an awesome framework for system design that really dove into the tradeoffs of the design decisions I choose. GreatFrontEnd was truly a game changer for my interviews skills and I will definitely be coming back to it in the future."
              date="Sep 2024"
              jobTitle="Frontend Software Engineer, San Jose, US"
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip delayDuration={10}>
          <TooltipTrigger>
            <Image
              className="rounded-full border-2 hover:z-10 border-black absolute left-[82px] top-0"
              width={35}
              height={35}
              alt="first"
              src={
                "https://www.greatfrontend.com/img/testimonials/users/chenwei-zhang.jpg"
              }
            />
          </TooltipTrigger>
          <TooltipContent className="mb-9" side="top">
            <PersonTooltip
              company="Meta"
              companyImg="https://www.greatfrontend.com/img/testimonials/company/meta.svg"
              personImg="https://www.greatfrontend.com/img/testimonials/users/chenwei-zhang.jpg"
              name="Chenwei Zhang"
              content="I joined GreatFrontEnd at the beginning of this year when I was trying to prepare my interviews. There are many resources about system design out there on the Internet but they are more for distributed systems and not meant for front end engineers. The system design materials on GFE are definitely gems. It opens up my mind about how to approach a system design question by using the RADIO framework. More importantly, the team behind it is super responsive and supportive. They not only provide interview guidance in a timely manner but also give you advice about career growth whenever necessary. All in all, I really appreciate the help I get from GFE!"
              date="Apr 2024"
              jobTitle="Front End Engineer, San Francisco, US"
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip delayDuration={10}>
          <TooltipTrigger>
            <Image
              className="rounded-full border-2 hover:z-10 border-black absolute left-28 top-0"
              width={35}
              height={35}
              alt="first"
              src={
                "https://www.greatfrontend.com/img/testimonials/users/ed-wang.jpg"
              }
            />
          </TooltipTrigger>
          <TooltipContent className="mb-9" side="top">
            <PersonTooltip
              company="Microsoft"
              companyImg="https://www.greatfrontend.com/img/testimonials/company/microsoft.svg"
              personImg="https://www.greatfrontend.com/img/testimonials/users/ed-wang.jpg"
              name="Ed Wang"
              content="Initially practized few free questions on the platform, loved the UI and bought a lifetime subscription. It contains interview-level JS and React ready for practice that too in a Leetcode style. Didn't see this much quality of questions anywhere. And the way they handled system design content makes this a one stop resource for interview preparation and also for upskilling as a developer. Thanks @greatfrontend."
              date="Apr 2024"
              jobTitle="Principal UX Engineer, San Francisco, US"
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default PersonFeedback;
