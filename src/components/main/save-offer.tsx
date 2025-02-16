import { Check, Divide } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import More from "../svg/more";

interface SaveOfferProps {
  plan: string;
  price: number;
  pay: string;
  first: string;
  second: string;
  third?: string;
}

const SaveOffer = ({
  plan,
  price,
  pay,
  first,
  second,
  third
}: SaveOfferProps) => {
  return (  
    <div>
      <Card>
        <CardHeader>
          {plan} plan
        </CardHeader>
        <CardContent>
          <div className="text-5xl">
            ${price}<span className="text-sm text-[#A1A1AA]">/month</span>
          </div>
          <div className="text-[#A1A1AA] text-sm mt-2">
            Billed {pay}
          </div>
          <Button className="w-full rounded-3xl mt-4" variant='secondary'>Buy now</Button>
          <Separator className="mt-5" />
          <div className="flex items-center gap-1 text-sm mt-5">
            <div>
              <Check className="text-green-600" />
            </div>
            <div>
              {first}
            </div>
            <div className="ml-2">
              <More />
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm mt-3">
            <div>
              <Check className="text-green-600" />
            </div>
            <div>
              {second}
            </div>
          </div>
          {third && <div className="flex items-start gap-1 text-sm mt-3">
            <div>
              <Check className="text-green-600" />
            </div>
            <div>
              {third}
            </div>
          </div>}
        </CardContent>
      </Card>
    </div>
  );
}
 
export default SaveOffer;