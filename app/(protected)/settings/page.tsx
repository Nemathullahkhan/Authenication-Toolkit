// "use client";

// import { settings } from "@/actions/settings";
// import FormError from "@/components/form-error";
// import FormSuccess from "@/components/form-success";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Switch } from "@/components/ui/switch";
// import { useCurrentUser } from "@/hooks/user-current-user";
// import { SettingsSchema } from "@/schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { UserRole } from "@prisma/client";
// import { useSession } from "next-auth/react";
// import { startTransition, useState, useTransition } from "react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// const SettingsPage = () => {
//   const [error, setError] = useState<string | undefined>();
//   const [success, setSuccess] = useState<string | undefined>();
//   const [isPending, setPending] = useTransition();
//   const { update } = useSession();

//   const user = useCurrentUser();

//   const form = useForm<z.infer<typeof SettingsSchema>>({
//     resolver: zodResolver(SettingsSchema),
//     defaultValues: {
//       name: user?.name || undefined,
//       email: user?.email || undefined,
//       password: undefined,
//       newPassword: undefined,
//       role: user?.role || undefined,
//       isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
//     },
//   });

//   const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
//     startTransition(() => {
//       settings(values)
//         .then((data) => {
//           if (data.error) {
//             setError(data.error);
//           }

//           if (data.success) {
//             update();
//             setSuccess(data.success);
//           }
//         })
//         .catch(() => setError("Something went wrong!"));
//     });
//   };

//   return (
//     <Card className="w-[600px]">
//       <CardHeader>
//         <p className="text-2xl font-semibold text-center">Settings</p>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
//             <div className="space-y-5">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Username</FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder={user?.name || "johndoe"}
//                         {...field}
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {user?.isOAuth === false && (
//                 <>
//                   <FormField
//                     control={form.control}
//                     name="email"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="johndoe@example.com"
//                             {...field}
//                             disabled={isPending}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="******"
//                             {...field}
//                             disabled={isPending}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="newPassword"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>New Password</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="******"
//                             {...field}
//                             disabled={isPending}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </>
//               )}

//               <FormField
//                 control={form.control}
//                 name="role"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Role</FormLabel>
//                     <Select
//                       disabled={isPending}
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a role" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
//                         <SelectItem value={UserRole.USER}>User</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {user?.isOAuth === false && (
//                 <FormField
//                   control={form.control}
//                   name="isTwoFactorEnabled"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
//                       <div className="space-y-0.5">
//                         <FormLabel>Two Factor Authentication</FormLabel>
//                         <FormDescription>
//                           Enable two factor authentiation for your account
//                         </FormDescription>
//                       </div>
//                       <FormControl>
//                         <Switch
//                           disabled={isPending}
//                           checked={field.value}
//                           onCheckedChange={field.onChange}
//                         />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//               )}
//             </div>
//             <FormError message={error} />
//             <FormSuccess message={success} />
//             <Button type="submit" disabled={isPending}>
//               Save
//             </Button>
//           </form>
//         </Form>
//       </CardContent>
//     </Card>
//   );
// };

// export default SettingsPage;


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
import * as z from "zod";

const SettingsPage = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
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
    <Card className="w-[600px] bg-slate-950/30 text-slate-200 shadow-md border-2 border-blue-950/50 mt-10">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Settings</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-row items-center justify-between rounded-lg border border-slate-700/70 p-3 shadow-sm hover:border-slate-600/80 transition-colors">
                      <FormLabel className="text-sm font-medium">Username</FormLabel>
                      <FormControl>
                        <Input
                          className="text-xs max-w-[250px] text-center font-mono p-1 bg-slate-900/80 px-4 text-white rounded-md border-none focus-visible:ring-1 focus-visible:ring-slate-500/60 focus-visible:border-slate-500/60"
                          placeholder={user?.name || "johndoe"}
                          {...field}
                          disabled={isPending}
                        />
                      </FormControl>
                    </div>
                    <FormMessage className="text-red-400 text-xs" />
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
                        <div className="flex flex-row items-center justify-between rounded-lg border border-slate-700/70 p-3 shadow-sm hover:border-slate-600/80 transition-colors">
                          <FormLabel className="text-sm font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              className="text-xs max-w-[250px] font-mono p-1 bg-slate-900/80 px-4 text-amber-400 rounded-md border-none focus-visible:ring-1 focus-visible:ring-slate-500/60 focus-visible:border-slate-500/60"
                              placeholder="johndoe@example.com"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-row items-center justify-between rounded-lg border border-slate-700/70 p-3 shadow-sm hover:border-slate-600/80 transition-colors">
                          <FormLabel className="text-sm font-medium">Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="text-xs max-w-[250px] font-mono p-1 bg-slate-900/80 px-4 text-violet-400 rounded-md border-none focus-visible:ring-1 focus-visible:ring-slate-500/60 focus-visible:border-slate-500/60"
                              placeholder="******"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400 text-xs" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex flex-row items-center justify-between rounded-lg border border-slate-700/70 p-3 shadow-sm hover:border-slate-600/80 transition-colors">
                          <FormLabel className="text-sm font-medium">New Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="text-xs max-w-[250px] font-mono p-1 bg-slate-900/80 px-4 text-lime-400 rounded-md border-none focus-visible:ring-1 focus-visible:ring-slate-500/60 focus-visible:border-slate-500/60"
                              placeholder="******"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-red-400 text-xs" />
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
                    <div className="flex flex-row items-center justify-between rounded-lg border border-slate-700/70 p-3 shadow-sm hover:border-slate-600/80 transition-colors">
                      <FormLabel className="text-sm font-medium">Role</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="text-xs max-w-[180px] font-mono p-1 bg-slate-900/80 px-4 text-white rounded-md border-none focus:ring-1 focus:ring-slate-500/60 focus:border-slate-500/60">
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-slate-900 border border-slate-700 text-slate-200">
                          <SelectItem value={UserRole.ADMIN} className="hover:bg-slate-800">Admin</SelectItem>
                          <SelectItem value={UserRole.USER} className="hover:bg-slate-800">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              
              {user?.isOAuth === false && (
                <FormField
                  control={form.control}
                  name="isTwoFactorEnabled"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-row items-center justify-between rounded-lg border border-slate-700/70 p-3 shadow-sm hover:border-slate-600/80 transition-colors">
                        <div className="space-y-0.5">
                          <FormLabel className="text-sm font-medium">Two Factor Authentication</FormLabel>
                          <FormDescription className="text-xs text-slate-400">
                            Enable two factor authentication for your account
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
                      </div>
                      <FormMessage className="text-red-400 text-xs" />
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
              className="w-full bg-slate-300 text-blue-950 h-7 text-md"
            >
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;