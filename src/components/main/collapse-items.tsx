'use client';

import { ChevronDown, ChevronRight, Focus } from "lucide-react";
import Blind75 from "../svg/blind";
import Company from "../svg/company";
import Frameworks from "../svg/frameworks";
import Frontend from "../svg/frontend";
import GFE from "../svg/gfe";
import Playbook from "../svg/playbook";
import Practice from "../svg/practice";
import Question from "../svg/question";
import Study from "../svg/study";
import SheetItem from "./sheet-content";
import Star from "../svg/star";
import { useState } from "react";

const collapsible = [
  {
    id: 0,
    name: "Practise questions",
    open: false,
    items: [
      {
        icon: <Practice />,
        name: "All practice questions",
        secondIcon: ""
      },
      {
        icon: <Frameworks />,
        name: "Frameworks / languages",
        secondIcon: ""
      },
      {
        icon: <Question />,
        name: "Question formats",
        secondIcon: ""
      }
    ]
  },
  {
    id: 1,
    name: "Recommended strategy",
    open: false,
    items: [
      {
        icon: <Frontend />,
        name: "Front End Interview Playbook",
        secondIcon: ""
      },
      {
        icon: <GFE />,
        name: "GFE 75",
        secondIcon: ""
      },
      {
        icon: <Blind75 />,
        name: "Blind 75",
        secondIcon: ""
      },
      {
        icon: <Playbook />,
        name: "Front End System Design Playbook",
        secondIcon: ""
      }
    ]
  },
  {
    id: 2,
    name: "Time-savers",
    open: false,
    items: [
      {
        icon: <Study />,
        name: "Study plans",
        secondIcon: <Star />
      },
      {
        icon: <Company />,
        name: "Company guides",
        secondIcon: <Star />
      },
      {
        icon: <Focus />,
        name: "Focus areas",
        secondIcon: <Star />
      },
    ]
  }
]

const CollapseItems = () => {
  const [openCollapse, setOpenCollapse] = useState(collapsible.map(item => (
    { id: item.id, isOpen: item.open }
  )))

  return (  
    <div>
      {/* First */}
      <div>
        <SheetItem 
          name="Get started" 
          classname="hover:bg-[#222225] hover:text-white/80" 
        />
        {collapsible.map(item => (
          <div key={item.id}>
            <div
              className="flex justify-between items-center hover:bg-[#222225] hover:text-white/80 transition-all duration-150 rounded cursor-pointer"
              onClick={() => {
                setOpenCollapse(prev => prev.map(i => i.id === item.id ? { id: i.id, isOpen: !item.open } : i))
                console.log(openCollapse)
              }}
            >
              <SheetItem 
                name={item.name}
              />
              {openCollapse.find(prev => prev.id === item.id)?.isOpen ? <ChevronDown className="h-4" />  : <ChevronRight className="h-4" />}
            </div>
          </div>  
        ))}
      </div>
    </div>
  );
}
 
export default CollapseItems;