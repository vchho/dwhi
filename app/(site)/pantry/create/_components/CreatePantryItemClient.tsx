"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "../../../../../components/ui/skeleton";

const CreatePantryItem2Form = dynamic(
  () => import("../../[id]/create/_components/CreatePantryItem"),
  {
    ssr: false,
    loading: () => <PantryItemFormSkeleton />,
  },
);

const CreatePantryItemClient = ({ pantryId }: { pantryId: string }) => {
  return <CreatePantryItem2Form pantryId={pantryId} />;
};

export default CreatePantryItemClient;

const PantryItemFormSkeleton = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-5">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />

        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />

        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>

      <Skeleton className="h-8 w-20" />
    </div>
  );
};
