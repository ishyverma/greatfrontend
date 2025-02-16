"use client";

import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";
import { Card, CardContent, CardFooter } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { useState } from "react";

const Offers = () => {
  const [selected, setSelected] = useState({
    first: true,
    second: false,
    third: false,
    forth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eight: false,
  });

  return (
    <div className="flex items-center justify-center my-14">
      <div className="sm:w-[80vw]">
        <div className="sm:text-5xl text-4xl text-[#F4F4F4] font-medium">
          The offers don't lie
        </div>
        <div className="sm:text-lg text-base mt-6 text-[#A1A1AA] lg:w-[55%] w-[88vw]">
          Scores of our users have landed multiple offers at the world's top
          companies with substantial TC gains. Be the next.
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center items-start mt-10">
          <div>
            <Card className="lg:w-[800px] w-[90vw] relative pt-5">
              <ScrollArea className="h-[200px]">
                <CardContent>
                  In today's extremely competitive and challenging job market,
                  GreatFrontEnd was key to my success in frontend interviews,
                  which led to me landing 4 senior level job offers, all at
                  large tech companies. The system design content on the site is
                  in my opinion better than any other system design content
                  available online for frontend. Prior to joining GFE, I had no
                  structure to my frontend system design interviews, but after
                  going through the material and following their recommended
                  framework, I passed every single one of my system design
                  rounds. GFE covers frontend knowledge as well as frontend
                  coding very well, their questions appeared in several of my
                  interview loops which helped me not only be fully prepared for
                  all of my interviews, but helped me excel in them. For
                  frontend developers looking to stand out in today's job market
                  via interview performance, GreatFrontEnd is a must have.
                </CardContent>
              </ScrollArea>
              <CardFooter className="pt-4">
                <Image
                  className="rounded-full"
                  src={
                    "https://www.greatfrontend.com/img/testimonials/users/yugant-joshi.jpg"
                  }
                  alt="person_image"
                  width={30}
                  height={30}
                />
                <div className="ml-2 text-sm">
                  <span className="font-medium">Yugant Joshi</span>{" "}
                  <span className="text-xs text-[#A1A1AA] font-medium">
                    Frontend Software Engineer, San Jose, US
                  </span>
                </div>
              </CardFooter>
              <BorderBeam
                size={150}
                duration={10}
                className="to-[#EFFE94] via-yellow-200 from-orange-500"
              />
            </Card>
            <div className="flex gap-4 items-center mt-5 justify-center">
              <Button
                variant={selected.first ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: true,
                    second: false,
                    third: false,
                    forth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                    eight: false,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
              <Button
                variant={selected.second ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: false,
                    second: true,
                    third: false,
                    forth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                    eight: false,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
              <Button
                variant={selected.third ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: false,
                    second: false,
                    third: true,
                    forth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                    eight: false,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
              <Button
                variant={selected.forth ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: false,
                    second: false,
                    third: false,
                    forth: true,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                    eight: false,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
              <Button
                variant={selected.fifth ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: false,
                    second: false,
                    third: false,
                    forth: false,
                    fifth: true,
                    sixth: false,
                    seventh: false,
                    eight: false,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
              <Button
                variant={selected.sixth ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: false,
                    second: false,
                    third: false,
                    forth: false,
                    fifth: false,
                    sixth: true,
                    seventh: false,
                    eight: false,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
              <Button
                variant={selected.seventh ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: false,
                    second: false,
                    third: false,
                    forth: false,
                    fifth: false,
                    sixth: false,
                    seventh: true,
                    eight: false,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
              <Button
                variant={selected.eight ? "default" : "secondary"}
                onClick={() =>
                  setSelected({
                    first: false,
                    second: false,
                    third: false,
                    forth: false,
                    fifth: false,
                    sixth: false,
                    seventh: false,
                    eight: true,
                  })
                }
                size="icon"
                className="h-1 lg:w-14 w-10"
              />
            </div>
          </div>
          <div className="lg:ml-6">
            {/* First */}
            <div className="flex items-center gap-7 mt-5 lg:mt-0">
              <div className="h-7 w-[3px] bg-[#3F3F45] rounded-t-sm rounded-b-sm" />
              <div>
                <div className="flex items-center gap-4">
                  <div className="text-xl font-medium">3 offers</div>
                  <div className="relative">
                    <Image
                      className="rounded-full border-2 border-black p-1 bg-white"
                      src={
                        "https://greatfrontend.com/img/testimonials/company/tiktok.svg"
                      }
                      alt="image"
                      width={30}
                      height={30}
                    />
                    <Image
                      className="rounded-full p-1 bg-white top-0 left-5 absolute border-2 border-black"
                      src={
                        "https://greatfrontend.com/img/testimonials/company/amazon.svg"
                      }
                      alt="image"
                      width={30}
                      height={30}
                    />
                    <Image
                      className="rounded-full p-1 absolute bg-white left-10 border-2 top-0 border-black"
                      src={
                        "https://www.greatfrontend.com/img/testimonials/company/doordash.svg"
                      }
                      alt="image"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                <div className="text-white/90 font-medium text-sm mt-3">
                  Received after using GreatFrontEnd
                </div>
                <div></div>
              </div>
            </div>
            {/* Second */}
            <div className="flex items-center gap-7 mt-4">
              <div className="h-7 w-[3px] bg-[#3F3F45] rounded-t-sm rounded-b-sm" />
              <div>
                <div className="text-xl font-medium fomt-bold">2x</div>
                <div className="text-white/90 font-medium text-sm mt-3">
                  Increase in total compensation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
