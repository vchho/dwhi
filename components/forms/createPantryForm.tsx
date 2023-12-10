"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createPantryAction } from "@/app/(site)/pantry/create/actions";
import { toast } from "../ui/use-toast";

// https://stackoverflow.com/questions/73715295/react-hook-form-with-zod-resolver-optional-field
const CreatePantryValidator = z.object({
  name: z
    .string()
    .min(3, { message: "Pantry name must have a minimum of 3 characters" })
    .max(150, { message: "Pantry name has a maximum of 150 characters" }),
  description: z.preprocess(
    (desc) => {
      if (!desc || typeof desc !== "string") return undefined;
      return desc === "" ? undefined : desc;
    },
    z
      .string()
      .min(3, {
        message: "Pantry description must have a minimum of 3 characters",
      })
      .max(150, {
        message: "Pantry description has a maximum of 150 characters",
      })
      .optional(),
  ),
});

type FormData = z.infer<typeof CreatePantryValidator>;

const CreatePantryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: zodResolver(CreatePantryValidator),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (content: FormData) => {
    setIsLoading(true);
    createPantryAction({
      pantryName: content.name,
      pantryDescription: content.description ? content.description : "",
    })
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Success!",
          description: "Your pantry was created.",
        });

        router.push("/pantry");
        router.refresh();
      })
      .catch((error) => {
        setIsLoading(false);
        toast({
          title: "Error!",
          description: "There was an error in creating your pantry!",
        });
        console.log("Error from createPantryForm", error);
      });
  };

  return (
    <Form {...form}>
      <form
        className="grid w-full gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pantry name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type pantry name here"
                  {...field}
                  disabled={isLoading}
                  // autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type pantry description here"
                  {...field}
                  disabled={isLoading}
                  // autoFocus
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-fit" size="sm" disabled={isLoading}>
          Create
          <span className="sr-only">Create pantry</span>
        </Button>
      </form>
    </Form>
  );
};

export default CreatePantryForm;
