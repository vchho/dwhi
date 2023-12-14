import { Shell } from "@/components/shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShowBack } from "@/components/ui/header";
import CreatePantryItemClient from "../../create/_components/CreatePantryItemClient";

export default async function CreatePantryItem({
  params,
}: {
  params: { id: string };
}) {
  const pantryId = params.id;

  return (
    <Shell layout="default" className="px-1">
      <Card className="h-full w-full">
        <CardHeader className="flex-1">
          <ShowBack href={`/pantry/${pantryId}`} />
          <CardTitle>Create pantry item</CardTitle>
          <CardDescription className="line-clamp-2">
            Add your pantry item here!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreatePantryItemClient pantryId={pantryId} />
        </CardContent>
      </Card>
    </Shell>
  );
}
