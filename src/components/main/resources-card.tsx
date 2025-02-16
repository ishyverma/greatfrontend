interface ResourcesCardProps {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3?: React.ReactNode;
  content: string;
}

const ResourcesCard = ({
  icon1,
  icon2,
  icon3,
  content
}: ResourcesCardProps) => {
  return (  
    <div className="isolate z-20 border overflow-clip rounded-lg flex flex-col gap-6 py-6 group bg-neutral-50 dark:bg-neutral-800/40 relative before:absolute before:-z-[1] before:rounded-full before:bg-[radial-gradient(32.11%_32.11%_at_50%_50%,_#FFFFFF_0%,_#D8D8E1_100%)] before:opacity-10 before:blur-[42.0942px] before:-left-[70px] before:-top-10 before:h-[105px] before:w-[176px]">
      <div className="flex justify-center gap-6 py-10">
        <div className="border p-5 rounded-full">
          {icon1}
        </div>
        <div className="border p-5 flex items-center rounded-full">
          {icon2}
        </div>
        {icon3 && <div className="border p-5 rounded-full">
          {icon3}
        </div>}
      </div>
      <div className="px-4 font-medium flex justify-center items-center">
        {content}
      </div>
    </div>
  );
}
 
export default ResourcesCard;