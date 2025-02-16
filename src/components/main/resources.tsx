import ResourcesCard from "./resources-card";
import AmazonBig from "./amazon-big";
import GoogleBig from "./google-big";
import MetaBig from "./meta-big";
import JSPage from "../svg/js-page";
import Svellete from "../svg/svellte";
import Dino from "../svg/dino";

const Resources = () => {
  return (  
    <div className="my-40 flex items-center justify-center">
      <div className="w-[90vw]">
        <div className="sm:text-5xl text-3xl dark:text-[#F4F4F4] text-[#52525B] lg:w-[900px] w-[90vw] font-medium">
          Let big tech senior/staff engineers write your prep resources
        </div>
        <div className="sm:text-lg text-base mt-6 dark:text-[#A1A1AA] text-[#52525B] lg:w-[55%] w-[90vw]">
          Having interviewed hundreds of candidates, we know what to look out for. Learn best practices and techniques gleaned from years of experience.
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 my-10 gap-5">
          <ResourcesCard 
            content="By Senior to Principal-level Engineers at the world's best companies"
            icon1={<GoogleBig />}
            icon2={<MetaBig />}
            icon3={<AmazonBig />}
          />
          <ResourcesCard 
            content="Creators of widely-used interview materials"
            icon1={<JSPage />}
            icon2={<Dino />}
          />
          <ResourcesCard 
            content="Core maintainers of well-known open source projects"
            icon1={<Svellete />}
            icon2={<Dino />}
          />
        </div>
      </div>
    </div>
  );
}
 
export default Resources;