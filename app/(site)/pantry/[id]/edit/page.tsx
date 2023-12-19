import { Shell } from "@/components/shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShowBack } from "@/components/ui/header";
import EditPantryClient from "./_components/EditPantryClient";

export default async function EditPantry({
  params,
}: {
  params: { id: string };
}) {
  const pantryId = params.id;

  return (
    <Shell layout="dashboard" className="px-1">
      <Card className="h-full w-full">
        <CardHeader className="flex-1">
          <ShowBack href={`/pantry/${pantryId}`} />
          <CardTitle>Update pantry</CardTitle>
          <CardDescription className="line-clamp-2">
            Update your pantry!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditPantryClient />
        </CardContent>
      </Card>
    </Shell>
  );
}
