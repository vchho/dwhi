"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "../../../../../../components/ui/skeleton";

const EditPantryForm = dynamic(
  () => import("../../../../../../components/forms/editPantryForm"),
  {
    ssr: false,
    loading: () => <PantryFormSkeleton />,
  },
);

const EditPantryClient = () => {
  return <EditPantryForm />;
};

export default EditPantryClient;

const PantryFormSkeleton = () => {
  return (
    <div className="grid gap-5 mt-2">
      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>

      <Skeleton className="h-8 w-20" />
    </div>
  );
};
