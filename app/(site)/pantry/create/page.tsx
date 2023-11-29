import { Shell } from "@/components/shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShowBack } from "@/components/ui/header";
import CreatePollClient from "@/components/wrappers/CreatePantryClient";

const CreatePantry = () => {
  return (
    <Shell layout="dashboard" className="px-1">
      <Card className="h-full w-full">
        <CardHeader className="flex-1">
          <ShowBack href="/pantry" />
          <CardTitle>Create pantry</CardTitle>
          <CardDescription className="line-clamp-2">
            Create a pantry and add pantry items to it!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreatePollClient />
        </CardContent>
      </Card>
    </Shell>
  );
};

export default CreatePantry;
