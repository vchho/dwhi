import { Shell } from "@/components/shell";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { getPantrys } from "./loaders";
import PantryCard from "./_components/pantry-card";

const PantryPage = async () => {
  const pantrys = await getPantrys();

  return (
    <Shell layout="dashboard" className="px-1">
      <Header
        title="Pantries"
        description="All of your current pantries are here!"
      />
      <Link
        href="/pantry/create"
        className={cn(buttonVariants({ size: "sm" }), "w-fit")}
      >
        Create Pantry
      </Link>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        {pantrys &&
          pantrys.map((pantry) => {
            return (
              <PantryCard
                key={pantry.id}
                name={pantry.name}
                pantryId={pantry.id}
              />
            );
          })}
      </div>
    </Shell>
  );
};

export default PantryPage;
