import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Interview = () => {
  return (
    <div className="flex justify-center items-center my-40">
      <div className="w-[90vw]">
        <h1 className="lg:text-5xl text-3xl dark:text-[#F4F4F4] text-[#52525B] font-medium">
          A simple yet comprehensive plan to follow
        </h1>
        <p className="dark:text-[#A1A1AA] text-[#52525B] text-lg lg:w-[60%] w-[90vw] mt-6">
          Front end interviews are even broader in scope than traditional
          software engineering interviews. On top of the wide range of front end
          topics that could be asked, some companies still include standard DSA
          questions for front end roles.
        </p>
        <p className="text-lg dark:text-[#D6D6D7] text-[#52525B] lg:w-[60%] w-[90vw] mt-8">
          We've condensed everything into a simple strategy you can use to
          conquer essential interview patterns.
        </p>
        <div className="mt-20 lg:flex hidden justify-between items-center gap-10 relative">
          <div className="flex flex-col gap-14 justify-normal">
            <Button className="cursor-text w-28" variant="secondary">
              Accessibility
            </Button>
            <Button className="cursor-text w-40" variant="secondary">
              JavaScript Functions
            </Button>
            <Button className="cursor-text w-24" variant="secondary">
              React
            </Button>
            <Button className="cursor-text w-28" variant="secondary">
              Networking
            </Button>
            <Button className="cursor-text w-52" variant="secondary">
              Data structures & algorithms
            </Button>
          </div>
          <div>
            <Card className="w-72 relative rounded-lg">
              <CardContent className="flex flex-col gap-4 mt-5">
                <Button
                  className="flex hover:border hover:border-[#EAFD7B] text-base w-full pl-2 justify-start items-center"
                  variant="secondary"
                >
                  <span className="w-7 flex justify-center items-center rounded-full border border-[#2D2D30] h-7 bg-[#1E1E21] dark:text-[#71717A] text-[#52525B]">
                    1
                  </span>{" "}
                  GFE 75
                </Button>
                <Button
                  className="flex hover:border hover:border-[#EAFD7B] text-base w-full pl-2 justify-start items-center"
                  variant="secondary"
                >
                  <span className="w-7 flex justify-center items-center rounded-full border border-[#2D2D30] h-7 bg-[#1E1E21] dark:text-[#71717A] text-[#52525B]">
                    2
                  </span>{" "}
                  Blind 75
                </Button>
                <Button
                  className="flex hover:border hover:border-[#EAFD7B] text-base w-full pl-2 justify-start items-center"
                  variant="secondary"
                >
                  <span className="w-7 flex justify-center items-center rounded-full border border-[#2D2D30] h-7 bg-[#1E1E21] dark:text-[#71717A] text-[#52525B]">
                    3
                  </span>{" "}
                  Front end system design
                </Button>
                <BorderBeam
                  size={100}
                  duration={10}
                  className="to-[#EFFE94] via-yellow-200 from-orange-500"
                />
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-14 items-end">
            <Button className="cursor-text w-48" variant="secondary">
              Front end system design
            </Button>
            <Button className="cursor-text w-36" variant="secondary">
              DOM manipulation
            </Button>
            <Button className="cursor-text w-44" variant="secondary">
              Internationalization
            </Button>
            <Button className="cursor-text w-36" variant="secondary">
              User interfaces
            </Button>
            <Button className="cursor-text w-28" variant="secondary">
              Performance
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
