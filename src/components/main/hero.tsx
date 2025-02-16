"use client";

import { useEffect, useState } from "react";
import Amazon from "../svg/amazon";
import Google from "../svg/google";
import Meta from "../svg/meta";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import PersonFeedback from "./persons-feedback";
import Graph from "../svg/graph";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1300);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="w-[90vw] lg:pl-20">
        <div className="lg:max-w-[800px]">
          <div className="w-[500px]">
            <TextGenerateEffect
              duration={0.5}
              words="Navigate front end interviews with ease"
            />
          </div>
          <div className="text-[#A1A1AA] text-xl mt-8 font-medium delay-150 transition-all">
            <div
              className={`transition-opacity duration-1000 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              } w-[90vw] sm:w-[70vw] lg:w-[600px]`}
            >
              Meet the{" "}
              <span className="text-white">
                front end interview prep platform
              </span>{" "}
              built to make your interviews much easier. By Big Tech
              ex-interviewers at
              <span className="ml-2">
                <Google />
                <Amazon />
                <Meta />
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center items-start lg:self-center gap-10 mt-10">
              <div className="flex flex-col items-center justify-center">
                <Button
                  variant="primary"
                  className={`transition-opacity rounded-3xl duration-1000 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  } w-48`}
                >
                  Get started now <ArrowRight />
                </Button>
                <div
                  className={`transition-opacity font-medium duration-1000 mt-4 text-sm ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  200+ questions are free to do
                </div>
              </div>
              <div className="flex lg:items-center justify-center gap-10">
                <div
                  className={`flex lg:items-center transition-opacity duration-1000 ease-in-out relative ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <PersonFeedback />
                </div>
                <div
                  className={`transition-all duration-1000 ease-in-out ml-24 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="text-[#D1D1D5] text-sm font-semibold">
                          500k+ engineers already on board
                        </div>
                        <div className="flex gap-2 text-[#A1A1AA] text-xs mt-1">
                          <Graph />
                          Verifiable by Google Analytics
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#E4E4E7] w-72 text-xs text-center font-medium text-black">
                        <p>
                          We've had 500k+ unique active users on our site.
                          Verifiable by Google Analytics.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
