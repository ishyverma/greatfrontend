import Image from "next/image";
import Questions from "../svg/questions";
import { ArrowRight } from "lucide-react";

interface CompaniesCardProps {
  image: string;
  questions: number;
  name: string;
}

const CompaniesCard = ({
  image,
  questions,
  name
}: CompaniesCardProps) => {
  return (  
    <div className="bg-[#1E1E21] rounded-lg border border-[#35353A] p-4 flex justify-between items-center group cursor-pointer">
      <div>
        <div className="flex gap-4 items-center justify-center">
          <Image 
            className="bg-white rounded-lg p-2"
            src={image}
            alt="image"
            width={40}
            height={40}
          />
          <div>
            <div className="font-semibold">
              {name}
            </div>
            <div className="flex gap-2 items-center text-[#A1A1AA] text-xs">
              <Questions /> {questions} questions
            </div>
          </div>
        </div>
      </div>
      <div>
        <ArrowRight className="group-hover:text-[#EAFD7B]" />
      </div>
    </div>
  );
}
 
export default CompaniesCard;