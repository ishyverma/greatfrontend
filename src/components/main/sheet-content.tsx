interface SheetItemProps {
  name: string;
  classname?: string;
}

const SheetItem = ({ 
  name,
  classname
}: SheetItemProps) => {

  return (  
    <div className={`flex justify-between items-center p-2 rounded transition-all duration-150 cursor-pointer ${classname}`}>
      <div className="font-semibold text-sm">
        {name}
      </div>
    </div>
  );
}

export default SheetItem;