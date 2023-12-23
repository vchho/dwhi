"use client";

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
import { PantryItemAction } from "./PantryItemAction";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

interface PantryItem {
  id: string;
  userId: string | null;
  name: string;
  listId: string;
  measurement: string;
  quantity: number;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PantryItemCard = ({ pantryItem }: { pantryItem: PantryItem }) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dayJSDate = dayjs().tz(timezone).format();

  const todaysDate = new Date(dayJSDate.split("T")[0]);
  console.log({ todaysDate, dayJSDate, timezone });

  const unit = "hours";

  return (
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
                        dayjs(pantryItem.expiresAt).diff(todaysDate, unit) / 24,
                      )} days`}</span>
                    ) : (
                      <span className="text-red-500">{`Expired ${Math.abs(
                        Math.floor(
                          dayjs(pantryItem.expiresAt).diff(todaysDate, unit) /
                            24,
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
  );
};

export default PantryItemCard;
