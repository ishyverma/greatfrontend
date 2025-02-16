import Image from "next/image";
import LinkedIn from "../svg/linkedin";

interface PersonTooltipProps {
  company?: string;
  companyImg?: string;
  date: string;
  content: string;
  name: string;
  jobTitle: string;
  personImg: string;
}

const PersonTooltip = ({
  company,
  companyImg,
  date,
  content,
  name,
  jobTitle,
  personImg,
}: PersonTooltipProps) => {
  return (
    <div className="w-96 rounded-lg p-4">
      <div className="flex justify-between items-center">
        {/* First row */}
        {companyImg && (
          <div className="flex items-center">
            <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full p-2">
              <Image src={companyImg} alt="companyImg" width={20} height={20} />
            </div>
            <span className="ml-4 text-[#A1A1AA] font-semibold text-xs">
              Offer from
              <span className="font-medium ml-1 text-white">{company}</span>
            </span>
          </div>
        )}
        {/* Second row */}
        <div>
          <span className="text-[#A1A1AA] font-semibold text-xs">{date}</span>
        </div>
      </div>
      <div className="mt-4 leading-6 font-medium flex-grow">{content}</div>
      <div className="mt-4 flex gap-4">
        <Image
          src={personImg}
          alt="personImg"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="space-y-1">
          <div className="hover:underline cursor-pointer flex gap-1 items-center">
            {name}
            <LinkedIn />
          </div>
          <div className="text-xs text-[#9C9CA3]">{jobTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonTooltip;
