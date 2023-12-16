"use client";

import { DatePicker } from "@/components/date-picker";
// import { ComboboxDemo } from "@/components/dropdown";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { measurements } from "@/lib/measurements";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createPantryItem } from "../actions";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const CreatePantryItemValidator = z.object({
  expiresAt: z.date().min(new Date()),
  // expiresAt: z.union([z.date().min(new Date()), z.undefined()]),
  measurement: z.string({
    required_error: "Please select a measurement",
  }),
  name: z
    .string()
    .min(3, {
      message: "Pantry Item name must have a minimum of 3 characters",
    })
    .max(150, {
      message: "Pantry Item name has a maximum of 150 characters",
    }),
  // https://github.com/shadcn-ui/ui/issues/421
  // https://github.com/orgs/react-hook-form/discussions/6980#discussioncomment-6982493
  quantity: z.coerce
    .number({ required_error: "Quantity is required" })
    .positive({ message: "Quantity must be positive" })
    .int({ message: "Quantity must be integer" })
    .or(z.string())
    .pipe(
      z.coerce
        .number({ required_error: "Quantity is required" })
        .positive({ message: "Quantity must be positive" })
        .int({ message: "Quantity must be integer" }),
    ),
  // quantity: z
  //   .number()
  //   .min(0, "Amount must be a positive number")
  //   .parse((value: string) => parseFloat(value)),
});

type FormData = z.infer<typeof CreatePantryItemValidator>;

export default function CreatePantryItem({ pantryId }: { pantryId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [expiresAt, setExpiresAt] = useState<Date | undefined>(new Date());

  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(CreatePantryItemValidator),
    defaultValues: {
      expiresAt: new Date(),
      measurement: "",
      name: "",
    },
  });

  const onSubmit = async (
    content: z.infer<typeof CreatePantryItemValidator>,
  ) => {
    setIsLoading(true);

    createPantryItem({
      pantryId: pantryId,
      pantryName: content.name,
      expiresAt: expiresAt,
      measurement: content.measurement,
      quantity: content.quantity,
    })
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Success!",
          description: "Your pantry item was created.",
        });

        router.push(`/pantry/${pantryId}`);
        router.refresh();
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          title: "Error!",
          description: "There was an error in creating your pantry!",
        });
        console.error("Error from createPantryForm", error);
      });
  };

  return (
    <Form {...form}>
      <form className="space-y-8 w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pantry Item</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Pantry item name here"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Pantry item quantity here"
                    {...field}
                    type="text"
                    disabled={isLoading}
                    // pattern="/(\D+)/g" // to receive only numbers without showing does weird arrows in the input                    value={field.value || ""} // avoid errors of uncontrolled vs controlled
                    inputMode="numeric"
                    onChange={(e) => {
                      e.target.validity.valid && field.onChange(e.target.value); // e.target.validity.valid is required for pattern to work
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="expiresAt"
            render={() => (
              <FormItem>
                <FormLabel>Expiration Date</FormLabel>
                <FormControl>
                  <DatePicker value={expiresAt} setValue={setExpiresAt} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="measurement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Measurement</FormLabel>
                <Select onValueChange={field.onChange} disabled={isLoading}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a measurement " />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {measurements.map((measurement) => {
                      return (
                        <SelectItem
                          value={measurement.value}
                          key={measurement.id}
                        >
                          {measurement.name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button>Create</Button>
      </form>
    </Form>
  );
}
