import Image from "next/image";
import LinkedIn from "../svg/linkedin";
import { Card, CardContent, CardFooter } from "../ui/card";
import ProfileImage from "@/images/my-notion-face-portrait.png";
import Link from "next/link";
import Top from "../svg/top";
import Bottom from "../svg/bottom";
import Left from "../svg/left";
import Right from "../svg/right";

const PassionCard = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-40">
      <div className="flex items-center justify-center">
        <p className="dark:text-[#DDDCDD] text-[#52525B] mt-20 text-center sm:text-5xl text-3xl font-medium sm:w-[750px] w-80">
          We're crafting GreatFrontEnd with passion, precision and quality.
        </p>
      </div>
      <div className="flex items-center justify-center mt-20 relative w-auto">
        <div className="hidden sm:block">
          <Top />
          <Bottom />
          <Left />
          <Right />
        </div>
        <Card className="sm:w-[550px] w-[90vw]">
          <CardContent className="pt-6">
            <div className="darK:text-[#DDDCDD] text-[#52525B] text-base">
              "Over my career, I have conducted over hundreds of interviews at
              Meta and have personally received offers from companies like Meta,
              Google, Airbnb, Lyft, Dropbox, Palantir, etc; I have probably seen
              all possible front end interview questions that can be asked.
            </div>
            <div className="dark:text-[#DDDCDD] text-[#52525B] text-base mt-6">
              GreatFrontEnd is the culmination of my experience and knowledge in
              the front end domain to help fellow engineers efficiently and
              adequately prepare for front end interviews. The best part of
              GreatFrontEnd is that all users emerge being better front end
              engineers after using the platform."
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-between w-full">
              <div>
                <div className="dark:text-[#DDDCDD] text-[#52525B] flex items-center gap-1 text-base cursor-pointer hover:underline">
                  <Link
                    href="https://www.linkedin.com/in/ishyverma/"
                    className="flex gap-1 items-center"
                    target="_blank"
                  >
                    Shyam Verma <LinkedIn />
                  </Link>
                </div>
                <div className="text-xs mt-2 dark:text-[#A1A1AA] text-[#52525B] text-medium">
                  <div>Founder, CEO of Nothing</div>
                  <div className="sm:w-auto w-72 mt-1 sm:mt-0">
                    Ex-Staff Engineer, Meta. Author of Blind 75 and Docusaurus 2
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={ProfileImage}
                  alt="profile-image"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PassionCard;
