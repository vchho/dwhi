import { Shell } from "@/components/shell";
import { getPantry, getPantryItems } from "./actions";
import { Header } from "@/components/ui/header";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PantryItemCard from "./_components/pantry-item-card";

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments
export default async function Pantry({ params }: { params: { id: string } }) {
  const pantryId = params.id;
  const data = await getPantry({ pantryId: pantryId, needListItems: true });
  const pantryItems = await getPantryItems({ pantryId: pantryId });

  return (
    <Shell layout="dashboard" className="">
      <Header
        title={`Pantry name: ${data?.name}`}
        description={
          data?.listItems.length === 0
            ? "No pantry items added"
            : `Pantry Items: ${String(data?.listItems.length)}`
        }
      />
      <div className="flex gap-x-2">
        <Link
          href={`/pantry/${pantryId}/create`}
          className={cn(buttonVariants({ size: "sm" }), "w-fit")}
        >
          Create Pantry Item
        </Link>
      </div>
      {/* <div className="flex flex-col gap-y-4"> */}
      <div className="flex flex-col gap-y-2">
        <div className="focus:outline-none group">
          {/* <div className="grid items-center gap-8 pb-8 pt-6 md:py-8 px-1"> */}
          <div className="grid items-center gap-6 pb-3 pt-3 sm:grid-cols-2 md:grid-cols-2">
            {pantryItems &&
              pantryItems.map((pantryItem) => {
                return (
                  <PantryItemCard pantryItem={pantryItem} key={pantryItem.id} />
                );
              })}
          </div>
        </div>
      </div>
    </Shell>
  );
}
