import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import CompaniesCard from "./companies-card";

const Companies = () => {
  return (
    <div className="my-40 flex items-center justify-center">
      <div className="w-[90vw]">
        <div className="sm:text-5xl text-3xl dark:text-[#F4F4F4] text-[#52525B] sm:w-[900px] w-[90vw] font-medium">
          Leverage insider tips from leading companies
        </div>
        <div className="sm:text-lg text-base dark:text-[#A1A1AA] text-[#52525B] sm:w-[55%] w-[90vw] sm:mt-10 mt-5">
          Practicing company-specific questions is the quickest way to ace specific interviews. We regularly survey and update lists for known questions tested in top companies around the world.
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 sm:grid-rows-3 grid-rows-1 mt-10 gap-5">
          <CompaniesCard
            name="Google"
            questions={32}
            image="https://www.greatfrontend.com/img/company-logos/google-logomark.svg"
          />
          <CompaniesCard
            name="Amazon"
            questions={53}
            image="https://www.greatfrontend.com/img/company-logos/amazon-logomark.svg"
          />
          <CompaniesCard
            name="TikTok"
            questions={27}
            image="https://www.greatfrontend.com/img/company-logos/tiktok-logomark.svg"
          />
          <CompaniesCard
            name="ByteDance"
            questions={19}
            image="https://www.greatfrontend.com/img/company-logos/bytedance-logomark.svg"
          />
          <CompaniesCard
            name="Apple"
            questions={13}
            image="https://www.greatfrontend.com/img/company-logos/apple-logomark.svg"
          />
          <CompaniesCard
            name="Microsoft"
            questions={19}
            image="https://www.greatfrontend.com/img/company-logos/microsoft-logomark.svg"
          />
          <CompaniesCard
            name="Atlassian"
            questions={16}
            image="https://www.greatfrontend.com/img/company-logos/atlassian-logomark.svg"
          />
          <CompaniesCard
            name="LinkedIn"
            questions={18}
            image="https://www.greatfrontend.com/img/company-logos/linkedin-logomark.svg"
          />
          <CompaniesCard
            name="Uber"
            questions={15}
            image="https://www.greatfrontend.com/img/company-logos/uber-logomark.svg"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button 
            variant="secondary"
            className="rounded-3xl h-8 text-xs"
          >
            View full list <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Companies;
