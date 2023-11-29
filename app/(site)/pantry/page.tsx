import { Shell } from "@/components/shell";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PantryPage = () => {
  return (
    <Shell layout="dashboard" className="px-1">
      <Header title="Pantries" description="All of your current pantries are here!"/>
      <Link
        href="/pantry/create"
        className={cn(buttonVariants({ size: "sm" }), "w-fit")}
      >
        Create Pantry
      </Link>
      <h1>List of Pantries here</h1>
    </Shell>
  );
};

export default PantryPage;
