import { Shell } from "@/components/shell";
import { getPantry } from "./actions";
import { Header } from "@/components/ui/header";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import CreatePantryItemClient from "./_components/CreatePantryItemClient";

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments
export default async function Pantry({ params }: { params: { id: string } }) {
  const pantryId = params.id;
  const data = await getPantry({ pantryId: pantryId });

  return (
    <Shell layout="dashboard" className="px-1">
      <Header
        title={`Pantry name: ${data?.name}`}
        description={
          data?.listItems.length === 0
            ? "No pantry items added"
            : String(data?.listItems.length)
        }
      />
      <div className="flex gap-x-2">
        <Link
          href={`/pantry/${pantryId}/edit`}
          className={cn(buttonVariants({ size: "sm" }), "w-fit")}
        >
          Update Pantry
        </Link>
        <Button size={"sm"} variant={"outline"}>
          <Icons.plus className="h-4 w-4" />
          Add pantry item
        </Button>
      </div>
      <CreatePantryItemClient />
    </Shell>
  );
}
