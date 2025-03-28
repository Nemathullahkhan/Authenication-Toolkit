// // "use client";

// // import { settings } from "@/actions/settings";
// // import FormError from "@/components/form-error";
// // import FormSuccess from "@/components/form-success";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent, CardHeader } from "@/components/ui/card";
// // import {
// //   Form,
// //   FormControl,
// //   FormDescription,
// //   FormField,
// //   FormItem,
// //   FormLabel,
// //   FormMessage,
// // } from "@/components/ui/form";
// // import { Input } from "@/components/ui/input";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Switch } from "@/components/ui/switch";
// // import { useCurrentUser } from "@/hooks/user-current-user";
// // import { SettingsSchema } from "@/schema";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import { UserRole } from "@prisma/client";
// // import { useSession } from "next-auth/react";
// // import { startTransition, useState, useTransition } from "react";
// // import { useForm } from "react-hook-form";
// // import * as z from "zod";

// // const SettingsPage = () => {
// //   const [error, setError] = useState<string | undefined>();
// //   const [success, setSuccess] = useState<string | undefined>();
// //   const [isPending, setPending] = useTransition();
// //   const { update } = useSession();

// //   const user = useCurrentUser();

// //   const form = useForm<z.infer<typeof SettingsSchema>>({
// //     resolver: zodResolver(SettingsSchema),
// //     defaultValues: {
// //       name: user?.name || undefined,
// //       email: user?.email || undefined,
// //       password: undefined,
// //       newPassword: undefined,
// //       role: user?.role || undefined,
// //       isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
// //     },
// //   });

// //   const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
// //     startTransition(() => {
// //       settings(values)
// //         .then((data) => {
// //           if (data.error) {
// //             setError(data.error);
// //           }

// //           if (data.success) {
// //             update();
// //             setSuccess(data.success);
// //           }
// //         })
// //         .catch(() => setError("Something went wrong!"));
// //     });
// //   };

// //   return (
// //     <Card className="w-[600px]">
// //       <CardHeader>
// //         <p className="text-2xl font-semibold text-center">Settings</p>
// //       </CardHeader>
// //       <CardContent>
// //         <Form {...form}>
// //           <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
// //             <div className="space-y-5">
// //               <FormField
// //                 control={form.control}
// //                 name="name"
// //                 render={({ field }) => (
// //                   <FormItem>
// //                     <FormLabel>Username</FormLabel>
// //                     <FormControl>
// //                       <Input
// //                         placeholder={user?.name || "johndoe"}
// //                         {...field}
// //                         disabled={isPending}
// //                       />
// //                     </FormControl>
// //                     <FormMessage />
// //                   </FormItem>
// //                 )}
// //               />
// //               {user?.isOAuth === false && (
// //                 <>
// //                   <FormField
// //                     control={form.control}
// //                     name="email"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel>Email</FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             placeholder="johndoe@example.com"
// //                             {...field}
// //                             disabled={isPending}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="password"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel>Password</FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             placeholder="******"
// //                             {...field}
// //                             disabled={isPending}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                   <FormField
// //                     control={form.control}
// //                     name="newPassword"
// //                     render={({ field }) => (
// //                       <FormItem>
// //                         <FormLabel>New Password</FormLabel>
// //                         <FormControl>
// //                           <Input
// //                             placeholder="******"
// //                             {...field}
// //                             disabled={isPending}
// //                           />
// //                         </FormControl>
// //                         <FormMessage />
// //                       </FormItem>
// //                     )}
// //                   />
// //                 </>
// //               )}

