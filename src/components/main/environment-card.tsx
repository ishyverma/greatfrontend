interface EnvironmentCardProps {
  picture: React.ReactNode;
  content: string;
}

const EnvironmentCard = ({
  picture,
  content
}: EnvironmentCardProps) => {
  return (  
    <div className="relative isolate z-20 overflow-clip flex flex-col gap-6 p-6 sm:p-4 md:p-6 rounded-lg group bg-neutral-50 dark:bg-neutral-800/40 before:absolute before:-z-[1] before:h-[130px] before:w-[210px] before:rounded-full before:bg-[radial-gradient(32.11%_32.11%_at_50%_50%,_#FFFFFF_0%,_#D8D8E1_100%)] before:opacity-10 before:blur-[42.0942px] before:-left-[70px] before:-top-10">
      {picture}
      <p className="font-medium">{content}</p>
    </div>
  );
}
 
export default EnvironmentCard;