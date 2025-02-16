import { Check, CheckCircle } from "lucide-react";
import { CodeBlock } from "../ui/code-block";

const Automatic = () => {
  const code =`
export default function makeCounter(initialValue = 0) {
  let count = initialValue - 1;

  return () => {
    count += 1;
    return count;
  };
}`

  return (  
    <div className="my-40 flex items-center justify-center">
        <div className="w-[90vw]">
          <div className="lg:text-5xl text-3xl dark:text-[#F4F4F4] text-[#52525B] lg:w-[900px] w-[90vw] font-medium">
            Test your code automatically with a single click
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-10">
            <div className="sm:text-lg text-base dark:text-[#A1A1AA] text-[#52525B] lg:w-[45%] w-[90vw]">
              Polish your answers with a comprehensive test suite that covers all the important edge cases that interviewers will look out for.
              <div className="mt-10 flex items-center text-sm">
                <span className="rounded-full border dark:border-white border-black mr-2"> <Check className="w-3 h-3" /></span> Fully public and customizable
              </div>
              <div className="mt-2 flex items-center text-sm">
                <span className="rounded-full border dark:border-white border-black mr-2"> <Check className="w-3 h-3" /></span> Detailed test scenarios for UI questions
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <CodeBlock
                language="tsx"
                filename="make-counter.tsx"
                code={code}
              />
            </div>
          </div>
        </div>
    </div>
  );
}
 
export default Automatic;