import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const PantryCard = ({ name, pantryId }: { name: string; pantryId: string }) => {
  return (
    <>
      <Link className="focus:outline-none group" href={`/pantry/${pantryId}`}>
        <Card>
          <CardHeader className="border-b p-0"></CardHeader>
          <CardContent className="grid gap-[2px] p-4">
            <CardTitle className="truncate py-[2px]">{name}</CardTitle>
            <CardDescription className="line-clamp-2">
              This is a test description
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default PantryCard;
