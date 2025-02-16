'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import PassionCard from "./passion-card";

const CraftingGFE = () => {
  const [isSelected, setIsSelected] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false
  })

  return (  
    <div className="flex flex-col items-center justify-center mb-5">
      <div className="lg:flex hidden gap-2">
        <Button
          variant={isSelected.first ? "default" : "secondary"}  
          className={`rounded-3xl h-8 text-xs font-[501]`}
          onClick={() => {
            setIsSelected(prev => ({
              first: true,
              second: false,
              third: false,
              fourth: false
            }))
          }}
        >
          UI Components
        </Button>
        <Button
          variant={isSelected.second ? "default" : "secondary"}
          className={`rounded-3xl h-8 text-xs font-[501]`}
          onClick={() => {
            setIsSelected(prev => ({
              first: false,
              second: !prev.second,
              third: false,
              fourth: false
            }))
          }}>JavaScript functions</Button>
        <Button
          variant={isSelected.third ? "default" : "secondary"}
          className="rounded-3xl h-8 text-xs font-[501]"
          onClick={() => {
            setIsSelected(prev => ({
              first: false,
              second: false,
              third: true,
              fourth: false
            }))
          }}>System design</Button>
        <Button 
          variant={isSelected.fourth ? "default" : "secondary"}
          className={`rounded-3xl h-8 text-xs font-[501]`}
          onClick={() => {
            setIsSelected(prev => ({
              first: false,
              second: false,
              third: false,
              fourth: true
            }))
          }}>Quiz</Button>
      </div>
      <div>
        <PassionCard />
      </div>
    </div>
  );
}
 
export default CraftingGFE;