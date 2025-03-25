"use client";

import { useForm } from "react-hook-form";
import CardWrapper from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { useState, useTransition } from "react";
import { newPasswordSchema } from "@/schema";
import { useSearchParams } from "next/navigation";
import { newPassword } from "@/actions/new-password";

export default function NewPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");



  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition(); // what is starTransition?

  // Zod schema for login form validation and useForm for form handling
  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema), //what is zodResolver> ZodResolver is a function that takes a Zod schema and returns a resolver function that can be used with react-hook-form to validate the form data against the schema.
    defaultValues: {
      password: ""
    },
  });
  // what is z.infer? z.infer is a utility type provided by Zod that infers the TypeScript type from a Zod schema. It allows you to get the TypeScript type that corresponds to the schema you defined. Meaning, it will create a type that matches the shape of the data you expect to validate with that schema.
  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values,token).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <div>
      <CardWrapper
        headerLabel="Enter a new password"
        backButtonLabel="Back to login?"
        backButtonHref="/auth/login"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="******"
                        type ="password"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type="submit" className="w-full" disabled={isPending}>
              Reset password
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}
