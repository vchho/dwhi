"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "../../../../../components/ui/skeleton";

const CreatePantryForm = dynamic(
  () => import("../../../../../components/forms/createPantryForm"),
  {
    ssr: false,
    loading: () => <PantryFormSkeleton />,
  },
);

const CreatePantryClient = () => {
  return <CreatePantryForm />;
};

export default CreatePantryClient;

const PantryFormSkeleton = () => {
  return (
    <div className="grid gap-5 mt-2">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>

      <Skeleton className="h-8 w-20" />
    </div>
  );
};
