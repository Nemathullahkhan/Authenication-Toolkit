"use client";

import { useForm } from "react-hook-form";
import CardWrapper from "./card-wrapper";
import { LoginSchema } from "@/schema";
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
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition(); // what is starTransition?

  // Zod schema for login form validation and useForm for form handling
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema), //what is zodResolver> ZodResolver is a function that takes a Zod schema and returns a resolver function that can be used with react-hook-form to validate the form data against the schema.
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // what is z.infer? z.infer is a utility type provided by Zod that infers the TypeScript type from a Zod schema. It allows you to get the TypeScript type that corresponds to the schema you defined. Meaning, it will create a type that matches the shape of the data you expect to validate with that schema.
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values,callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            console.log("I'm in the error")
            setError(data?.error);
          }
          if (data?.success) {
            console.log("I'm in success")
            setSuccess(data?.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
    });
  };

  return (
    <div>
      <CardWrapper
        headerLabel="Welcome back!"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-4">
              {showTwoFactor && (
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md">Two-Factor Code</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123456"
                          className="border-zinc-400"
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {!showTwoFactor && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel >Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            className="border-slate-100/20 "
                            {...field}
                            type="email"
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="******"
                            className="border-slate-100/20 "
                            {...field}
                            disabled={isPending}
                          />
                        </FormControl>
                        <Button
                          variant={"link"}
                          size="sm"
                          asChild
                          className=" font-normal justify-start "
                        >
                          <Link
                            href="/auth/reset"
                            className="text-md text-slate-500 font-semibold"
                          >
                            Forget Password?
                          </Link>
                        </Button>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <div className="w-full flex justify-center">
              <Button
                type="submit"
                className="w-full bg-slate-300 text-blue-950 hover:bg-white text-lg h-7 w-full"
                disabled={isPending}
              >
                {showTwoFactor ? "Confirm" : "Login"}
              </Button>
            </div>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
}
