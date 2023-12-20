import { Shell } from "@/components/shell";
import { getPantry, getPantryItems } from "./actions";
import { Header } from "@/components/ui/header";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { PantryItemAction } from "./_components/PantryItemAction";
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments
export default async function Pantry({ params }: { params: { id: string } }) {
  const pantryId = params.id;
  const data = await getPantry({ pantryId: pantryId, needListItems: true });
  const pantryItems = await getPantryItems({ pantryId: pantryId });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dayJSDate = dayjs().tz(timezone).format();

  const todaysDate = new Date(dayJSDate.split("T")[0]);

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
          href={`/pantry/${pantryId}/edit`}
          className={cn(buttonVariants({ size: "sm" }), "w-fit")}
        >
          Update Pantry
        </Link>
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
                  <div key={pantryItem.id}>
                    <Card className="flex h-full flex-col dark:hover:border-neutral-900 hover:border-neutral-100 transition focused">
                      <CardHeader className="flex-1 py-5">
                        <CardTitle className="line-clamp-1">
                          {/* <div className="flex justify-between gap-2.5"> */}
                          <div className="flex justify-between">
                            <div className="space-y-2.5">
                              {/* <div className="flex flex-col md:flex-row md:items-center gap-x-2.5"> */}
                              <div className="flex flex-col items-start gap-x-2.5">
                                {pantryItem.name}
                                <div className="space-x-1">
                                  <span className="text-sm text-muted-foreground">
                                    {dayjs(pantryItem.expiresAt).diff() > 0 ? (
                                      <span className="">{`Expires ${Math.floor(
                                        dayjs(pantryItem.expiresAt).diff(
                                          todaysDate,
                                          "hours",
                                        ) / 24,
                                      )} days`}</span>
                                    ) : (
                                      <span className="text-red-500">{`Expired ${Math.abs(
                                        Math.floor(
                                          dayjs(pantryItem.expiresAt).diff(
                                            todaysDate,
                                            "hours",
                                          ) / 24,
                                        ),
                                      )} days ago`}</span>
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <PantryItemAction />
                          </div>
                        </CardTitle>
                        <CardDescription className="font-normal">
                          {"Test description"}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Shell>
  );
}
