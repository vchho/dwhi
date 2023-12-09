"use client";

import CustomToolTip from "@/components/custom-tooltip";
import { DatePicker } from "@/components/date-picker";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// const CreatePantryItemValidator = z.array(
//   z.object({
//     expiresAt: z.date().min(new Date()),
//     name: z
//       .string()
//       .min(3, {
//         message: "Pantry Item name must have a minimum of 3 characters",
//       })
//       .max(150, {
//         message: "Pantry Item name has a maximum of 150 characters",
//       }),
//   }),
// );

const CreatePantryItemValidator = z.object({
  expiresAt: z.date().min(new Date()),
  name: z
    .string()
    .min(3, {
      message: "Pantry Item name must have a minimum of 3 characters",
    })
    .max(150, {
      message: "Pantry Item name has a maximum of 150 characters",
    }),
});

type FormData = z.infer<typeof CreatePantryItemValidator>;

export default function CreatePantryItemClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [expiresAt, setExpiresAt] = useState<Date | undefined>(new Date());
  // const [pantryItems, setPantryItems] = useState<{ name: string }[]>([]);
  const [pantryItems, setPantryItems] = useState<{ name: string }[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(CreatePantryItemValidator),
    defaultValues: {
      expiresAt: new Date(),
      name: "",
    },
  });

  const createPantryItem = () => {
    setPantryItems([...pantryItems, { name: "Test" }]);
  };

  const onSubmit = async (content: FormData) => {
    console.log("form Data", content);
  };

  return (
    <>
      <FormItem className="space-y-3">
        <Button onClick={createPantryItem}>Add Pantry Item</Button>
      </FormItem>

      <Form {...form}>
        <form
          className="grid w-full gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormItem className="space-y-3">
            <Button>Submit</Button>
          </FormItem>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pantry Item</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type pantry name here"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem className="flex flex-col space-y-3">
            <div className="flex gap-x-2 items-center">
              <FormLabel>Expiry Date</FormLabel>
              <CustomToolTip text="Set your pantry item's expiration date">
                <Icons.info className="h-3 w-3 text-muted-foreground" />
              </CustomToolTip>
            </div>
            <FormControl>
              <DatePicker value={expiresAt} setValue={setExpiresAt} />
            </FormControl>
          </FormItem>

          {pantryItems.length > 0 && (
            <div>
              {pantryItems.map(() => (
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pantry Item</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Type pantry name here"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormItem className="flex flex-col space-y-3">
                    <div className="flex gap-x-2 items-center">
                      <FormLabel>Expiry Date</FormLabel>
                      <CustomToolTip text="Set your pantry item's expiration date">
                        <Icons.info className="h-3 w-3 text-muted-foreground" />
                      </CustomToolTip>
                    </div>
                    <FormControl>
                      <DatePicker value={expiresAt} setValue={setExpiresAt} />
                    </FormControl>
                  </FormItem>
                </>
              ))}
            </div>
          )}
        </form>
      </Form>
    </>
  );
}
