import { PantryAction } from "@/components/pantry-action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PantryCard = ({
  name,
  pantryId,
  description,
}: {
  name: string;
  pantryId: string;
  description: string;
}) => {
  return (
    <Card>
      <CardHeader className="border-b p-0"></CardHeader>
      <CardContent className="grid gap-[2px] p-4">
        <CardTitle className="truncate py-[2px]">
          <div className="flex justify-between">
            {name}
            <PantryAction pantryId={pantryId} />
          </div>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PantryCard;