// //               <FormField
// //                 control={form.control}
// //                 name="role"
// //                 render={({ field }) => (
// //                   <FormItem>
// //                     <FormLabel>Role</FormLabel>
// //                     <Select
// //                       disabled={isPending}
// //                       onValueChange={field.onChange}
// //                       defaultValue={field.value}
// //                     >
// //                       <FormControl>
// //                         <SelectTrigger>
// //                           <SelectValue placeholder="Select a role" />
// //                         </SelectTrigger>
// //                       </FormControl>
// //                       <SelectContent>
// //                         <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
// //                         <SelectItem value={UserRole.USER}>User</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                     <FormMessage />
// //                   </FormItem>
// //                 )}
// //               />
// //               {user?.isOAuth === false && (
// //                 <FormField
// //                   control={form.control}
// //                   name="isTwoFactorEnabled"
// //                   render={({ field }) => (
// //                     <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
// //                       <div className="space-y-0.5">
// //                         <FormLabel>Two Factor Authentication</FormLabel>
// //                         <FormDescription>
// //                           Enable two factor authentiation for your account
// //                         </FormDescription>
// //                       </div>
// //                       <FormControl>
// //                         <Switch
// //                           disabled={isPending}
// //                           checked={field.value}
// //                           onCheckedChange={field.onChange}
// //                         />
// //                       </FormControl>
// //                     </FormItem>
// //                   )}
// //                 />
// //               )}
// //             </div>
// //             <FormError message={error} />
// //             <FormSuccess message={success} />
// //             <Button type="submit" disabled={isPending}>
// //               Save
// //             </Button>
// //           </form>
// //         </Form>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default SettingsPage;

"use client";

import { settings } from "@/actions/settings";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Switch } from "@/components/ui/switch";
import { useCurrentUser } from "@/hooks/user-current-user";
import { SettingsSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
import { startTransition, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import type * as z from "zod";

const SettingsPage = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, setPending] = useTransition();
  const { update } = useSession();

  const user = useCurrentUser();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <Card className="w-full max-w-[500px] bg-slate-950/30 text-slate-200 shadow-md border-2 border-blue-950/50 mt-4">
      <CardHeader className="pb-2">
        <p className="text-xl font-semibold text-center -mb-10">Settings</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between border border-slate-700/50 px-2 py-1 rounded-md">
                      <FormLabel className="text-sm">Username</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-slate-900/80 w-32 h-8 text-sm text-center text-white border-slate-700 focus-visible:ring-slate-500/60"
                          placeholder={user?.name || "johndoe"}
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              {user?.isOAuth === false && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between border border-slate-700/50 px-2 py-1 rounded-md">
                          <FormLabel className="text-sm">Email</FormLabel>
                          <FormControl>
                            <Input
                              className="bg-slate-900/80 w-48 h-8 text-sm text-center text-amber-400 border-slate-700 focus-visible:ring-slate-500/60"
                              placeholder="johndoe@example.com"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between border border-slate-700/50 px-2 py-1 rounded-md">
                          <FormLabel className="text-sm">Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="bg-slate-900/80 w-32 h-8 text-sm text-center text-violet-400 border-slate-700 focus-visible:ring-slate-500/60"
                              placeholder="******"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between border border-slate-700/50 px-2 py-1 rounded-md">
                          <FormLabel className="text-sm">
                            New Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="bg-slate-900/80 w-32 h-8 text-sm text-center text-lime-400 border-slate-700 focus-visible:ring-slate-500/60"
                              placeholder="******"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between border border-slate-700/50 px-2 py-1 rounded-md">
                      <FormLabel className="text-sm">Role</FormLabel>
                      <FormControl>
                        <Select
                          disabled={isPending}
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="bg-slate-900/80 w-32 h-8 text-sm text-center text-white border-slate-700 focus:ring-slate-500/60">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-slate-700 text-slate-200">
                            <SelectItem
                              value={UserRole.ADMIN}
                              className="hover:bg-slate-800"
                            >
                              Admin
                            </SelectItem>
                            <SelectItem
                              value={UserRole.USER}
                              className="hover:bg-slate-800"
                            >
                              User
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </div>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              {user?.isOAuth === false && (
                <FormField
                  control={form.control}
                  name="isTwoFactorEnabled"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between border border-slate-700/50 px-2 py-1 rounded-md">
                      <div>
                        <FormLabel className="text-sm">
                          Two Factor Auth
                        </FormLabel>
                        <FormDescription className="text-xs text-slate-400">
                          Enable 2FA for your account
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-red-500"
                          disabled={isPending}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              )}
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-8 text-sm bg-slate-300 text-blue-950 hover:bg-slate-200"
            >
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
